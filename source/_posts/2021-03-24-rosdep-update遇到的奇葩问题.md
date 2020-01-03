---
title: 关于rosdep的奇葩问题
categories:
  - 学习写bug
tags:
  - ros
  - rosdep
  - kinetic
  - OpenSSL
date: 2021-03-24 18:24:02

---

---

[TOC]

# 问题描述

``` base
$ rosdep update
reading in sources list data from /etc/ros/rosdep/sources.list.d
Hit file:///etc/ros/rosdep/sources.list.d/osx-homebrew.yaml
ERROR: unable to process source [https://raw.githubusercontent.com/ros/rosdistro/master/releases/fuerte.yaml]:
	Failed to download target platform data for gbpdistro:
	<urlopen error  [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:590)>
Hit file:///etc/ros/rosdep/sources.list.d/base.yaml

```

还有诸如`cannot download default sources list from` 、`unable to process source`等

# 问题原因

> 搜索了一圈，发现大部分网友基本都是因为`你懂的`原因，出现了无法访问的问题，通过修改`host`、修改`nameserver`这些方法就能解决问题，但我遇到的问题好像是与`SSL安全证书`相关，网上搜索折腾了半天，终于还是update成功，特此记录一下。

> 这里贴几个比较好的帖子，从问题根源分析，提出了对应的解决方案：
>
> >1. [sudo rosdep init 出现 ERROR: cannot download default sources list from:](https://blog.csdn.net/nanianwochengshui/article/details/105702188)
> >   这个分析了原因，基本能解决大部分人`rosdep init\update`问题,另外插一句，别xjb用`sudo`。
> >2. [rosdep init、update一步到位](https://blog.csdn.net/baidu_28975749/article/details/114694015?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-1&spm=1001.2101.3001.4242) 
> >   针对我的问题看了一下，并没有到位，因为我的问题根源在于SSL证书校验。
> >3. [python ssl错误(或信任私有证书)：全局取消验证](https://blog.csdn.net/blances/article/details/105970354)
> >   干净利落，能解决我的问题。
> >4. [关于python出现ssl：certificate_verify_failed问题](https://blog.csdn.net/yixieling4397/article/details/79861379)
> >   较`3.`的基础上，简要分析了一下原因，并提出重视安全问题时，推荐使用的方法。



# 解决办法

从第一个帖子大致了解到，`rosdep init` 、`rosdep update` 干了些啥。
`rosdep init`通过访问预设的url ，下载了`20-default.list` 放在了`/etc/ros/rosdep/sources.list.d/20-default.list`路径。

而`rosdep update`则根据`20-default.list`的路径，去下载更新其余配置。


> 大致的归纳了一下，常见的几个解决办法总结如下：
>
> 1. 直接法：网络腿脚不便，修改`hosts`，`resolv.conf`;
> 2. 间接法（**推荐**）：手动下载几个文件，将url指向本地文件地址；
> 3. 取消ssl验证(**针对certificate verify failed (_ssl.c:590)**)；

   ## rosdep init

   ###  第一种方法:

   > 1. 通过[https://www.ipaddress.com/](https://githubusercontent.com.ipaddress.com/raw.githubusercontent.com)
   >    解析到raw.githubusercontent.com的ip地址
   >    ![raw.githubusercontent](2021-3-24-1616566537676.png)
   > 2. sudo vim /etc/hosts
   >    `185.199.108.133 raw.githubusercontent.com`添加到hosts文件中；或者在`/etc/resolv.conf`中添加google的DNS `nameserver 8.8.8.8`

### 第二种方法（推荐）：

>  博客一里边的思路，针对Kinetic有效，**建议用这个方法，毕竟第一种方法看脸**
>
>  1. 下载[rosdistro库](https://github.com/ros/rosdistro)，网络腿脚不便的同学，可以采用码云克隆仓库下载，也可以通过github镜像站下载，具体方法就不展开了。
>  2. 修改刚刚下载的`rosdistro库`,将里边的`rosdep/source.list.d/20-default.list`修改成如下形式：
>
>  ``` yaml
>  # 注意， file://后边的字符串，更改为你存放对应文件的具体地址
>  # os-specific listings first
>  #yaml https://raw.githubusercontent.com/ros/rosdistro/master/rosdep/osx-homebrew.yaml osx
>  yaml file://你的rosdistro路径/rosdep/sources.list.d/osx-homebrew.yaml osx
>  # generic
>  gbpdistro file://你的rosdistro路径/rosdep/sources.list.d/fuerte.yaml fuerte
>  yaml file://你的rosdistro路径/rosdep/sources.list.d/base.yaml
>  yaml file://你的rosdistro路径/rosdep/sources.list.d/python.yaml
>  yaml file://你的rosdistro路径/rosdep/sources.list.d/ruby.yaml
>  # newer distributions (Groovy, Hydro, ...) must not be listed anymore, they are being fetched from the rosdistro index.yaml instead
>  ```
>
>  3. 修改`/usr/lib/python2.7/dist-packages/rosdep2/sources_list.py`，将`DEFAULT_SOURCES_LIST_URL`修改为20-default.list存放的路径
>
>  ``` python
>  DEFAULT_SOURCES_LIST_URL = 'file://你的rosdistro路径/rosdep/sources.list.d/20-default.list'
>  ```
>
>  同样的
>  修改`/usr/lib/python2.7/dist-packages/rosdep2/rep3.py文件：`
>
>  ``` python
>  # location of targets file for processing gbpdistro files
>  REP3_TARGETS_URL = 'file://你的rosdistro路径/releases/targets.yaml'
>  ```
>
>  修改`/usr/lib/python2.7/dist-packages/rosdistro/__init__.py文件：`
>
>  ``` python
>  # index information
>  
>  DEFAULT_INDEX_URL = 'file://你的rosdistro路径/index-v4.yaml'
>  
>  def get_index_url():
>  ```
>
>  `rosdep init`即可，不管报错不报错，接着执行后边的操作就性了。


## rosdep update

大部分人到这一步应该都没啥问题了，可我就不一样了（叉会儿腰），
我的一直报错**certificate verify failed (_ssl.c:590)**)，讲道理是可以不用管这个错误的，直接手动下载放到对应的文件夹即可，但看着这个错误，心里就是不爽。

奋斗了大半夜，最后找到了两种解决办法，推荐第二种。
**解决办法分两种**

### 第一种方法：

> 在`/usr/lib/python2.7/dist-packages/rosdistro/__init__.py`中添加
>
> ``` python
> import ssl
> ssl._create_default_https_context = ssl._create_unverified_context
> ```
>
> ![rosdep update](2021-3-24-1616569842987.png)

### 第二种方法（推荐）：

考虑到之前重新编译过OpenSSL，怀疑是不是证书文件夹指向有问题。
根据[Configure OpenSSL for Linux](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/how-to-configure-openssl-linux?pivots=programming-language-cpp)的步骤，查看 :

>```bash
>$ openssl version -a |grep OPENSSLDIR
>```
>
>输出
>
>```bash
>OPENSSLDIR: "/usr/local/ssl" 
>```
>
>接着查看`/usr/local/ssl/certs`是否包含`.crt` 、`.pem`的个人证书文件，如果有很多，你就不用接着往下看了。因为我也不知道该怎么解决。
>如果是空的，或者只有零星的一两个文件，那么很有可能原先存放证书的文件夹不是这个。

**解决办法**
在shell环境中指定`SSL_CERT_DIR`路径到实际存放证书的路径下。或者把证书文件链接到上一步输出的路径。

>```bash
>$ locate ssl/certs
>#可以看到 /etc/ssl/certs/有很多的.crt、.pem
>$ export SSL_CERT_DIR=/etc/ssl/certs
>#执行
>rodep update 
>
>```
>
>![rosdep update successed](2021-3-24-1616572205910.png)

当然了，也可以做个软链接到`/usr/local/ssl`，不得不说，linux的软链接是真的舒服。

``` bash
	sudo mv /usr/local/ssl/certs /usr/local/ssl/certs.bak
	sudo ln -s /etc/ssl/certs /usr/local/ssl/certs
```

