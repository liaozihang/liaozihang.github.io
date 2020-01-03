---
layout: 'title:'
title: writeDemo
date: 2020-01-04 17:40:28
categories:
- 工具
tags:
- hexo
---

@[toc]

[TOC]

# test

## test

- ### 1

  - #### 1.1[^footnote1]

- ### 2

- ### 3

# tag-hide
## Inline
``` markdown

{% hideInline content,display,bg,color %}

content: 文本內容

display: 按鈕顯示的文字(可選)

bg: 按鈕的背景顏色(可選)

color: 按鈕文字的顏色(可選)

```
飞得高的蜜蜂叫Bee，飞得低的蜜蜂叫什么? {% hideInline Low bee,查看答案,#FF7242,#fff %}


``` markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}

content: 文本內容
display: 按鈕顯示的文字(可選)
bg: 按鈕的背景顏色(可選)
color: 按鈕文字的顏色(可選)
```
答案是什么
{% hideBlock 点击查看答案 %}
有锤子答案
{% endhideBlock %}
## Toggle
``` markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}

display 不能有英文逗号， 可用&sbquo;
```

{% hideToggle Butterfly安装文档3&sbquo;主题配置1 %}
详情查看
https://butterfly.js.org/posts/4aa8abbe/#tag-hide
{% endhideToggle %}



{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}




|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |

[百度](https://www.baidu.com/)

```cpp
int foo (double foo_){
   // run tracking
   if (cfg->camera_->setup_type_ == openvslam::camera::setup_type_t::Monocular)
   {
      mono_tracking(cfg, vocab_file_path->value(), data_dir_path->value(),
                    frame_skip->value(), no_sleep->is_set(), auto_term->is_set(),
                    eval_log->is_set(), map_db_path->value(), equal_hist->is_set());
   }
   else
   {
      throw std::runtime_error("Invalid setup type: " + cfg->camera_->get_setup_type_string());
   }

}
```

`highlight`

> 引用1
>
> > 引用1.1

<!--注释-->

~~del~~

- [ ] 任务列表
- [x] 已完成

[^footnote1]: 这是脚注提示1

------


{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2022年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}




---


$\exp \left( \phi ^{\wedge}\right) =\sum ^{\infty }_{n=0}\dfrac {1}{n!}\left( \phi ^{\wedge}\right) ^{n}$

$$
\exp \left( \phi ^{\wedge}\right) =\sum ^{\infty }_{n=0}\dfrac {1}{n!}\left( \phi ^{\wedge}\right) ^{n}
$$
