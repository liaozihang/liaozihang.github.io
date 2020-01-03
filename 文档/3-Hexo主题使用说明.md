\>

# 3-hexo使用说明

置顶 工具/ hexo hexo 3-hexo

创建时间:2017-03-23 15:13

字数:1,421 阅读:12268 [评论:66](https://yelog.org/2017/03/23/3-hexo-instruction/#comments)

> 下面如果没有特殊说明， `_config.yml` 都指主题配置文件，即 `3-hexo` 目录下

## 自定义首页

可查看这篇文章： [3-hexo配置首页](https://yelog.org/2017/03/13/3-hexo-homepage/)

## blog快捷键

可查看这篇文章： [3-hexo快捷键说明](https://yelog.org/2017/03/24/3-hexo-shortcuts/)

## 更换头像

两种方式：

1. 替换 `source/img/avatar.jpg` 图片。
2. 修改 `_config.yml` 中头像的配置记录

```
# 你的头像url
avatar: /img/avatar.jpg
favicon: /img/avatar.jpg
123
```

## 设置链接图标

如下，如果没有连接，则不展示图标。

```
#链接图标，链接为空则不显示
link:
  rss: /atom.xml
  github: https://github.com/yelog
  facebook: https://www.facebook.com/faker.tops
  twitter:
  linkedin:
  instagram:
  reddit: https://www.reddit.com/user/yelog/
  weibo: http://weibo.com/u/2307534817
  email: jaytp@qq.com
1234567891011
```

## 开启`关于`页面

1. 在

    

   ```
   hexo
   ```

    

   根目录执行以下，创建

    

   ```
   关于
   ```

    

   页面

   ```
   hexo new page "about"
   1
   ```

2. 位置： `source/aoubt/index.md` ，根据需要进行编辑。

3. 在主题中开启显示：修改主题根目录

    

   ```
   _config.yml
   ```

    

   中的

    

   ```
   about
   ```

    

   的

    

   ```
   on
   ```

    

   为

    

   ```
   true
   ```

   ，如下所示

   ```
   menu:
   about:  # '关于' 按钮
    on: true # 是否显示
    url: /about  # 跳转链接
    type: 1 # 跳转类型 1：站内异步跳转 2：当前页面跳转 3：打开新的tab页
   12345
   ```

## 添加音乐插件

[3-hexo 添加音乐插件](https://yelog.org/2019/10/08/3-hexo-add-music/)

## 配置评论系统

目前添加了三种评论系统 **disqus、多说、网易云跟帖、gitment、gitalk**

> `日志：` 2017-03-21：多说将于2017-06-01正式关停服务

### 启用评论

以 `disqus` 为例；

1. 关掉其他两个评论（设置on: false）
2. 启用 `disqus` ,设置on: true
3. 登陆 `disqus` 注册，得到shortname，填入shortname。
4. 重启 `hexo`。

### meta区显示评论数

开启设置 `_config.yml`

```
comment_count: true
# 文章标题下方显示评论数
12
```



![开启效果](http://img.saodiyang.com/FlDHXpVnJ-ECFCehRBoKkQMlqj_R.png)

开启效果



### 评论区预加载

开启设置 `_config.yml`

```
preload_comment: false
1
```

1. false: 当点击评论条等区域时再加载评论模块
2. true: 页面加载时加载评论区



![关闭效果](http://img.saodiyang.com/FrYn2xsPMLBizQZ_p_mCa-hJYTG_.png)

关闭效果



## 样式设置

### 代码高亮

首先要关闭hexo根目录下`_config.yml`中的高亮设置：

```
highlight:
  enable: false
12
```

配置主题下`_config.yml`中的高亮设置：
可以根据提示，配置喜欢的高亮主题

```
highlight:
  on: true # true开启代码高亮
  lineNum: true # true显示行号
  theme: darcula
# 代码高亮主题,效果可以查看 https://highlightjs.org/static/demo/
# 支持主题：
# sublime : 参考sublime的高亮主题
# darcula : 参考idea中的darcula的主题
# atom-dark : 参考Atom的dark主题
# atom-light : 参考Atom的light主题
# github : 参考GitHub版的高亮主题
# github-gist : GitHub-Gist主题
# brown-paper : 牛皮纸效果
# gruvbox-light : gruvbox的light主题
# gruvbox-dark ： gruvbox的dark主题
# rainbow :
# railscasts :
# sunburst :
# kimbie-dark :
# kimbie-light :
# school-book : 纸张效果
```

### MathJax数学公式

修改 `_config.yml`

```
# MathJax 数学公式支持
mathjax:
  on: true #是否启用
  per_page: false # 若只渲染单个页面，此选项设为false，页面内加入 mathjax: true
```

考虑到页面的加载速度，支持渲染单个页面。
设置 `per_page: false` ,在需要渲染的页面内 加入 `mathjax: true`

> **`注意:`**
> 由于hexo的MarkDown渲染器与MathJax有冲突，可能会造成矩阵等使用不正常。所以在使用之前需要修改两个地方
> 编辑 `node_modules\marked\lib\marked.js` 脚本

1. 将451行 ，这一步取消了对

    

   ```
   \\,\{,\}
   ```

    

   的转义(escape)

   ```
   escape: /^\\([\\`*{}\[\]()# +\-.!_>])/,
   改为
   escape: /^\\([`*\[\]()# +\-.!_>])/,
   ```

2. 将459行，这一步取消了对斜体标记

    

   ```
   _
   ```

    

   的转义

   ```
   em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
   改为
   em:/^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
   
   ```

### 表格样式

目前提供了3中样式，修改 `_config.yml`

```
table: green_title
# table 的样式
# 为空时类似github的table样式
# green 绿色样式
# green_title 头部为青色的table样式

```

### 文章列表的hover样式

鼠标移入的背景色和文字颜色变动，设置 `_config.yml`

```
#文章列表 鼠标移上去的样式, 为空时使用默认效果
article_list:
  hover:
    background: '#e2e0e0'  # 背景色:提供几种：'#c1bfc1'  '#fbf4a8'
    color:     # 文字颜色 提供几种：'#ffffff'
# 注意：由于颜色如果包含#，使用单引号 ' 引起来

```

## 开启字数统计

1. 开启此功能需先安装插件，在 hexo根目录 执行 `npm i hexo-wordcount --save`
2. 修改 `_config.yml`

```
word_count: true
```

## 多作者模式

可查看这篇文章： [3-hexo多作者模式](https://yelog.org/2017/02/28/3-hexo-multiple-author/)

## 文章排序及置顶

可查看这篇文章： [Hexo置顶及排序问题](https://yelog.org/2017/02/24/hexo-top-sort/)

## 关于写文章

### 如何写

每篇文章最好写上文集和标签，方便筛选和查看。
一般推荐一篇文章设置一个文集，一个或多个标签
`categories`:文集，为左侧列表
`tags`:标签，通过#来筛选
例如 本篇文章的设置

```
---
title: 3-hexo使用说明
date: 2017-03-23 15:13:47
categories:
- 工具
tags:
- hexo
- 3-hexo
---
```

### 写作

1.设置模板，blog根目录 `scaffolds/post.md`
加入categories,tags等，这样以后通过 `hexo new` 生成的模板就不用写这两个单词了。
当然，你也可以写入任何你每个文章中都会有的部分。

```
---
title: {{ title }}
date: {{ date }}
categories:
tags:
---
```

## 技巧

### 快捷命令

其实就通过alias，触发一些命令的集合
在 `~/.bashrc` 文件中添加

```
alias hs='hexo clean && hexo g && hexo s'  #启动本地服务
alias hd='hexo clean && hexo g && hexo d'  #部署博客
```

甚至你也可以加入备份文章的命令，可以自由发挥。

### 博客备份（快捷命令升级版）

为了保证我们写的文章不丢失、快速迁移博客，都需要备份我们的blog。

1. 博客根目录，执行 `git init` 创建 git 仓库。

2. 在 github（或其他托管平台、自建远程仓库等） 创建仓库并和本地仓库建立联系。

3. 在

    

   ```
   ~/.bashrc
   ```

    

   文件中添加

   ```
   alias hs='hexo clean && hexo g && hexo s'
   alias hd='hexo clean && hexo g && hexo d && git add . && git commit -m "update" && git push -f'
   ```

这样，我们在执行 `hd` 进行部署时，就一同将博客进行备份了

------

*转载请注明来源，欢迎对文章中的引用来源进行考证，欢迎指出任何有错误或不够清晰的表达。可以在下面评论区评论，也可以邮件至 jaytp@qq.com*

赏

文章标题:3-hexo使用说明

文章字数:1,421

本文作者:叶落阁

发布时间:2017-03-23, 15:13:47

最后更新:2019-10-08, 11:06:54

原始链接:[http://yelog.org/2017/03/23/3-hexo-instruction/](https://yelog.org/2017/03/23/3-hexo-instruction/)

版权声明: ["署名-非商用-相同方式共享 4.0"](http://creativecommons.org/licenses/by-nc-sa/4.0/) 转载请保留原文链接及作者。

[66](https://github.com/yelog/yelog.github.io/issues/43) 条评论

未登录用户



[支持 Markdown 语法](https://guides.github.com/features/mastering-markdown/)预览使用 GitHub 登录

![头像](https://avatars2.githubusercontent.com/u/12960822?v=4)

[QgZhan](https://github.com/QgZhan)发表于将近 2 年前

多谢了！

![头像](https://avatars3.githubusercontent.com/u/1684829?v=4)

[houjianyu84](https://github.com/houjianyu84)发表于将近 2 年前

非常感谢你的主题。这个主题结构非常清晰。现在正在学着配置。文档也很容易懂。

![头像](https://avatars0.githubusercontent.com/u/30406289?v=4)

[withzhaoyu](https://github.com/withzhaoyu)发表于超过 1 年前

大佬，找了半天主体发现你的好棒，借用啦~

![头像](https://avatars1.githubusercontent.com/u/14227866?v=4)

[yelog](https://github.com/yelog)发表于超过 1 年前

> @zhaijiayu12345
> 请教一下，在Windows下，怎么写脚本让其一键部署博客（代替手动输入hexo clean，hexo g，hexo d）？谢谢

windows 脚本的话暂时没有研究。不过下面方法可以稍微简化一下命令使用
在任意目录右击，打开 git bash here ， 执行下面语句，注意:下面两行全部复制，一起执行

```
echo "alias hs='hexo clean && hexo g && hexo s'  #启动本地服务
alias hd='hexo clean && hexo g && hexo d'  #部署博客">> ~/.bashrc && source ~/.bashrc
```

执行完上述语句后，直接使用执行 `hd` 命令代替 `hexo clean，hexo g，hexo d`，使用 `hs` 命令代替 `hexo clean && hexo g && hexo s`

> 甚至你可以参考本篇文章的 **博客备份（快捷命令升级版）**，来进行其他方面的升级

![头像](https://avatars0.githubusercontent.com/u/30542109?v=4)

[yutianaiqingtian](https://github.com/yutianaiqingtian)发表于大约 1 年前

很好啊，有个问题想请教下， 如何添加头像下外链图标？比如，我想添加 csdn 的或者微信公众号的

![头像](https://avatars2.githubusercontent.com/u/4079296?v=4)

[becauseofyou](https://github.com/becauseofyou)发表于大约 1 年前

现在好像是阅读数等于评论数了，是哪里出了问题

![头像](https://avatars1.githubusercontent.com/u/14227866?v=4)

[yelog](https://github.com/yelog)发表于大约 1 年前

[@becauseofyou](https://github.com/becauseofyou) 不算子之前的域名过期了，已修改提交。
[![image](https://user-images.githubusercontent.com/14227866/48592316-c41c2800-e982-11e8-8c55-0318bc57e170.png)](https://user-images.githubusercontent.com/14227866/48592316-c41c2800-e982-11e8-8c55-0318bc57e170.png)

![头像](https://avatars1.githubusercontent.com/u/10909786?v=4)

[xizhimojie](https://github.com/xizhimojie)发表于12 个月前

最底下单词拼错了， buit 改成 built

![头像](https://avatars1.githubusercontent.com/u/10909786?v=4)

[xizhimojie](https://github.com/xizhimojie)发表于12 个月前

还有firefox下 tags 那个按钮会错位，需要修复下

![头像](https://avatars1.githubusercontent.com/u/14227866?v=4)

[yelog](https://github.com/yelog)发表于12 个月前

> [@xizhimojie](https://github.com/xizhimojie)
> 还有firefox下 tags 那个按钮会错位，需要修复下

多谢提醒，这两个问题已修复并提交，更新主题即可

加载更多

©2016-2019 Yelog

Built with [Hexo](https://hexo.io/) and [3-hexo](https://github.com/yelog/hexo-theme-3-hexo) theme