---
updated: 2022-08-09T03:40:06.651Z
date: 2022-08-09 13:37:00
title:  HTML的一些简单语法
categories: 前端
tags: HTML
excerpt: HTML
---



##  HTML的一些简单语法



### 1、简单的HTML页面架构

```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
	</body>
</html>

```

### 2、常见的标签

#### 2.1 meta标签

 ’<meta>‘元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

设置网站关键字    meta name="keywords" content="网络安全，WEB渗透，数据安全，渗透测试，安全培训" />

<link>标签定义文档与外部资源的关系。

’<script>‘ 用来引入js文件

注释

<!--这是一段注释。注释不会在浏览器中显示。-->

<p>这是一段普通的段落。</p>

#### 2.2 标题标签

由大到小

<h1>h1</h1>

<h2>h2</h2>

<h3>h3</h3>

<h4>h4</h4>

<h5>h5</h5>

<h6>6</h6>

</br> 换行标签

’<hr>‘换行线标签

#### 2.3文本属性

<strong>加粗</strong>

<b></b>加粗

<i></i>斜体

<u></u> 下划线

<sup></sup>上标

<sub></sub>下标

<del></del> 删除线

<font></font> 规定字体属性

​    size 字体的大小

​    color 字体颜色

  

代码样式原样输出

``<pre> </pre>``

#### 2.4 form表单

form表单 规定当提交表单时向何处发送表单数据

method 提交的方法有 get、post

规定在发送表单数据之前如何对其进行编码。

enctype 属性可能的值

​        application/x-www-form-urlencoded

​        multipart/form-data

​        text/plain

input标签

name：同样是表示的该文本输入框名称。

size：输入框的长度大小。

maxlength：输入框中允许输入字符的最大数。

value：输入框中的默认值

readonly：表示该框中只能显示，不能添加修改。

input的类型

type=password 密码输入框

type=file 文件上传

type=hidden 隐藏域

button 按钮

checkbox 复选框

radio 单选框

type=submit 提交按钮

type=reset  重置按钮

#### 2.5 a标签、img标签、table标签

a标签的作用：就是用于控制界面与页面之间的跳转

默认就是self

self：用于在当前选项卡中跳转，也就是不新建页面跳转

_blank ：用于在新的选项卡中跳转，也就是新建页面跳转

` <a href="http://www.baidu.com" target="self">百度</a>`

` <a href="http://www.baidu.com" target="_blank">百度</a>`



_blank  在新窗口中打开被链接文档。

_self   默认。在相同的框架中打开被链接文档。

_parent 在父框架集中打开被链接文档。

_top    在整个窗口中打开被链接文档。

#### 锚文本

``` HTML
<a href="#2">锚点</a>
<a name="2">锚点</a>
<a href="http://www.php.cn/" target="_blank" title="转到PHP主页">php</a>
```

#### 2.7IMG标签

img 元素向网页中嵌入一幅图像。

```html
<img src="/i/eg_tulip.jpg"  alt="上海鲜花港 - 郁金香" />
```

alt 规定图像的替代文本。

src 规定显示图像的url

width 规定图片的高度

height 规定图片的宽度

#### 2.8 table 表格

```html
<caption>我的标题</caption>表格带标题
border 边框
width 宽度
height 高度
colspan 行
rowspan 竖
<th></th>
<tr>行</tr>
<td>表格</td>
cellpadding 单元边与内容的空白
cellspacing 单元格的空白

```

#### 2.9 列表

总共有三种列表

**1、无序列表**

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。

无序列表使用 <ul> 标签，每个列表项始于 <li> 标签。

```html
<ul> 
<li>列表项</li>
<li>列表项</li>
<li>列表项</li>
</ul>
```

**2、有序列表**

同样，有序列表也是一列项目，列表项目使用数字进行标记。 有序列表始于 <ol> 标签，每个列表项始于 <li> 标签。

```
<ol>
<li>第一个列表项</li>
<li>第二个列表项</li>
<li>第三个列表项</li>
</ol>
```

**3、自定义列表**

  自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。

```
<dl>
  <dt>Coffee</dt>
  <dd>黑热饮</dd>
  <dt>Milk</dt>
  <dd>白冷饮</dd>
</dl>
```

#### 2.10 框架的使用

frameset 元素可定义一个框架集。它被用来组织多个窗口（框架）。每个框架存有独立的文档。在其最简单的应用中，frameset 元素仅仅会规定在框架集中存在多少列或多少行。您必须使用 cols 或 rows 属性。

frameset 在一个页面中设置一个或多个框架 不能嵌套在body标签里

iframe 是在html页面内嵌入框架 框架内可以连接另一个页面

frameset 不能在body内使用

frame 一般都是在frameset中使用

cols 定义框架集中列的数目和尺寸

rows 定义框架集中行的数目和尺寸

 

scrolling  滚动条

auto 在需要的情况下出现滚动条（默认值）。

yes 始终显示滚动条（即使不需要）。

no  从不显示滚动条（即使需要）



例子：

```html
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<frameset rows="50%,50%" >
		<frame src="http://www.baidu.com" scrolling="no"/>
		<frame src="http://www.sogou.com" />
	</frameset>
	<body>
		
	</body>
</html>
```



