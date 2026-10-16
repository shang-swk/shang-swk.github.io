---
updated: 2023-03-15T06:08:47.316Z
date: 2022-08-09 13:37:00
title: PHP基础
categories: 前端
tags: PHP
excerpt: PHP
---



#  PHP基础



## 1.  PHP简述

PHP（全称：PHP：Hypertext Preprocessor，即"PHP：超文本预处理器"）是一种通用开源脚本语言。

在一个php文件中可以包括以下内容：

- PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码

- PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器

- PHP 文件的默认文件扩展名是 ".php"

php的使用：

1. PHP 可以生成动态页面内容

2. PHP 可以创建、打开、读取、写入、关闭服务器上的文件

3. PHP 可以收集表单数据

4. PHP 可以发送和接收 cookies

5. PHP 可以添加、删除、修改您的数据库中的数据

6. PHP 可以限制用户访问您的网站上的一些页面

7. PHP 可以加密数据

 

## 2.  基本语法格式

 

PHP 脚本以 <?php 开始，以 ?> 结束

<?php

//php脚本的基本格式

/*

 \* 多行注释，跟java的注释方法相同

 \* */

**变量的命名**

变量以 $ 符号开始，后面跟着变量的名称

变量名必须以字母或者下划线字符开始

变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）

变量名不能包含空格

//php的变量声明是以$开始的

$num = 3.14;

$str = "hello";

 

static的关键字的使用

 \* 当一个函数完成时，它的所有变量通常都会被删除。

 \* 然而，有时候您希望某个局部变量不要被删除。

 \* 要做到这一点，请在您第一次声明变量时使用 static 关键字：

 

```php
function test(){

  static $n=0;

  $n++;

  echo "调用了一次".$n."\n";

}

test();test();test();

?>
```

 

## 3.  数据类型、常量以及字符串

php有5种数据类型：String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）。

```php
<?php 

$a = "字符串类型";

$b = 1234;//整形

$c = -3.1415;//浮点型

$d = 8E-3;

$e = true;//boolean类型

$f = array("A","B","C");//数组类型

class obj{//php对象的声明

  var $num;

  function name() { }

}

$o = new obj();//对象实例化类型

$g = NULL;//NULL

var_dump($a);var_dump($b);var_dump($c);var_dump($d);

var_dump($e);var_dump($f);var_dump($o);var_dump($g);

?>
```



常量：常量是一个简单值的标识符。该值在脚本中不能改变。（在整个脚本中都能使用）

一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符)。

设置常量，使用 define() 函数，函数语法如下：

 ```php
 bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
 ```

　　该函数有三个参数:

name：必选参数，常量名称，即标志符。

value：必选参数，常量的值。

case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

```php
<?php 

// 常量

define("CL", "这是一个全局常量", true);

echo CL; // 默认false，变量名区分大小写

echo cl; // true不区分大小写

?>
```



**预定义常量**

PHP预定义了许多常量，这些常量无需使用define()函数定义，可直接在程序中使用。下面列举了一些常用的PHP预定义常量。

 

（1）`__FILE__`(FILE前后分别是两个下画线)：当前正在处理的脚本文件名，若使用在一个被引用的文件中（include或require），那么它的值就是被引用的文件，而不是引用它的那个文件。

 

（2）`__LINE__`(LINE前后分别是两个下画线)：正在处理的脚本文件的当前行数。

 

（3）PHP_VERSION：当前PHP预处理器的版本，如5.4.16。

 

（4）PHP_OS: PHP所在的操作系统的类型。如Linux。

 

（5）TRUE：表示逻辑真。FALSE：表示逻辑假。NULL：表示没有值或值不确定。

 

（6）DIRECTORY_SEPARATOR: 表示目录分隔符，UNIX或Linux操作系统环境时的值为“ / ”, Window操作系统环境时的值为 “ \ ”。

 ```php+HTML
 <?php
 
 echo __FILE__;
 
 echo "<br/>";
 
 echo __LINE__;
 
 echo "<br/>";
 
 echo PHP_VERSION;
 
 echo "<br/>";
 
 echo PHP_OS;
 
 echo "<br/>";
 
 echo DIRECTORY_SEPARATOR;
 
 ?> 
 ```

**整型**

整数类型：保存整数数值（范围限制），4个字节存储数据。PHP中默认为有符号。

在PHP中提供四种整形的定义方式，十进制定义，二进制定义，八进制定义和十六进制定义

$a = 120 //十进制

$a = 0b110 //二进制

$a = 0120   //八进制

$a = 0x120  //十六进制

 

// 使用echo输出时。默认输出为十进制

decbin() // 十进制转二进制

decoct() // 十进制转八进制

dechex() // 十进制转十六进制

bindec() // 二进制转十进制

bin2hex() //二进制转十六进制  

 

**字符串**：字符串变量用于存储并处理文本。

 

<?php

$name='暗月';

//双引号里面有变量会输出变量的值

`$str =`"这是 $name 的全栈渗透测试培训，这是一个比较高质量的课程，一个很大的体系 欢迎来学习。";

//单引号 如果里面有变量都作为一个字符串处理

`$str1 =`'这是 $name 的全栈渗透测试培训，这是一个比较高质量的课程，一个很大的体系 欢迎来学习。';

echo $str;

echo $str1;

 

<?php 

// 字符串

$text1 = "hello";

$text2 = "world";

echo `$text1 . " " . $text2;` // "."是并置运算符（连接）

echo "返回字符串的长度：", strlen($text1);

echo "返回子串的第一次位置：", strpos($text1, "l");

?>

字符的操作函数

```php
addcslashes — 以 C 语言风格使用反斜线转义字符串中的字符
addslashes — 使用反斜线引用字符串

bin2hex — 函数把包含数据的二进制字符串转换为十六进制值

chop — rtrim 的别名

chr — 返回指定的字符

chunk_split — 将字符串分割成小块

convert_cyr_string — 将字符由一种 Cyrillic 字符转换成另一种

convert_uudecode — 解码一个 uuencode 编码的字符串

convert_uuencode — 使用 uuencode 编码一个字符串

count_chars — 返回字符串所用字符的信息

crc32 — 计算一个字符串的 crc32 多项式

crypt — 单向字符串散列

echo — 输出一个或多个字符串

explode — 使用一个字符串分割另一个字符串

fprintf — 将格式化后的字符串写入到流

get_html_translation_table — 返回使用 htmlspecialchars 和 htmlentities 后的转换表

hebrev — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）

hebrevc — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew），并且转换换行符

hex2bin — 转换十六进制字符串为二进制字符串

html_entity_decode — Convert HTML entities to their corresponding characters

htmlentities — 将字符转换为 HTML 转义字符

htmlspecialchars_decode — 将特殊的 HTML 实体转换回普通字符

htmlspecialchars — 将特殊字符转换为 HTML 实体

implode — 将一个一维数组的值转化为字符串

join — 别名 implode

lcfirst — 使一个字符串的第一个字符小写

levenshtein — 计算两个字符串之间的编辑距离

localeconv — Get numeric formatting information

ltrim — 删除字符串开头的空白字符（或其他字符）

md5_file — 计算指定文件的 MD5 散列值

md5 — 计算字符串的 MD5 散列值

metaphone — Calculate the metaphone key of a string

money_format — 将数字格式化成货币字符串

nl_langinfo — Query language and locale information

nl2br — 在字符串所有新行之前插入 HTML 换行标记

number_format — 以千位分隔符方式格式化一个数字

ord — 转换字符串第一个字节为 0-255 之间的值

parse_str — 将字符串解析成多个变量

print — 输出字符串

printf — 输出格式化字符串

quoted_printable_decode — 将 quoted-printable 字符串转换为 8-bit 字符串

quoted_printable_encode — 将 8-bit 字符串转换成 quoted-printable 字符串

quotemeta — 转义元字符集

rtrim — 删除字符串末端的空白字符（或者其他字符）

setlocale — 设置地区信息

sha1_file — 计算文件的 sha1 散列值

sha1 — 计算字符串的 sha1 散列值

similar_text — 计算两个字符串的相似度

soundex — Calculate the soundex key of a string

sprintf — Return a formatted string

sscanf — 根据指定格式解析输入的字符

str_contains — Determine if a string contains a given substring

str_ends_with — Checks if a string ends with a given substring

str_getcsv — 解析 CSV 字符串为一个数组

str_ireplace — str_replace 的忽略大小写版本

str_pad — 使用另一个字符串填充字符串为指定长度

str_repeat — 重复一个字符串

str_replace — 子字符串替换

str_rot13 — 对字符串执行 ROT13 转换

str_shuffle — 随机打乱一个字符串

str_split — 将字符串转换为数组

str_starts_with — Checks if a string starts with a given substring

str_word_count — 返回字符串中单词的使用情况

strcasecmp — 二进制安全比较字符串（不区分大小写）

strchr — 别名 strstr

strcmp — 二进制安全字符串比较

strcoll — 基于区域设置的字符串比较

strcspn — 获取不匹配遮罩的起始子字符串的长度

strip_tags — 从字符串中去除 HTML 和 PHP 标记

stripcslashes — 反引用一个使用 addcslashes 转义的字符串

stripos — 查找字符串首次出现的位置（不区分大小写）

stripslashes — 反引用一个引用字符串

stristr — strstr 函数的忽略大小写版本

strlen — 获取字符串长度

strnatcasecmp — 使用“自然顺序”算法比较字符串（不区分大小写）

strnatcmp — 使用自然排序算法比较字符串

strncasecmp — 二进制安全比较字符串开头的若干个字符（不区分大小写）

strncmp — 二进制安全比较字符串开头的若干个字符

strpbrk — 在字符串中查找一组字符的任何一个字符

strpos — 查找字符串首次出现的位置

strrchr — 查找指定字符在字符串中的最后一次出现

strrev — 反转字符串

strripos — 计算指定字符串在目标字符串中最后一次出现的位置（不区分大小写）

strrpos — 计算指定字符串在目标字符串中最后一次出现的位置

strspn — 计算字符串中全部字符都存在于指定字符集合中的第一段子串的长度。

strstr — 查找字符串的首次出现

strtok — 标记分割字符串

strtolower — 将字符串转化为小写

strtoupper — 将字符串转化为大写

strtr — 转换指定字符

substr_compare — 二进制安全比较字符串（从偏移位置比较指定长度）

substr_count — 计算字串出现的次数

substr_replace — 替换字符串的子串

substr — 返回字符串的子串

trim — 去除字符串首尾处的空白字符（或者其他字符）

ucfirst — 将字符串的首字母转换为大写

ucwords — 将字符串中每个单词的首字母转换为大写

vfprintf — 将格式化字符串写入流

vprintf — 输出格式化字符串

vsprintf — 返回格式化字符串

wordwrap — 打断字符串为指定数量的字串

 

 

<?php

$name='暗月';

//双引号 里面有变量 会 输出变量的值

//$str =" 这是 $name 的全栈渗透测试培训，这是一个比较高质量的课程，一个很大的体系 欢迎来学习。 ";

//单引号 如果里面有变量都作为一个字符串处理

//$str1 ='这是 $name 的全栈渗透测试培训，这是一个比较高质量的课程，一个很大的体系 欢迎来学习。';

 

$a='123456';

//echo $str." 一共有 ".strlen($a)."字符";

//去掉空格

//echo trim($str);

 

//echo $str1;

 

//查找字符串 返回位置

//echo strpos($str,'暗月');

//截取字符串

//echo substr($str,strpos($str,'暗月'),strpos($str,'培训'));

//md5 加密

//echo md5($a);

//通过下标 取字符的值

//echo $a[0];

//字符串替换函数

$a1=str_replace('1','0',$a);

echo $a1;

//遍历字符串

 

for($i=0;$i<=strlen($a);$i++){

  echo $a[$i].'</br>';

}

 

 

 

 

function mb_str_split( $string ) {

   // /u表示把字符串当作utf-8处理，并把字符串开始和结束之前所有的字符串分割成数组

  return preg_split('/(?<!^)(?!$)/u', $string );

}

 

 

for($i=0;$i<strlen($str);$i++) {

  $k = $str[$i]; //输出乱码

}

 

foreach (mb_str_split($str) as $c)

{

  echo $c; //正常输出：中 文 测 试


```

## 4.  运算符

基本运算符：

![php1](php基础/php基本运算符)

 

赋值运算符：

![php2](php基础/php赋值运算符)

　

递增/递减运算符：

![php3](php基础/php递增、递减运算符)

 

比较运算符：

![php4](php基础/php比较运算符)

逻辑运算符：

![php5](php基础/php逻辑运算符)

三元运算符：

(expr1) ? (expr2) : (expr3)

 

## 5.  控制语句

控制语法的语句结构和其他大多数语言结构相同，有以下两类：

 

### 5.1.  条件控制语句

 

**if** **语句** - 在条件成立时执行代码

**if...else** 语句 - 在条件成立时执行一块代码，条件不成立时执行另一块代码

**if...elseif....else** 语句 - 在若干条件之一成立时执行一个代码块

**switch** 语句 - 在若干条件之一成立时执行一个代码块

### 5.2.  循环控制语句

**while** - 只要指定的条件成立，则循环执行代码块

**do...while** - 首先执行一次代码块，然后在指定的条件成立时重复这个循环

**for** - 循环执行代码块指定的次数

**foreach** - 根据数组中每个元素来循环代码块

 

**break****语句**用于终止本次循环

**continue****语句**的作用是跳出本次循环，接着执行下一次循环

 

## 6.  php数组

 

数组是一个能在单个变量中存储多个值的特殊变量。

在 PHP 中，array() 函数用于创建数组：

array();

在 PHP 中，有三种类型的数组：

**数值数组** - 带有数字 ID 键的数组

**关联数组** - 带有指定的键的数组，每个键关联一个值

**多维数组** - 包含一个或多个数组的数组

数组的声明

```php
$array1 = array();

<?php

$cars=array("Volvo","BMW","Toyota");//简单的数组

echo count($cars);//count()返回数组的长度

$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");//关联数组

//其中包含多个键值对

echo "Peter is " . $age['Peter'] . " years old.";

foreach($age as $x=>$x_value)//关联数组的遍历方法

{

  echo "Key=" . $x . ", Value=" . $x_value;

  echo "<br>";

}

?>
```

在PHP 中定义了多个数组排序的内置函数：

 

- sort() - 对数组进行升序排列

- rsort() - 对数组进行降序排列

- asort() - 根据关联数组的值，对数组进行升序排列

- ksort() - 根据关联数组的键，对数组进行升序排列

- arsort() - 根据关联数组的值，对数组进行降序排列

- krsort() - 根据关联数组的键，对数组进行降序排列

 

数组的操作

 

数组的合拼

```php
$array1 =array('a','b','c');

$array2 = array('a1'=>'php','a2'=>'python','a3'=>'java');

$array3 = array_merge($array1,$array2);
```

 

填加数组元素

array_push() 函数向第一个参数的数组尾部添加一个或多个元素（入栈），然后返回新数组的长度。

```php
array_push($array1,'d','e');

print_r($array1);
下表为空 自动添加参数

$array1[]='d';

有键值的

$array1['a4']='javasciprt';

 

添加到指定位置

<?php

$array1 = array('a', 'b', 'c', 'd', 'e');

$array2 = array('x');

array_splice($array1, 3, 0, $array2); // 插入到位置3且删除0个

print_r($array1);

?>

array_splice(数组，位置，删除几个，增加元素）

删除某一个元素

<?php

$array1 = array('a', 'b', 'c', 'd', 'e');

$array2 = array('x');

array_splice($array1, 3, 1); 

print_r($array1);

?>

 

unset 销毁指定的元素

$array1 = array('a', 'b', 'c', 'd', 'e');

unset($array1[0]);

print_r($array1);

 

array_pop():将数组最后一个单元弹出（出栈）

 

修改数组中某个元素

$array1 = array('a', 'b', 'c', 'd', 'e');

$array1[0]='aa';

print_r($array1);
```



**常用的数组函数**

is_array 判断是否为数组

count 数组的元素数目

array_search — 在数组中搜索给定的值，如果成功则返回相应的键名

array_key_exists()在给定的 key 存在于数组中时返回 TRUE

array_unshift() 将传入的单元插入到 array 数组的开头。注意单元是作为整体被插入的，因此传入单元将保持同样的顺序。所有的数值键名将修改为从零开始重新计数，所有的文字键名保持不变

array_shift() 将array 的第一个单元移出并作为结果返回，将 array 的长度减一并将所有其它单元向前移动一位。所有的数字键名将改为从零开始计数，文字键名将不变。

array_unique() 接受 array 作为输入并返回没有重复值的新数组。注意键名保留不变。 array_unique() 先将值作为字符串排序，然后对每个值只保留第一个遇到的键名，接着忽略所有后面的键名。这并不意味着在未排序的 array 中同一个值的第一个出现的键名会被保留。

in_array — 检查数组中是否存在某个值 如果找到指定的值则返回 TRUE，否则返回 FALSE 。in_array()是区分大小写的。

 

 

## 7.  PHP 函数

PHP 的真正力量来自它的函数：它拥有超过 1000 个内建的函数。

PHP 用户定义函数

除了内建的 PHP 函数，我们可以创建我们自己的函数。

 

函数是可以在程序中重复使用的语句块。

页面加载时函数不会立即执行。

函数只有在被调用时才会执行。

 

在 PHP 创建用户定义函数

用户定义的函数声明以单词 "function" 开头：

 

语法

function functionName() {

 被执行的代码;

}

==注释：函数名能够以字母或下划线开头（而非数字）。==

 

==注释：函数名对大小写不敏感。==

 

==提示：函数名应该能够反映函数所执行的任务。==

 

在下面的例子中，我们创建名为 "writeMsg()" 的函数。打开的花括号（{）指示函数代码的开始，而关闭的花括号（}）指示函数的结束。此函数输出 "Hello world!"。如需调用该函数，只要使用函数名即可：

 

实例

 ```php
 <?php
 
 function sayHi() {
 
  echo "Hello world!";
 
 }
 
  
 
 sayhi(); // 调用函数
 
 ?>
 ```



**PHP** **函数参数**

可以通过参数向函数传递信息。参数类似变量。

参数被定义在函数名之后，括号内部。您可以添加任意多参数，只要用逗号隔开即可。

下面的例子中的函数有一个参数（$fname）。当调用 familyName() 函数时，我们同时要传递一个名字（例如 Bill），这样会输出不同的名字，但是姓氏相同：

 ```php
 <?php
 
 function familyName($fname) {
 
  echo "$fname Zhang.<br>";
 
 }
 
  
 
 familyName("Li");
 
 familyName("Hong");
 
 familyName("Tao");
 
 familyName("Xiao Mei");
 
 familyName("Jian");
 
 ?>
 ```



PHP 默认参数值

下面的例子展示了如何使用默认参数。如果我们调用没有参数的 setHeight() 函数，它的参数会取默认值：

 

实例

```php
<?php

function setHeight($minheight=50) {

 echo "The height is : $minheight <br>";

}

 

setHeight(350);

setHeight(); // 将使用默认值 50

setHeight(135);

setHeight(80);

?>
```

PHP 函数 - 返回值

如需使函数返回值，请使用 return 语句：

 

实例

```php
<?php

function sum($x,$y) {

 $z=$x+$y;

 return $z;

}

 

echo "5 + 10 = " . sum(5,10) . "<br>";

echo "7 + 13 = " . sum(7,13) . "<br>";

echo "2 + 4 = " . sum(2,4);

?>
```





**匿名函数**

匿名函数就是没有名字的函数。

==将一个匿名函数"赋值"给一个变量——此时该变量就代表该匿名函数了！==

```php
$callfunction=function($name){

  return $name;

};

echo $callfunction('moonsec');
```

**回调函数**

回调函数是指调用函数的时候将另一个函数作为参数传递到调用的函数中，而不是传递一个普通的变量作为参数

使用回调函数是为了可以将一段自己定义的功能传到函数内部使用

```php
<?php

  function Speak($a,$b){

    echo "He can speak ".$a;

    echo "<br>";

    echo "She can speak ".$b;

  }

   

  function Speak_Test(){

    return call_user_func_array('Speak',array('Chinese','English'));  

  }
//这就是在调用，也可以直接用speak函数

   

  Speak_Test();

?>
```





## 8.  PHP 变量作用域

 

在 PHP 中，可以在脚本的任意位置对变量进行声明。

变量的作用域指的是变量能够被引用/使用的那部分脚本。

PHP 有三种不同的变量作用域：

- local（局部）

- global（全局）

- static（静态）

Local 和 Global 作用域

函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。

函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。

下面的例子测试了带有局部和全局作用域的变量：

 ```php
 <?php
 
 $x=5; // 全局作用域
 
  
 
 function myTest() {
 
  $y=10; // 局部作用域
 
  echo "<p>测试函数内部的变量：</p>";
 
  echo "变量 x 是：$x";
 
  echo "<br>";
 
  echo "变量 y 是：$y";
 
 } 
 
  
 
 myTest();
 
  
 
 echo "<p>测试函数之外的变量：</p>";
 
 echo "变量 x 是：$x";
 
 echo "<br>";
 
 echo "变量 y 是：$y";
 
 ?>
 ```



在上例中，有两个变量` $x 和 $y`，以及一个函数 myTest()。`$x 是全局变量，因为它是在函数之外声明的，而 $y` 是局部变量，因为它是在函数内声明的。

如果我们在 myTest() 函数内部输出两个变量的值，`$y 会输出在本地声明的值，但是无法 $x` 的值，因为它在函数之外创建。

 

然后，如果在 myTest() 函数之外输出两个变量的值，那么会输出 `$x 的值，但是不会输出 $y` 的值，因为它是局部变量，并且在 myTest() 内部创建。

 

注释：您可以在不同的函数中创建名称相同的局部变量，因为局部变量只能被在其中创建它的函数识别。

 

PHP global 关键词

global 关键词用于在函数内访问全局变量。

要做到这一点，请在（函数内部）变量前面使用 global 关键词：

实例

```php
<?php

$x=5;

$y=10;

 

function myTest() {

 global $x,$y;

 $y=$x+$y;

}

 

myTest();

echo $y; // 输出 15

?>
```

==PHP 同时在名为 $GLOBALS[index] 的数组中存储了所有的全局变量。下标存有变量名。这个数组在函数内也可以访问，并能够用于直接更新全局变量。==

上面的例子可以这样重写：

```php
<?php

$x=5;

$y=10;

 

function myTest() {

 $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];

} 

 

myTest();

echo $y; // 输出 15

?>
```

PHP static 关键词

通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个局部变量。实现这一点需要更进一步的工作。

 

要完成这一点，请在您首次声明变量时使用 static 关键词：

 

实例

```php
<?php

 

function myTest() {

 static $x=0;

 echo $x;

 $x++;

}

 

myTest();

myTest();

myTest();

 

?>
```

然后，每当函数被调用时，这个变量所存储的信息都是函数最后一次被调用时所包含的信息。///

注释：该变量仍然是函数的局部变量。

 

 

## 9.  类与对象

 

PHP 面向对象

在面向对象的程序设计（英语：Object-oriented programming，缩写：OOP）中，对象是一个由信息及对信息进行处理的描述所组成的整体，是对现实世界的抽象。

在现实世界里我们所面对的事情都是对象，如计算机、电视机、自行车等。

对象的主要三个特性：

 

- 对象的行为：可以对对象施加那些操作，开灯，关灯就是行为。

- 对象的形态：当施加那些方法是对象如何响应，颜色，尺寸，外型。

- 对象的表示：对象的表示就相当于身份证，具体区分在相同的行为与状态下有什么不同。

比如 Animal(动物) 是一个抽象类，我们可以具体到一只狗跟一只羊，而狗跟羊就是具体的对象，他们有颜色属性，可以写，可以跑等行为状态。

![animals](php基础/dog)

**面向对象内容**

**类** − 定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。

 

**对象** − 是类的实例。

 

**成员变量** − 定义在类内部的变量。该变量的值对外是不可见的，但是可以通过**成员函数访问**，在类被实例化为对象后，该变量即可称为对象的属性。

 

**成员函数** − 定义在类的内部，可用于访问对象的数据。

 

**继承** − 继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容。

 

**父类** − 一个类被其他类继承，可将该类称为父类，或基类，或超类。

 

**子类** − 一个类继承其他类称为子类，也可称为派生类。

 

**多态** − 多态性是指相同的操作或函数、过程可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。

 

**重载** − 简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

 

**抽象性** − 抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。

 

**封装** − 封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内。

 

**构造函数** − 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

 

**析构函数** − 析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。析构函数往往用来做"清理善后" 的工作（例如在建立对象时用new开辟了一片内存空间，应在退出前在析构函数中用delete释放）。

 

下图中我们通过 Car 类 创建了三个对象：Mercedes, Bmw, 和 Audi。

$mercedes = new Car ();

$bmw = new Car ();

$audi = new Car ();

![2](php基础/car)

**PHP** **类定义**

PHP 定义类通常语法格式如下：

 ```php
 <?php
 
 class phpClass {
 
  var $var1;
 
  var $var2 = "constant string";
 
  
 
  function myfunc ($arg1, $arg2) {
 
    [..]
 
  }
 
  [..]
 
 }
 
 ?>
 ```

**解析如下：**

 

- 类使用 class 关键字后加上类名定义。

 

- 类名后的一对大括号({})内可以定义变量和方法。

 

- 类的变量使用 var 来声明, 变量也可以初始化值。

 

- 函数定义类似 PHP 函数的定义，但函数只能通过该类及其实例化的对象访问。

 

实例

```php
<?php

class Site {

 /* 成员变量 */

 var $url;

 var $title;

 

 /* 成员函数 */

 function setUrl($par){

   $this->url = $par;

 }

 

 function getUrl(){

   echo $this->url . PHP_EOL;

 }

 

 function setTitle($par){

   $this->title = $par;

 }

 

 function getTitle(){

   echo $this->title . PHP_EOL;

 }

}

?>

 
```

变量 **$this** 代表自身的对象。

==**PHP_EOL** 为换行符。==

**PHP** **中创建对象**

类创建后，我们可以使用 **new** 运算符来实例化该类的对象：

$w3cschool = new Site;

$taobao = new Site;

$google = new Site;

以上代码我们创建了三个对象，三个对象各自都是独立的，接下来我们来看看如何访问成员方法与成员变量。

**调用成员方法**

在实例化对象后，我们可以使用该对象调用成员方法，该对象的成员方法只能操作该对象的成员变量：

// 调用成员函数，设置标题和URL

$w3cschool->setTitle( "W3Cschool教程" );

$taobao->setTitle( "淘宝" );

$google->setTitle( "Google 搜索" );



$w3cschool->setUrl( 'www.w3cschool.cn' );

$taobao->setUrl( 'www.taobao.com' );

$google->setUrl( 'www.google.com' );

 

// 调用成员函数，获取标题和URL

$w3cschool->getTitle();

$taobao->getTitle();

$google->getTitle();

 

$w3cschool->getUrl();

$taobao->getUrl();

$google->getUrl();

完整代码如下：

```php
<?php

class Site {

 /* 成员变量 */

  var $url;

 var $title;

 

 /* 成员函数 */

  function setUrl($par){

   $this ->url = $par;

 }

 

 function getUrl (){

   echo $this->url . PHP_EOL ;

 }

 

 function setTitle($par){

   $this ->title = $par;

 }

 

 function getTitle (){

   echo $this->title . PHP_EOL ;

 }

}

 

$w3cschool = new Site;

$taobao = new Site;

$google = new Site;

 

// 调用成员函数，设置标题和URL

$w3cschool->setTitle( "W3Cschool教程" );

$taobao ->setTitle( "淘宝" );

$google-> setTitle( "Google 搜索" );

 

$w3cschool-> setUrl( 'www.w3cschool.cn' );

$taobao->setUrl ( 'www.taobao.com' );

$google->setUrl( 'www.google.com' );

 

// 调用成员函数，获取标题和URL

$w3cschool->getTitle ();

$taobao->getTitle();

$google-> getTitle();

 

$w3cschool->getUrl();

$taobao ->getUrl();

$google->getUrl();

?>
```

执行以上代码，输出结果为：

W3Cschool教程

淘宝

Google 搜索

www.w3cschool.cn

www.taobao.com

[www.google.com](http://www.google.com)

 

**PHP** **构造函数**

构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象，==即为对象**成员变量赋初始值**，总与new运算符一起使用在创建对象的语句中。==

 

PHP 5 允行开发者在一个类中定义一个方法作为构造函数，语法格式如下：

 

`void __construct ([ mixed $args [, $... ]] )`



`在上面的例子中我们就可以通过构造方法来初始化 $url 和 $title 变量：`

```
function __construct( $par1, $par2 ) {

  $this->url = $par1;

  $this->title = $par2;

}
```

现在我们就不需要再调用 setTitle 和 setUrl 方法了：

 

$youj = new Site('www.w3cschool.cn', 'W3Cschool教程');

$taobao = new Site('www.taobao.com', '淘宝');

$google = new Site('www.google.com', 'Google 搜索');

 

// 调用成员函数，获取标题和URL

$youj->getTitle();

$taobao->getTitle();

$google->getTitle();

 

$youj->getUrl();

$taobao->getUrl();

$google->getUrl();

 

**析构函数**

析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。

 

PHP 5 引入了析构函数的概念，这类似于其它面向对象的语言，其语法格式如下：

 

void __destruct ( void )

实例

```php
<?php

class MyDestructableClass {

  function __construct() {

​    print "构造函数\n";

​    $this->name = "MyDestructableClass";

  }

 

  function __destruct() {

​    print "销毁 " . $this->name . "\n";

  }

}

 

$obj = new MyDestructableClass();

?>
```

执行以上代码，输出结果为：

**构造函数**

销毁 MyDestructableClass

 

**继承**

继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的属性和方法，或子类从父类继承方法，使得子类具有父类相同的行为。

父类=基类

 

PHP 使用关键字 extends 来继承一个类，PHP 不支持多继承，格式

class Child extends Parent {

  // 代码部分

}如下：

**实例**

实例中 Child_Site 类继承了 Site 类，并扩展了功能：

```php
<?php 

// 子类扩展站点类别

class Child_Site extends Site {
//里面也可以什么都不写
  var $category;

 

   function setCate($par){

        $this->category = $par;

    }

 

    function getCate(){

        echo $this->category . PHP_EOL;

    }

}
```



**方法重写**

如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），==也称为方法的重写。==

 

实例中重写了 getUrl 与 getTitle 方法：

```php
function getUrl() {

  echo $this->url . PHP_EOL;//换行符

  return $this->url;

}

  

function getTitle(){

  echo $this->title . PHP_EOL;

  return $this->title;

}
```



**访问控制**

PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），**protected**（受保护）或 **private**（私有）来实现的。

**public**（公有）：公有的类成员可以在任何地方被访问。

**protected**（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问。

**private**（私有）：==私有的类成员则只能被其定义所在的类访问。==

**属性的访问控制**

类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。

```php
<?php

/**

 \* Define MyClass

 */

class MyClass

{

  public $public = 'Public';

  protected $protected = 'Protected';

  private $private = 'Private';

 

  function printHello()

  {

    echo $this->public;

    echo $this->protected;

    echo $this->private;

  }

}

 

$obj = new MyClass();

echo $obj->public; // 这行能被正常执行

echo $obj->protected; // 这行会产生一个致命错误

echo $obj->private; // 这行也会产生一个致命错误

$obj->printHello(); // 输出 Public、Protected 和 Private

 

 

/**

 \* Define MyClass2

 */

class MyClass2 extends MyClass

{

  // 可以对 public 和 protected 进行重定义，但 private 而不能

  protected $protected = 'Protected2';

 

  function printHello()

  {

    echo $this->public;

    echo $this->protected;

    echo $this->private;

  }

}

 

$obj2 = new MyClass2();

echo $obj2->public; // 这行能被正常执行

echo $obj2->private; // 未定义 private

echo $obj2->protected; // 这行会产生一个致命错误

$obj2->printHello(); // 输出 Public、Protected2 和 Undefined

 

?>
```

**方法的访问控制**

类中的方法可以被定义为公有，私有或受保护。如果没有设置这些关键字，则该方公有

 ```php
 <?php
 
 /**
 
  \* Define MyClass
 
  */
 
 class MyClass
 
 {
 
   // 声明一个公有的构造函数
 
   public function __construct() { }
 
  
 
   // 声明一个公有的方法
 
   public function MyPublic() { }
 
  
 
   // 声明一个受保护的方法
 
   protected function MyProtected() { }
 
  
 
   // 声明一个私有的方法
 
   private function MyPrivate() { }
 
  
 
   // 此方法为公有
 
   function Foo()
 
   {
 
     $this->MyPublic();
 
     $this->MyProtected();
 
     $this->MyPrivate();
 
   }
 
 }
 
  
 
 $myclass = new MyClass;
 
 $myclass->MyPublic(); // 这行能被正常执行
 
 $myclass->MyProtected(); // 这行会产生一个致命错误
 
 $myclass->MyPrivate(); // 这行会产生一个致命错误
 
 $myclass->Foo(); // 公有，受保护，私有都可以执行
 
  
 
  
 
 /**
 
  \* Define MyClass2
 
  */
 
 class MyClass2 extends MyClass
 
 {
 
   // 此方法为公有
 
   function Foo2()
 
   {
 
     $this->MyPublic();
 
     $this->MyProtected();
 
     $this->MyPrivate(); // 这行会产生一个致命错误
 
   }
 
 }
 
  
 
 $myclass2 = new MyClass2;
 
 $myclass2->MyPublic(); // 这行能被正常执行
 
 $myclass2->Foo2(); // 公有的和受保护的都可执行，但私有的不行
 
  
 
 class Bar 
 
 {
 
   public function test() {
 
     $this->testPrivate();
 
     $this->testPublic();
 
   }
 
  
 
   public function testPublic() {
 
     echo "Bar::testPublic\n";
 
   }
 
   
 
   private function testPrivate() {
 
     echo "Bar::testPrivate\n";
 
   }
 
 }
 
  
 
 class Foo extends Bar 
 
 {
 
   public function testPublic() {
 
     echo "Foo::testPublic\n";
 
   }
 
   
 
   private function testPrivate() {
 
     echo "Foo::testPrivate\n";
 
   }
 
 }
 
  
 
 $myFoo = new foo();
 
 $myFoo->test(); // Bar::testPrivate 
 
         // Foo::testPublic
 
 ?>
 
  
 ```





**接口**

使用接口（interface），==可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。==

 

接口是通过 interface 关键字来定义的==，就像定义一个标准的类一样，但其中定义所有的方法都是空的。==

 

==接口中定义的所有方法都必须是公有，这是接口的特性。==

 

要实现一个接口，使用 implements 操作符。类中必须实现接口中定义的所有方法，否则会报一个致命错误。类可以实现多个接口，用逗号来分隔多个接口的名称。

```php
<?php 
// 声明一个'iTemplate'接口
interface iTemplate
{
  public function setVariable($name, $var);
  public function getHtml($template);
}
// 实现接口
class Template implements iTemplate
{
  private $vars = array();
  public function setVariable($name, $var)
  {
    $this->vars[$name] = $var;
  }
  public function getHtml($template)
  {
    foreach($this->vars as $name => $value) {
      $template = str_replace('{' . $name . '}', $value, $template);
    }
    return $template;
  }
}
```



**常量**

可以把在类中始终保持不变的值定义为常量。在定义和使用常量的时候不需要使用 $ 符号。

 

常量的值必须是一个定值，不能是变量，类属性，数学运算的结果或函数调用。

 

自 PHP 5.3.0 起，可以用一个变量来动态调用类。但该变量的值不能为关键字（如 self，parent 或 static）。

 

实例

```php
<?php

class MyClass

{

  const constant = '常量值';

 

  function showConstant() {

    echo self::constant . PHP_EOL;

  }

}

 

echo MyClass::constant . PHP_EOL;

 

$classname = "MyClass";

echo $classname::constant . PHP_EOL; // 自 5.3.0 起

 

$class = new MyClass();

$class->showConstant();

 

echo $class::constant . PHP_EOL; // 自 PHP 5.3.0 起

?>
```

**抽象类**

任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的。

 

定义为抽象的类不能被实例化。

 

被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

 

继承一个抽象类的时候，子类必须定义父类中的所有抽象方法；另外，这些方法的访问控制必须和父类中一样（或者更为宽松）。例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的，而不能定义为私有的。

 ```php
 <?php
 
 abstract class AbstractClass
 
 {
 
  // 强制要求子类定义这些方法
 
   abstract protected function getValue();
 
   abstract protected function prefixValue($prefix);
 
  
 
   // 普通方法（非抽象方法）
 
   public function printOut() {
 
     print $this->getValue() . PHP_EOL;
 
   }
 
 }
 
  
 
 class ConcreteClass1 extends AbstractClass
 
 {
 
   protected function getValue() {
 
     return "ConcreteClass1";
 
   }
 
  
 
   public function prefixValue($prefix) {
 
     return "{$prefix}ConcreteClass1";
 
   }
 
 }
 
  
 
 class ConcreteClass2 extends AbstractClass
 
 {
 
   public function getValue() {
 
     return "ConcreteClass2";
 
   }
 
  
 
   public function prefixValue($prefix) {
 
     return "{$prefix}ConcreteClass2";
 
   }
 
 }
 
  
 
 $class1 = new ConcreteClass1;
 
 $class1->printOut();
 
 echo $class1->prefixValue('FOO_') . PHP_EOL;
 
  
 
 $class2 = new ConcreteClass2;
 
 $class2->printOut();
 
 echo $class2->prefixValue('FOO_') . PHP_EOL;
 
 ?>
 
 执行以上代码，输出结果为：
 
  
 
 ConcreteClass1
 
 FOO_ConcreteClass1
 
 ConcreteClass2
 
 FOO_ConcreteClass2
 
 此外，子类方法可以包含父类抽象方法中不存在的可选参数。例如，子类定义了一个可选参数，而父类抽象方法的声明里没有，则都是可以正常运行的。
 
  
 
 <?php
 
 abstract class AbstractClass
 
 {
 
   // 我们的抽象方法仅需要定义需要的参数
 
   abstract protected function prefixName($name);
 
  
 
 }
 
  
 
 class ConcreteClass extends AbstractClass
 
 {
 
  
 
   // 我们的子类可以定义父类签名中不存在的可选参数
 
   public function prefixName($name, $separator = ".") {
 
     if ($name == "Pacman") {
 
       $prefix = "Mr";
 
 ​    } elseif ($name == "Pacwoman") {
 
 ​      $prefix = "Mrs";
 
 ​    } else {
 
 ​      $prefix = "";
 
 ​    }
 
 ​    return "{$prefix}{$separator} {$name}";
 
   }
 
 }
 
  
 
 $class = new ConcreteClass;
 
 echo $class->prefixName("Pacman"), "\n";
 
 echo $class->prefixName("Pacwoman"), "\n";
 
 ?>
 
 输出结果为：
 
 Mr. Pacman
 
 Mrs. Pacwoman
 
  
 ```





**接口与抽象类**

 

1. 接口

（1）对接口的使用是通过关键字implements

（2）接口不能定义成员变量（包括类静态变量），能定义常量

（3）子类必须实现接口定义的所有方法

（4）接口只能定义不能实现该方法

（5）接口没有构造函数

（6）接口中的方法和实现它的类默认都是public类型的

2. 抽象类

（1）对抽象类的使用是通过关键字extends

（2）不能被实例化，可以定义子类必须实现的方法

（3）子类必须定义父类中的所有抽象方法，这些方法的访问控制必须和父类中一样（或者更为宽松）

（4）如一个类中有一个抽象方法，则该类必须定义为抽象类

（5）抽象类可以有构造函数

（6）抽象类中的方法可以使用private,protected,public来修饰。

（7）一个类可以同时实现多个接口，但一个类只能继承于一个抽象类。

 

 

**Static** **关键字**

声明类属性或方法为 static(静态)，就可以不实例化类而直接访问。

 

静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）。

 

由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。

 

静态属性不可以由对象通过 -> 操作符来访问。

 

自 PHP 5.3.0 起，可以用一个变量来动态调用类。但该变量的值不能为关键字 self，parent 或 static。

 ```php
 <?php
 
 class Foo {
 
  public static $my_static = 'foo';
 
  
 
  public function staticValue() {
 
    return self::$my_static;
 
  }
 
 }
 
  
 
 print Foo::$my_static . PHP_EOL;
 
 $foo = new Foo();
 
  
 
 print $foo->staticValue() . PHP_EOL;
 
 ?>  
 
 执行以上程序，输出结果为：
 
  
 
 foo
 
 Foo
 ```

**Final** **关键字**

PHP 5 新增了一个 final 关键字。如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。

 

以下代码执行会报错：

 ```php
 <?php
 
 class BaseClass {
 
   public function test() {
 
     echo "BaseClass::test() called" . PHP_EOL;
 
   }
 
   
 
   final public function moreTesting() {
 
     echo "BaseClass::moreTesting() called" . PHP_EOL;
 
   }
 
 }
 
  
 
 class ChildClass extends BaseClass {
 
   public function moreTesting() {
 
     echo "ChildClass::moreTesting() called" . PHP_EOL;
 
   }
 
 }
 
 // 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
 
 ?>
 
 调用父类构造方法
 
 PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 parent::__construct() 。
 
  
 
 <?php
 
 class BaseClass {
 
   function __construct() {
 
     print "BaseClass 类中构造方法" . PHP_EOL;
 
   }
 
 }
 
 class SubClass extends BaseClass {
 
   function __construct() {
 
     parent::__construct(); // 子类构造方法不能自动调用父类的构造方法
 
     print "SubClass 类中构造方法" . PHP_EOL;
 
   }
 
 }
 
 class OtherSubClass extends BaseClass {
 
   // 继承 BaseClass 的构造方法
 
 }
 
  
 
 // 调用 BaseClass 构造方法
 
 $obj = new BaseClass();
 
  
 
 // 调用 BaseClass、SubClass 构造方法
 
 $obj = new SubClass();
 
  
 
 // 调用 BaseClass 构造方法
 
 $obj = new OtherSubClass();
 
 ?>
 
 执行以上程序，输出结果为：
 
  
 
 BaseClass 类中构造方法
 
 BaseClass 类中构造方法
 
 SubClass 类中构造方法
 
 BaseClass 类中构造方法
 
  
 ```

## 10.     PHP超级全局变量

 

PHP超级全局变量列表：

- $GLOBALS　　一个包含了全部变量的全局组合数组。变量的名字就是数组的键。

- $_SERVER　　一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组

- $_REQUEST　　用于收集HTML表单提交的数据。

它可以获取 cookie get post 

- $_POST　　广泛应用于收集表单数据，在HTML form标签的指定该属性："method="post"。

- $_GET　　广泛应用于收集表单数据，在HTML form标签的指定该属性："method="get"。

Array []

- $_FILES　　

- $_ENV　　

- $_COOKIE　　

- $_SESSION

 ```php
 <?php 
 
 // php预定义方法
 
 echo "\n", $GLOBALS['y'];
 
 echo "\n", $_SERVER['PHP_SELF'];
 
 echo "\n", $_SERVER['SERVER_NAME'];
 
 echo "\n", $_SERVER['HTTP_HOST'];
 
 ?>
 ```



## 11.     PHP Include 文件

 

服务器端包含 (SSI) 用于创建可在多个页面重复使用的函数、页眉、页脚或元素。

include （或 require）语句会获取指定文件中存在的所有文本/代码/标记，并复制到使用 include 语句的文件中。

包含文件很有用，如果您需要在网站的多张页面上引用相同的 PHP、HTML 或文本的话。

PHP include 和 require 语句

通过 include 或 require 语句，可以将 PHP 文件的内容插入另一个 PHP 文件（在服务器执行它之前）。

include 和 require 语句是相同的，除了错误处理方面：

require 会生成致命错误（E_COMPILE_ERROR）并停止脚本

include 只生成警告（E_WARNING），并且脚本会继续

因此，如果您希望继续执行，并向用户输出结果，即使包含文件已丢失，那么请使用 include。否则，在框架、CMS 或者复杂的 PHP 应用程序编程中，请始终使用 require 向执行流引用关键文件。这有助于提高应用程序的安全性和完整性，在某个关键文件意外丢失的情况下。

包含文件省去了大量的工作。这意味着您可以为所有页面创建标准页头、页脚或者菜单文件。然后，在页头需要更新时，您只需更新这个页头包含文件即可。

语法

include 'filename';

或

require 'filename';

 

## 12.     PHP 文件处理

 

### 12.1. PHP 操作文件

PHP 拥有的多种函数可供创建、读取、上传以及编辑文件。

注意：请谨慎操作文件！

当您操作文件时必须非常小心。如果您操作失误，可能会造成非常严重的破坏。常见的错误是：

编辑错误的文件

被垃圾数据填满硬盘

意外删除文件内容

PHP readfile() 函数

readfile() 函数读取文件，并把它写入输出缓冲。

假设我们有一个名为 "webdictionary.txt" 的文本文件，存放在服务器上，就像这样：

AJAX = Asynchronous JavaScript and XML

CSS = Cascading Style Sheets

HTML = Hyper Text Markup Language

PHP = PHP Hypertext Preprocessor

SQL = Structured Query Language

SVG = Scalable Vector Graphics

XML = EXtensible Markup Language

读取此文件并写到输出流的 PHP 代码如下（如读取成功则 readfile() 函数返回字节数）：

实例

```php
<?php

echo readfile("webdictionary.txt");

?>
```

### 12.2. PHP 文件打开/读取/关闭

在本节中，我们向您讲解如何在服务器上打开、读取以及关闭文件。

 

PHP Open File - fopen()

打开文件的更好的方法是通过 fopen() 函数。此函数为您提供比 readfile() 函数更多的选项。

 

在课程中，我们将使用文本文件 "webdictionary.txt"：

 

AJAX = Asynchronous JavaScript and XML

CSS = Cascading Style Sheets

HTML = Hyper Text Markup Language

PHP = PHP Hypertext Preprocessor

SQL = Structured Query Language

SVG = Scalable Vector Graphics

XML = EXtensible Markup Language

fopen() 的第一个参数包含被打开的文件名，第二个参数规定打开文件的模式。如果 fopen() 函数未能打开指定的文件，下面的例子会生成一段消息：

 

实例

```php
<?php

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

echo fread($myfile,filesize("webdictionary.txt"));

fclose($myfile);

?>
```

提示：我们接下来将学习 fread() 以及 fclose() 函数。

文件会以如下模式之一打开：

![1](php基础/读写)

 

PHP 读取文件 - fread()

fread() 函数读取打开的文件。

 

fread() 的第一个参数包含待读取文件的文件名，第二个参数规定待读取的最大字节数。

 

如下 PHP 代码把 "webdictionary.txt" 文件读至结尾：

 

fread($myfile,filesize("webdictionary.txt"));

PHP 关闭文件 - fclose()

fclose() 函数用于关闭打开的文件。

 

注释：用完文件后把它们全部关闭是一个良好的编程习惯。您并不想打开的文件占用您的服务器资源。

 

fclose() 需要待关闭文件的名称（或者存有文件名的变量）：

 

<?php

$myfile = fopen("webdictionary.txt", "r");

// some code to be executed....

fclose($myfile);

?>

PHP 读取单行文件 - fgets()

fgets() 函数用于从文件读取单行。

 

下例输出 "webdictionary.txt" 文件的首行：

 

实例

```php
<?php

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

echo fgets($myfile);

fclose($myfile);

?>
```



运行实例

注释：调用 fgets() 函数之后，文件指针会移动到下一行。

 

PHP 检查 End-Of-File - feof()

feof() 函数检查是否已到达 "end-of-file" (EOF)。

 

feof() 对于遍历未知长度的数据很有用。

feof() 函数检查是否已到达文件末尾(EOF)

下例逐行读取 "webdictionary.txt" 文件，直到 end-of-file：

 

实例

```php
<?php

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

// 输出单行直到 end-of-file

while(!feof($myfile)) {

 echo fgets($myfile) . "<br>";

}

fclose($myfile);

?>
```

运行实例

PHP 读取单字符 - fgetc()

fgetc() 函数用于从文件中读取单个字符。

 

下例逐字符读取 "webdictionary.txt" 文件，直到 end-of-file：

 

实例

```php
<?php

$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");

// 输出单字符直到 end-of-file

while(!feof($myfile)) {

 echo fgetc($myfile);

}

fclose($myfile);

?>
```

运行实例

注释：在调用 fgetc() 函数之后，文件指针会移动到下一个字符。

在本节中，我们将为您讲解如何在服务器上创建并写入文件。

 

PHP 创建文件 - fopen()

fopen() 函数也用于创建文件。也许有点混乱，但是在 PHP 中，创建文件所用的函数与打开文件的相同。

 

如果您用 fopen() 打开并不存在的文件，此函数会创建文件，假定文件被打开为写入（w）或增加（a）。

 

下面的例子创建名为 "testfile.txt" 的新文件。此文件将被创建于 PHP 代码所在的相同目录中：

 

实例

$myfile = fopen("testfile.txt", "w")

PHP 文件权限

如果您试图运行这段代码时发生错误，请检查您是否有向硬盘写入信息的 PHP 文件访问权限。

 

PHP 写入文件 - fwrite()

fwrite() 函数用于写入文件。

 

fwrite() 的第一个参数包含要写入的文件的文件名，第二个参数是被写的字符串。

 

下面的例子把姓名写入名为 "newfile.txt" 的新文件中：

 

实例

```php
<?php

$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");

$txt = "Bill Gates\n";

fwrite($myfile, $txt);

$txt = "Steve Jobs\n";

fwrite($myfile, $txt);

fclose($myfile);

?>
```



请注意，我们向文件 "newfile.txt" 写了两次。在每次我们向文件写入时，在我们发送的字符串 $txt 中，第一次包含 "Bill Gates"，第二次包含 "Steve Jobs"。在写入完成后，我们使用 fclose() 函数来关闭文件。

 

如果我们打开 "newfile.txt" 文件，它应该是这样的：

 

Bill Gates

Steve Jobs

PHP 覆盖（Overwriting）

如果现在 "newfile.txt" 包含了一些数据，我们可以展示在写入已有文件时发生的的事情。所有已存在的数据会被擦除并以一个新文件开始。

 

在下面的例子中，我们打开一个已存在的文件 "newfile.txt"，并向其中写入了一些新数据：

 

实例

```php
<?php

$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");

$txt = "Mickey Mouse\n";

fwrite($myfile, $txt);

$txt = "Minnie Mouse\n";

fwrite($myfile, $txt);

fclose($myfile);

?>
```

如果现在我们打开这个 "newfile.txt" 文件，Bill 和 Steve 都已消失，只剩下我们刚写入的数据：

 

Mickey Mouse

Minnie Mouse

 

 

### 12.3. 文件的 复制 删除 重名

php文件重命名：函数rename()。

php文件复制：函数copy();

php文件删除：函数unlink();

 

### 12.4. 文件的判断

 

file_exists() 判断文件是否存在

is_file() 是否为文件。

 

## 13.     PHP获取文件属性

 

当我们在程序中操作文件时，可能会使用到文件的一些常见属性，比如文件的大小、类型、修改时间、访问时间以及权限等等。PHP 中提供了非常全面的用来获取这些属性的内置函数，如下表所示。

![3](php基础/php内置函数)

```php
<?php
    $file = 'test.txt';
    file_exists($file) or die('文件不存在，程序退出！');
 
    echo $file.' 文件大小是：'.filesize($file).' 个字节<br>';
    if(is_readable($file)){
        echo $file.' 文件是可读的。<br>';
    }else{
        echo $file.' 文件是不可读的。<br>';
    }
    if(is_writable($file)){
        echo $file.' 文件是可写的。<br>';
    }else{
        echo $file.' 文件是不可写的。<br>';
    }
    if(is_executable($file)){
        echo $file.' 文件是可执行的。<br>';
    }else{
        echo $file.' 文件是不可执行的。<br>';
    }
    echo '文件的创建时间是：'.date('Y-m-d H:i:s',filectime($file)).'。<br>';
    echo '文件的修改时间是：'.date('Y-m-d H:i:s',filemtime($file)).'。<br>';
    echo '文件上次的访问时间是：'.date('Y-m-d H:i:s',fileatime($file)).'。<br>';
?>
```

 

## 14.     PHP目录操作

目录操作

新建目录：mkdir(路径，权限，递归创建)

删除目录：rmdir()

移动（改名）：rename()

获取目录内容：

//打开目录

目录句柄 = opendir()

//读取目录

文件名 = readdir(目录句柄)

依次读取文件名，同时向下移动文件句柄指针，读取不到则返回false

//关闭目录

closedir()

 

当前目录. 上级目录用..

递归读取目录内容：

 ```php
 <?php
 
 //递归遍历目录
 
 $dirfile="c:/";
 
  
 
 function tree($dirfile){
 
   $dir = opendir($dirfile);
 
   while (($file = readdir($dir)) !== false)
 
   {
 
     if(is_dir("$dirfile{$file}") && ($file !=".") && ($file !="..")){
 
       if(is_readable("$dirfile{$file}")){
 
         echo "目录 $dirfile{$file} </br>";
 
         tree("$dirfile{$file}");
 
       }else{
 
         echo "目录 $dirfile{$file} 不可访问</br>";
 
       }
 
  
 
     }
 
     else{
 
       if( ($file !=".") && ($file !="..")){
 
         echo "文件 $dirfile/{$file} </br>";
 
       }
 
  
 
     }
 
   }
 
   closedir($dir);
 
 }
 
  
 
 tree($dirfile);
 
 ?>
 ```

## 15.     命名空间

 

**PHP** **命名空间可以解决以下两类问题：**

1.用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。

2.为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，以提高源代码的可读性。

 

命名空间（可以理解为创建文件夹）

定义：命名空间namespace，是指人为的将内存进行分隔，让不同内存区域的同名结构共存，从而解决在大型项目中可能出现的重名结构的问题

语法：namespace 空间名

作用：不同的空间可以有同名的结构，如：类

空间元素：函数，常量，类，不包括变量！！

子空间（子文件夹）

定义：命名空间内部再划分一个命名空间，让每个小空间独立起来

语法:

​     namespace 空间名

​     namespace 空间名\子空间

命名空间访问 （url）

**非限定名称访问**：直接访问空间元素的名字（只访问自己命名空间的元素）

**限定名称访问**：使用自己当前的子空间名字+ \ + 元素名字

**完全限定名称访问**：\ + 全局空间 + \ + 元素名字

注：任何空间元素访问，只针对函数，类，常量

全局空间（C盘）

如果定义了命名空间，非限定名称的寻找系统常量的方式：

首先：在自己的空间内找

然后：如果找不到元素

​    系统常量-->进入全局空间寻找

​    系统类 --> 不会自动进入全局空间寻找，而是会报错

命名空间的引入

1.空间引入方式：use关键字

​    1. 引入类：use 空间名\类名

​    2. 引入函数：use function 空间名\函数名

​    3. 引入常量：use const 空间名\常量名

2.当引入元素时重名，通过 as 来起别名

  use 空间名\类名 as 别名

3.引入多个元素

​    use 空间名\{

​        类名，

​        function 函数名，

​        const 常量

​    }     

\4. 引入空间

  use 空间名 

 

## 16.     正则表达式

**正则表达式简介**

正则表达式是用于描述字符排列和匹配模式的一种语法规则。它主要用于字符串的模式分割、匹配、查找及替换操作。到目前为止，我们前面所用过的精确（文本）匹配也是一种正则表达式。

在PHP中，正则表达式一般是由正规字符和一些特殊字符（类似于通配符）联合构成的一个文本模式的程序性描述。

 

正则表达式较重要和较有用的角色是验证用户数据的有效性检查。PHP中，正则表达式有三个作用：

 匹配，也常常用于从字符串中析取信息。

 用新文本代替匹配文本。

 将一个字符串拆分为一组更小的信息块。

 

**正则表达式的基本语法**

PCRE库函数中，正则匹配模式使用分隔符与元字符组成，分隔符可以是非数字、非反斜线、非空格的任意字符。经常使用的分隔符是正斜线(/)、hash符号(#) 以及取反符号(~)

元字符是用于构造规则表达式的具有特殊含义的字符。如果要在正则表达式中包含元字符本身，必须在其前加上”\”进行转义 

 

​                                    

元字符         说明

\*               0次、1次或多次匹配其前的原子

\+               1次或多次匹配其前的原子

?               0次或1次匹配其前的原子

|               匹配两个或多个选择

^               匹配字符串串首的原子

$               匹配字符串串尾的原子

[]              匹配方括号中的任一原子

[^]          匹配除方括号中的原子外的任何字符

{m}         表示其前原子恰好出现m次

{m,n}          表示其前原子至少出现m次，至少出现n次(n>m)

{m,}           表示其前原子出现不少于m次

()              整体表示一个原子

.               匹配除换行之外的任何一个字符

 

**边界限制**

在某些情况下，需要对匹配范围进行限定，以获得更准确的匹配结果。“^”和“$”分别指定字符串的开始和结束。

例如，在字符串“Tom and Jerry chased each other in the house until tom’s uncel come in”中

元字符“^” 置于字符串的开始确保模式匹配出现在字符串首端；

^Tom   

元字符“$” 置于字符串的结束，确保模式匹配出现字符串尾端。

in$ 

如果不加边界限制元字符，将获得更多的匹配结果。

^Tom$精确匹配     Tom模糊匹配

 

**重复匹配**

 

正则表达式中有一些用于重复匹配某些原子的元字符：“?”、“*”、“+”。他们主要的不同是重复匹配的次数不同。

元字符“?”:表示0次或1次匹配紧接在其前的原子。

例如：colou?r匹配“colour”或“color”。

元字符“*”:表示0次、1次或多次匹配紧接在其前的原子。

例如：zo*可以匹配z、zoo

`<[A-Za-z][A-Za-z0-9]*>可以匹`配“<P>”、“<hl>”或“<Body>”等HTML标签，并且不严格的控制大小写。

元字符“+”:表示1次或多次匹配紧接在其前的原子。

例如：go+gle匹配“gogle”、“google”或“gooogle”等中间含有多个o的字符串。

`例子十六进制数字，匹配表达式是0?[ xX][0-9a-fA-F]+,可以匹配“0x9B3C”或者“X800”等。`

元字符 “.”

`元字符“.”匹配除换行符外任何一个字符，相当于[^\n](Unix系统)或[^\r\n](windows系统)。`

例如：pr.y可以匹配的字符串“prey”、“pray”或“pr%y”等。

通常可以使用“.*”组合来匹配除换行符外的任何字符。在一些书籍中也称其为“全匹配符” 或 “单含匹配符”。

例如：

^a.*z$表示可以匹配字母“a”开头，字母“z”结束的任意不包括换行符的字符串。

.+也可以完成类似的匹配功能所不同的是其至少匹配一个字符。

^a.+z$将不匹配字符串“az”。

重复匹配

元字符“{}”准确地指定原子重复的次数，指定所匹配的原子出现的次数。

“{m}”表示其前原子恰好出现m次；

“{m，n}”表示其前原子至少出现m次，至多出现n次；

“{m，}”表示其前原子出现不少于m次。

 

例如：

zo{1,3}m只能匹配字符串“zom”、“zoom”、或“zooom”。

zo{3}m只能匹配字符串“zooom”

zo{3，}m可以匹配以 “z” 开头，“m”结束，中间至少为3个“o”的字符串。

bo{0,1}u可以匹配字符串“bought a butter” 中的“bou”和“bu”,等价于bo?u。

原子表 －方括号表达式

原子表”[]”中存放一组原子，彼此地位平等，且仅匹配其中的一个原子。如果想匹配一个 ”a” 或 ”e” 使用 [ae]。

例如: Pr[ae]y 匹配 ”Pray” 或者 ”Prey ”。

原子表 ”[^]” 或者称为排除原子表，匹配除表内原子外的任意一个字符。

`例如：p[^u]匹配“part”中的“pa”，但无法匹配“computer”中的“pu”因为“u”在匹配中被排除。`

原子表“[-]”用于连接一组按ASCII码顺序排列的原子，简化书写。 

例如：x[0123456789]可以写成x[0-9],用来匹配一个由 “x” 字母与一个数字组成的字符串。

例如：

[a-zA-Z]匹配所有大小写字母

`^[a-z][0-9]$匹配比如“z2”、 “t6” 、“g7”`

`0[xX][0-9a-fA-F]匹配一个简单的十六进制数字，如“0x9”。`

[^0-9a-zA-Z_]匹配除英文字母、数字和下划线以外任何一个字符，其等价于\W。 

模式选择符 

 

元字符“|”又称模式选择符。在正则表达式中匹配两个或更多的选择之一。

例如：在字符串“There are many apples and pears.”中，apple|pear在第一次运行时匹配“apple”；再次运行时匹配“ pear”。也可以继续增加选项，如：   apple|pear|banana|lemon

POSIX风格预定义的正则表达式的字符类：

   [[:alnum:]]     字母和数字字符

   [[:alpha:]]       大小写字母

   [[:lower:]]      小写字母

   [[:upper:]]      大写字母

   [[:digit:]]       数字0-9

   [[:xdigit:]]      十六进制数字

   [[:punct:]]      标点符号，包括上档键!@

   [[:blank:]]      TAB制表符和空格

   [[:space:]]      任何空白字符,换行,回车符

   [[:cntrl:]]       控制字符（TAB，退格）

模式单元 

元字符“（）”将其中的正则表达式变为原子（或称模式单元）使用。与数学表达式中的括号类似，“（）”可以做一个单元被单独使用。

例如：

(Dog)+匹配的“Dog”、“DogDog”、“DogDogDog”……..,因为紧接着“+”前的原子是元字符“（）”括起来的字符串“Dog”。

You (very)+ old匹配“You very old”、 “You very very old”

Hello (world|earth)匹配“Hello world”、“Hello earth”

一个模式单元中的表达式将被优先匹配或运算

 

**特殊字符**

所谓特殊字符，就是一些有特殊含义的字符，如上面说的”*.txt”中的*，简单的说就是表示任何字符串的意思。如果要查找文件名中有＊的文件，则需要对＊进行转义，即在其前加一个\。ls \*.txt。正则表达式有以下特殊字符。

<img src="php基础/php字符" alt="1" style="zoom:80%;" />

 

模式匹配的顺序

在使用正则表达式时，需要注意匹配的顺序。通常，正则表达式按照由左至右的顺序依次匹配。

模式匹配的顺序（从高到低）

​    顺序   元字符     说明

   1     （）          模式单元 

   2     ？* +{}   重复匹配

   3      ^$       边界限制

   4       |        模式选择

 

**元字符表**

字符   描述

\   将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，’n’ 匹配字符 “n”。’\n’ 匹配一个换行符。序列 ‘\\’ 匹配 “\” 而 “\(” 则匹配 “(”。

^   匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 ‘\n’ 或 ‘\r’ 之后的位置。

`$   匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$` 也匹配 ‘\n’ 或 ‘\r’ 之前的位置。

\*   匹配前面的子表达式零次或多次。例如，zo* 能匹配 “z” 以及 “zoo”。* 等价于{0,}。

\+   匹配前面的子表达式一次或多次。例如，’zo+’ 能匹配 “zo” 以及 “zoo”，但不能匹配 “z”。+ 等价于 {1,}。

?   匹配前面的子表达式零次或一次。例如，”do(es)?” 可以匹配 “do” 或 “does” 中的”do” 。? 等价于 {0,1}。

{n} n 是一个非负整数。匹配确定的 n 次。例如，’o{2}’ 不能匹配 “Bob” 中的 ‘o’，但是能匹配 “food” 中的两个 o。

{n,} n 是一个非负整数。至少匹配n 次。例如，’o{2,}’ 不能匹配 “Bob” 中的 ‘o’，但能匹配 “foooood” 中的所有 o。’o{1,}’ 等价于 ‘o+’。’o{0,}’ 则等价于 ‘o*’。

{n,m}  m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，”o{1,3}” 将匹配 “fooooood” 中的前三个 o。’o{0,1}’ 等价于 ‘o?’。请注意在逗号和两个数之间不能有空格。

?   当 该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 “oooo”，’o+?’ 将匹配单个 “o”，而 ‘o+’ 将匹配所有 ‘o’。

.   匹配除 “\n” 之外的任何单个字符。要匹配包括 ‘\n’ 在内的任何字符，请使用象 ‘[.\n]’ 的模式。

(pattern) 匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 ‘′或‘’。

(?:pattern)  匹 配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 “或” 字符 (|) 来组合一个模式的各个部分是很有用。例如， ‘industr(?:y|ies) 就是一个比 ‘industry|industries’ 更简略的表达式。

(?=pattern)  正 向预查，在任何匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，’Windows (?=95|98|NT|2000)’ 能匹配 “Windows 2000″ 中的 “Windows” ，但不能匹配 “Windows 3.1″ 中的 “Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。

(?!pattern)  负 向预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如’Windows (?!95|98|NT|2000)’ 能匹配 “Windows 3.1″ 中的 “Windows”，但不能匹配 “Windows 2000″ 中的 “Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始

x|y 匹配 x 或 y。例如，’z|food’ 能匹配 “z” 或 “food”。’(z|f)ood’ 则匹配 “zood” 或 “food”。

[xyz]   字符集合。匹配所包含的任意一个字符。例如， ‘[abc]’ 可以匹配 “plain” 中的 ‘a’。

`[^xyz]  负值字符集合。匹配未包含的任意字符。例如， ‘[^abc]’ 可以匹配 “plain” 中的’p'。`

[a-z]   字符范围。匹配指定范围内的任意字符。例如，’[a-z]’ 可以匹配 ‘a’ 到 ‘z’ 范围内的任意小写字母字符。

`[^a-z]   负值字符范围。匹配任何不在指定范围内的任意字符。例如，’[^a-z]’ 可以匹配任何不在 ‘a’ 到 ‘z’ 范围内的任意字符。`

\b  匹配一个单词边界，也就是指单词和空格间的位置。例如， ‘er\b’ 可以匹配”never” 中的 ‘er’，但不能匹配 “verb” 中的 ‘er’。

\B  匹配非单词边界。’er\B’ 能匹配 “verb” 中的 ‘er’，但不能匹配 “never” 中的 ‘er’。

\cx 匹配由 x 指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 ‘c’ 字符。

\d  匹配一个数字字符。等价于 [0-9]。

`\D  匹配一个非数字字符。等价于 [^0-9]。`

\f   匹配一个换页符。等价于 \x0c 和 \cL。

\n  匹配一个换行符。等价于 \x0a 和 \cJ。

\r   匹配一个回车符。等价于 \x0d 和 \cM。

\s  匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。

`\S  匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。`

\t   匹配一个制表符。等价于 \x09 和 \cI。

\v  匹配一个垂直制表符。等价于 \x0b 和 \cK。

\w  匹配包括下划线的任何单词字符。等价于’[A-Za-z0-9_]’。

`\W 匹配任何非单词字符包括下划线。等价于 ‘[^A-Za-z0-9_]’。`

\xn 匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，’\x41′ 匹配 “A”。’\x041′ 则等价于 ‘\x04′ & “1″。正则表达式中可以使用 ASCII 编码。.

\num   匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，’(.)\1′ 匹配两个连续的相同字符。

\n  标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。

\nm 标 识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。

\nml    如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。

\un 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。

 

例子 匹配32位md5

/^[a-z0-9]{32}$/

 

## 17.     php与mysql

 

`https://www.w3cschool.cn/php/php-mysql-select.html`

PHP 连接 MySQL

在 PHP 使用 MySQL 数据库前，你需要先将它们连接。

PHP 5 及以上版本建议使用以下方式连接 MySQL :

 

MySQLi extension ("i" 意为 improved)

PDO (PHP Data Objects)

在 PHP 早起版本中我们使用 MySQL 扩展。但该  扩展在 2012 年开始不建议使用。

我是该用 MySQLi ，还是 PDO?

如果你需要一个简短的回答，即 "你习惯哪个就用哪个"。

MySQLi 和 PDO 有它们自己的优势：

PDO 应用在 12 种不同数据库中， MySQLi 只针对 MySQL 数据库。

所以，如果你的项目需要在多种数据库中切换，建议使用 PDO ，这样你只需要修改连接字符串和部分查询语句即可。使用 MySQLi, 如果不同数据库，你需要重新所有代码，包括查询。

两者都是面向对象, 但 MySQLi 还提供了 API 接口。

两者都支持预处理语句。 预处理语句可以防止 SQL 注入，对于 web 项目的安全性是非常重要的。

MySQLi 和 PDO 连接 MySQL 实例

在本章节及接下来的章节中，我们会使用以下三种方式来演示 PHP 操作 MySQL:

MySQLi (面向对象)

MySQLi (面向过程)

PDO

MySQLi Installation

Linux 和 Windows: 在 php5 mysql 包安装时 MySQLi 扩展多事情况下是自动安装的。

`安装详细信息，请查看： http://php.net/manual/en/mysqli.installation.php`

PDO 安装

`For 安装详细信息，请查看： http://php.net/manual/en/pdo.installation.php`

连接 MySQL

在我们访问 MySQL 数据库前，我们需要先连接到数据库服务器：

 ```php
 <?php
 
 $servername = "localhost";
 
 $username = "username";
 
 $password = "password";
 // 创建连接
 $conn = new mysqli($servername, $username, $password);
 // 检测连接
 if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
 }
 echo "Connected successfully";
 ?>
 
  
 
 面向过程
 <?php
 $servername = "localhost";
 $username = "username";
 $password = "password";
 
  
 
 // 创建连接
 
 $conn = mysqli_connect($servername, $username, $password);
 // 检测连接
 if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
 }
 echo "Connected successfully";
 ?>
     
 PDO
 <?php
 $servername = "localhost";
 $username = "username";
 $password = "password";
 try {
   $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
   echo "Connected successfully";
   }
 
 catch(PDOException $e)
 
   {
 
   echo $e->getMessage();
 
   }
 
 ?>
 ```

关闭连接

连接在脚本执行完后会自动关闭。你也可以使用以下代码来关闭连接：

实例 (MySQLi - 面向对象)

$conn->close();

实例 (MySQLi - 面向过程)

mysqli_close($conn);

实例 (PDO)

$conn = null;

现在，你已经知道如何将 MySQL 数据库连接到 PHP 了，接下来，你应该了解 PHP 是如何创建数据库的！

PHP 创建 MySQL 表

在 PHP 中创建完数据库之后，我们需要在数据库中创建一个或者多个的数据表。

一个数据表有一个唯一名称，并有行和列组成。

 

使用 MySQLi 和 PDO 创建 MySQL 表

CREATE TABLE 语句用于创建 MySQL 表。

 

创建表前，我们需要使用 use myDB 来选择要操作的数据库：

 

use myDB;

我们将创建一个名为 "MyGuests" 的表，有 5 个列： "id", "firstname", "lastname", "email" 和 "reg_date":

 

CREATE TABLE MyGuests (

id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

firstname VARCHAR(30) NOT NULL,

lastname VARCHAR(30) NOT NULL,

email VARCHAR(50),

reg_date TIMESTAMP

)

上表中的注意事项:

 

数据类型指定列可以存储什么类型的数据。完整的数据类型请参考我们的 数据类型参考手册。

 

在设置了数据类型后，你可以为每个列指定其他选项的属性：

 

NOT NULL - 每一行都必须含有值（不能为空），null 值是不允许的。

 

DEFAULT value - 设置默认值

 

UNSIGNED - 使用无符号数值类型，0 及正数

 

AUTO INCREMENT - 设置 MySQL 字段的值在新增记录时每次自动增长 1

 

PRIMARY KEY - 设置数据表中每条记录的唯一标识。 通常列的 PRIMARY KEY 设置为 ID 数值，与AUTO_INCREMENT 一起使用。

 

每个表都应该有一个主键(本列为 "id" 列)，主键必须包含唯一的值。

 

以下实例展示了如何在 PHP 中创建表：

 

实例 (MySQLi - 面向对象)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = new mysqli($servername, $username, $password, $dbname);

// 检测连接

if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);

}

 

// sql to create table

$sql = "CREATE TABLE MyGuests (

id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

firstname VARCHAR(30) NOT NULL,

lastname VARCHAR(30) NOT NULL,

email VARCHAR(50),

reg_date TIMESTAMP

)";

 

if ($conn->query($sql) === TRUE) {

  echo "Table MyGuests created successfully";

} else {

  echo "Error creating table: " . $conn->error;

}

 

$conn->close();

?>

 

 

 

实例 (MySQLi - 面向过程)

<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测连接

if (!$conn) {

  die("Connection failed: " . mysqli_connect_error());

}

 

// sql to create table

$sql = "CREATE TABLE MyGuests (

id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

firstname VARCHAR(30) NOT NULL,

lastname VARCHAR(30) NOT NULL,

email VARCHAR(50),

reg_date TIMESTAMP

)";

 

if (mysqli_query($conn, $sql)) {

  echo "Table MyGuests created successfully";

} else {

  echo "Error creating table: " . mysqli_error($conn);

}

 

mysqli_close($conn);

?>

 

 

 

实例 (PDO)

<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDBPDO";

 

try {

  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  // set the PDO error mode to exception

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 

  // sql to create table

  $sql = "CREATE TABLE MyGuests (

  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

  firstname VARCHAR(30) NOT NULL,

  lastname VARCHAR(30) NOT NULL,

  email VARCHAR(50),

  reg_date TIMESTAMP

  )";

 

  // use exec() because no results are returned

  $conn->exec($sql);

  echo "Table MyGuests created successfully";

  }

catch(PDOException $e)

  {

  echo $sql . "<br>" . $e->getMessage();

  }

 

$conn = null;

?>
```

现在，你的 MySQL 数据库已经创建好，并且有了需要的表格，但是这还不够，因为数据表中还没有数据，此时表还只是个架子，所以，我们需要继续完善数据表，为它插入一些数据！

 

使用 MySQLi 和 PDO 向 MySQL 插入数据

在创建完数据库和表后，我们可以向表中添加数据。

 

以下为一些语法规则：

 

PHP 中 SQL 查询语句必须使用引号

 

在 SQL 查询语句中的字符串值必须加引号

 

数值的值不需要引号

 

NULL 值不需要引号

 

INSERT INTO 语句通常用于向 MySQL 表添加新的记录：  

 

INSERT INTO table_name (column1, column2, column3,...)    

VALUES (value1, value2, value3,...)

学习更多关于 SQL 知识，请查看我们的 SQL 教程。

 

在前面的几个章节中我们已经创建了表 "MyGuests"，表字段有: "id", "firstname", "lastname", "email" 和 "reg_date"。 现在，让我们开始向表填充数据。

 

Note   注意： 如果列设置 AUTO_INCREMENT (如 "id" 列) 或 TIMESTAMP (如 "reg_date" 列),，我们就不需要在 SQL 查询语句中指定值； MySQL 会自动为该列添加值。

以下实例向 "MyGuests" 表添加了新的记录:

 

实例 (MySQLi - 面向对象)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = new mysqli($servername, $username, $password, $dbname);

// 检测连接

if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);

}

 

$sql = "INSERT INTO MyGuests (firstname, lastname, email)

VALUES ('John', 'Doe', 'john@example.com')";

 

if ($conn->query($sql) === TRUE) {

  echo "New record created successfully";

} else {

  echo "Error: " . $sql . "<br>" . $conn->error;

}

 

$conn->close();

?>

 

 

实例 (MySQLi - 面向过程)

<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测连接

if (!$conn) {

  die("Connection failed: " . mysqli_connect_error());

}

 

$sql = "INSERT INTO MyGuests (firstname, lastname, email)

VALUES ('John', 'Doe', 'john@example.com')";

 

if (mysqli_query($conn, $sql)) {

  echo "New record created successfully";

} else {

  echo "Error: " . $sql . "<br>" . mysqli_error($conn);

}

 

mysqli_close($conn);

?>
```

实例 (PDO)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDBPDO";

 

try {

  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  // set the PDO error mode to exception

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "INSERT INTO MyGuests (firstname, lastname, email)

  VALUES ('John', 'Doe', 'john@example.com')";

  // use exec() because no results are returned

  $conn->exec($sql);

  echo "New record created successfully";

  }

catch(PDOException $e)

  {

  echo $sql . "<br>" . $e->getMessage();

  }

 

$conn = null;

?>
```

 

其实，你还可以在 PHP 的 MySQL 数据库中插入多条数据，这将在下面的一节内容中提及。

 

PHP MySQL 插入多条数据

一般情况下，INSERT 语句只能向 MySQL 数据库添加一条语句，而本文将介绍如何使用函数批量的向数据表插入多条数据。

使用 MySQLi 和 PDO 向 MySQL 插入多条数据

mysqli_multi_query() 函数可用来执行多条SQL语句。

 

以下实例向 "MyGuests" 表添加了三条新的记录：

 

实例 (MySQLi - 面向对象)

```php
<?php

$servername = "localhost";

$username = "username";

$password =

"password";

$dbname =

"myDB";

 

// 创建链接

$conn =

new mysqli($servername, $username, $password, $dbname);

 

// 检查链接

 

if ($conn->connect_error) {

die("Connection failed: " . $conn->connect_error);

}

 

 

$sql = "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('John', 'Doe', 'john@example.com');";

 

$sql .= "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('Mary', 'Moe', 'mary@example.com');";

 

$sql .= "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('Julie', 'Dooley', 'julie@example.com')";

 

 

if ($conn->multi_query($sql) === TRUE) {

echo "New

records created successfully";

} else {

echo

"Error: " . $sql . "

" . $conn->error;

}

 

$conn->close();

?>

 

 

 

Note   请注意，每个SQL语句必须用分号隔开。

 
```

实例 (MySQLi - 面向过程)

```php
<?php

$servername = "localhost";

$username = "username";

$password =

"password";

$dbname =

"myDB";

 

// 创建链接

$conn = mysqli_connect($servername, $username, $password,

$dbname);

 

// 检查链接

 

if (!$conn) {

die("Connection

failed: " . mysqli_connect_error());

}

 

$sql = "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('John', 'Doe', 'john@example.com');";

 

$sql .= "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('Mary', 'Moe', 'mary@example.com');";

 

$sql = "INSERT INTO

MyGuests (firstname, lastname, email)

 

VALUES ('Julie', 'Dooley', 'julie@example.com')";

 

 

if (mysqli_multi_query($conn, $sql)) {

echo "New

records

created successfully";

} else {

echo "Error: "

 $sql  "

"  mysqli_error($conn);

}

 

mysqli_close($conn);

?>

 
```

实例 (PDO)

```php
<?php

$servername = "localhost";

$username = "username";

 

$password = "password";

$dbname =

"myDBPDO";

 

try {

$conn = new PDO("mysql:host=$servername;dbname=$dbname",

$username, $password);

 

// set the PDO error mode to exception

$conn->setAttribute(PDO::ATTR_ERRMODE,

PDO::ERRMODE_EXCEPTION);

 

// 开始事务

 

$conn->beginTransaction();

// SQL 语句

 

$conn->exec("INSERT INTO MyGuests (firstname, lastname, email)

 

VALUES ('John', 'Doe', 'john@example.com')");

 

$conn->exec("INSERT INTO MyGuests (firstname, lastname, email)

 

VALUES ('Mary', 'Moe', 'mary@example.com')");

 

$conn->exec("INSERT INTO MyGuests (firstname, lastname, email)

 

VALUES ('Julie', 'Dooley', 'julie@example.com')");

 

 

// commit the transaction

$conn->commit();

 

echo "New records created successfully";

}

catch(PDOException $e)

{

 

// roll back the transaction if something failed

 

$conn->rollback();

 

echo $sql . "

"  $e->getMessage();

}

 

 

$conn = null;

?>

 
```

使用预处理语句

mysqli 扩展提供了第二种方式用于插入语句。

 

我们可以预处理语句及绑定参数。

 

mysql 扩展可以不带数据发送语句或查询到mysql数据库。 你可以向列关联或 "绑定" 变量。

 ```php
 Example (MySQLi 使用预处理语句)
 
 <?php
 
 $servername = "localhost";
 
 $username = "username";
 
 $password =
 
 "password";
 
 $dbname =
 
 "myDB";
 
  
 
 // Create connection
 
 $conn =
 
 new mysqli($servername, $username, $password, $dbname);
 
  
 
 // Check connection
 
  
 
 if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
 
 } else {
 
 $sql = "INSERT INTO
 
 MyGuests (firstname, lastname, email) VALUES(?, ?, ?)";
 
  
 
 // 为 mysqli_stmt_prepare() 初始化
 
 statement 对象
 
 $stmt =
 
 mysqli_stmt_init($conn);
 
  
 
 //预处理语句
 
  
 
 if (mysqli_stmt_prepare($stmt, $sql)) {
 
  
 
 // 绑定参数
 
  
 
 mysqli_stmt_bind_param($stmt, 'sss', $firstname, $lastname, $email);
 
  
 
  
 
 // 设置参数并执行
 
  
 
 $firstname = 'John';
 
 $lastname
 
 = 'Doe';
 
 $email =
 
 'john@example.com';
 
  
 
 mysqli_stmt_execute($stmt);
 
  
 
  
 
 $firstname = 'Mary';
 
 $lastname
 
 = 'Moe';
 
 $email =
 
 'mary@example.com';
 
  
 
 mysqli_stmt_execute($stmt);
 
  
 
  
 
 $firstname = 'Julie';
 
  
 
 $lastname = 'Dooley';
 
 $email =
 
 'julie@example.com';
 
  
 
 mysqli_stmt_execute($stmt);
 
 }
 
 }
 
 ?>
 
  
 ```

我们可以看到以上实例中使用模块化来处理问题。我们可以通过创建代码块实现更简单的读取和管理。

 

注意参数的绑定。让我们看下 mysqli_stmt_bind_param() 中的代码：

 

`mysqli_stmt_bind_param($stmt, 'sss', $firstname, $lastname, $email);`

该函数绑定参数查询并将参数传递给数据库。第二个参数是 "sss" 。以下列表展示了参数的类型。 s 字符告诉 mysql 参数是字符串。

 

可以是以下四种参数：

 

i - integer

 

d - double

 

s - string

 

b - BLOB

 

每个参数必须指定类型，来保证数据的安全性。通过类型的判断可以减少SQL注入漏洞带来的风险。

 

PHP MySQL 预处理语句

MySQL 从4.1版本开始提供了一种名为预处理语句（prepared statement）的机制。

MySQL 预处理语句不仅大大减少了需要传输的数据量，还提高了命令的处理效率。

预处理语句对于防止 MySQL 注入是非常有用的。

 

预处理语句及绑定参数

预处理语句用于执行多个相同的 SQL 语句，并且执行效率更高。

 

预处理语句的工作原理如下：

 

预处理：创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记 。例如：INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)

 

数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出

 

执行：最后，将应用绑定的值传递给参数（"?" 标记），数据库执行语句。应用可以多次执行语句，如果参数的值不一样。

 

相比于直接执行SQL语句，预处理语句有两个主要优点：

 

预处理语句大大减少了分析时间，只做了一次查询（虽然语句多次执行）

 

绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句

 

预处理语句针对SQL注入是非常有用的，因为 参数值发送后使用不同的协议，保证了数据的合法性。

 

MySQLi 预处理语句

以下实例在 MySQLi 中使用了预处理语句，并绑定了相应的参数:

 

实例 (MySQLi 使用预处理语句)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = new mysqli($servername, $username, $password, $dbname);

 

// 检测连接

if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);

}

 

// prepare and bind

$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)");

$stmt->bind_param("sss", $firstname, $lastname, $email);

 

// 设置参数并执行

$firstname = "John";

$lastname = "Doe";

$email = "john@example.com";

$stmt->execute();

 

$firstname = "Mary";

$lastname = "Moe";

$email = "mary@example.com";

$stmt->execute();

 

$firstname = "Julie";

$lastname = "Dooley";

$email = "julie@example.com";

$stmt->execute();

 

echo "New records created successfully";

 

$stmt->close();

$conn->close();

?>
```



解析以下实例的每行代码:

 

"INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)"

在 SQL 语句中，我们使用了问号 (?)，在此我们可以将问号替换为整型，字符串，双精度浮点型和布尔值。

 

接下来，让我们来看下 bind_param() 函数：

 

`$stmt->bind_param("sss", $firstname, $lastname, $email);`

该函数绑定了 SQL 的参数，且告诉数据库参数的值。 "sss" 参数列处理其余参数的数据类型。s 字符告诉数据库该参数为字符串。

 

参数有以下四种类型:

 

i - integer（整型）

 

d - double（双精度浮点型）

 

s - string（字符串）

 

b - BLOB（布尔值）

 

每个参数都需要指定类型。

 

通过告诉数据库参数的数据类型，可以降低 SQL 注入的风险。

 

Note   注意： 如果你想插入其他数据（用户输入），对数据的验证是非常重要的。

 

 

PDO 中的预处理语句

以下实例我们在 PDO 中使用了预处理语句并绑定参数:

 

实例 (PDO 使用预处理语句)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDBPDO";

 

try {

  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  // 设置 PDO 错误模式为异常

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 

  // 预处理 SQL 并绑定参数

  $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email)

  VALUES (:firstname, :lastname, :email)");

  $stmt->bindParam(':firstname', $firstname);

  $stmt->bindParam(':lastname', $lastname);

  $stmt->bindParam(':email', $email);

 

  // 插入行

  $firstname = "John";

  $lastname = "Doe";

  $email = "john@example.com";

  $stmt->execute();

 

  // 插入其他行

  $firstname = "Mary";

  $lastname = "Moe";

  $email = "mary@example.com";

  $stmt->execute();

 

  // 插入其他行

  $firstname = "Julie";

  $lastname = "Dooley";

  $email = "julie@example.com";

  $stmt->execute();

 

  echo "New records created successfully";

  }

catch(PDOException $e)

  {

  echo $sql . "<br>" . $e->getMessage();

  }

$conn = null;

?>
```



PHP MySQL 读取数据

当 PHP 连接到 MySQL 数据库后，需要向数据库读取数据？那么怎么读取呢？一起来看看。

从 MySQL 数据库读取数据

SELECT 语句用于从数据表中读取数据:

 

SELECT column_name(s) FROM table_name

我们可以使用 * 号来读取所有数据表中的字段：

 

SELECT * FROM table_name

如需学习更多关于 SQL 的知识，请访问我们的 SQL 教程。

 

以下实例中我们从表 MyGuests 读取了 id, firstname 和 lastname 列的数据并显示在页面上：

 

实例 (MySQLi - 面向对象)

```php
<?php

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDB";

 

// 创建连接

$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测连接

if ($conn->connect_error) {

  die("Connection failed: " . $conn->connect_error);

}

 

$sql = "SELECT id, firstname, lastname FROM MyGuests";

$result = $conn->query($sql);

 

if ($result->num_rows > 0) {

  // 输出每行数据

  while($row = $result->fetch_assoc()) {

    echo "id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"]. "<br>";

  }

} else {

  echo "0 results";

}

 

 

mysqli_close($conn);

?>

 

 

以下实例读取了 MyGuests 表的所有记录并显示在 HTML 表格中：

 

实例 (PDO)

<?php

echo "<table style='border: solid 1px black;'>";

echo "<tr><th>Id</th><th>Firstname</th><th>Lastname</th><th>Email</th><th>Reg date</th></tr>";

 

class TableRows extends RecursiveIteratorIterator {

  function __construct($it) {

    parent::__construct($it, self::LEAVES_ONLY);

  }

 

  function current() {

    return "<td style='width: 150px; border: 1px solid black;'>" . parent::current(). "</td>";

  }

 

  function beginChildren() {

    echo "<tr>";

  }

 

  function endChildren() {

    echo "</tr>" . "\n";

  }

}

 

$servername = "localhost";

$username = "username";

$password = "password";

$dbname = "myDBPDO";

 

try {

  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $conn->prepare("SELECT * FROM MyGuests");

  $stmt->execute();

 

  // 设置结果集为关联数组

  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

 

  foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {

    echo $v;

  }

  $dsn = null;

  }

catch(PDOException $e)

  {

  echo "Error: " . $e->getMessage();

  }

$conn = null;

echo "</table>";

?>
```

PHP MySQL Where 子句

通过上一节的内容，你已经可以使用 MySQL 的 SELECT 命令从数据表中获取数据，本节我们可以用 WHERE 命令来筛选出满足条件的结果。

WHERE 子句用于过滤记录。

 

WHERE 子句

WHERE 子句用于提取满足指定标准的的记录。

 

语法

SELECT column_name(s)

 FROM table_name

 WHERE column_name operator value

如需学习更多关于 SQL 的知识，请访问我们的 SQL 教程。

 

为了让 PHP 执行上面的语句，我们必须使用 mysqli_query() 函数。该函数用于向 MySQL 连接发送查询或命令。

 

实例

下面的实例将从 "Persons" 表中选取所有 FirstName='Peter' 的行：

 ```php
 <?php
 
  $con=mysqli_connect("example.com","peter","abc123","my_db");
 
  // Check connection
 
  if (mysqli_connect_errno())
 
  {
 
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
 
  }
 
  
 
  $result = mysqli_query($con,"SELECT * FROM Persons
 
  WHERE FirstName='Peter'");
 
  
 
  while($row = mysqli_fetch_array($result))
 
  {
 
  echo $row['FirstName'] . " " . $row['LastName'];
 
  echo "<br>";
 
  }
 
  ?>
 ```



以上代码将输出：

 

Peter Griffin

在下一节内容中，我们会讲解如何对筛选出来的记录进行排序。

 

PHP MySQL Order By 关键词

你可以对 MySQL 数据库中的记录集进行排序，具体请阅读本节内容。

ORDER BY 关键词用于对记录集中的数据进行排序。

 

ORDER BY 关键词

ORDER BY 关键词用于对记录集中的数据进行排序。

 

ORDER BY 关键词默认对记录进行升序排序。

 

如果你想降序排序，请使用 DESC 关键字。

 

语法

 

  

SELECT column_name(s)

​    

FROM table_name

​    

ORDER BY column_name(s) ASC|DESC

 

如需学习更多关于 SQL 的知识，请访问我们的 SQL 教程。

 

实例

下面的实例选取 "Persons" 表中存储的所有数据，并根据 "Age" 列对结果进行排序：

```php
<?php

 $con=mysqli_connect("example.com","peter","abc123","my_db");

 // Check connection

 if (mysqli_connect_errno())

 {

 echo "Failed to connect to MySQL: " . mysqli_connect_error();

 }

 

 $result = mysqli_query($con,"SELECT * FROM Persons ORDER BY age");

 

 while($row = mysqli_fetch_array($result))

 {

 echo $row['FirstName'];

 echo " " . $row['LastName'];

 echo " " . $row['Age'];

 echo "<br>";

 }

 

 mysqli_close($con);

 ?>

以上结果将输出：

 

 

  

Glenn Quagmire 33

    

Peter Griffin 35

 
```

根据两列进行排序

可以根据多个列进行排序。当按照多个列进行排序时，只有第一列的值相同时才使用第二列：

 

 

  

SELECT column_name(s)

FROM table_name

ORDER BY column1, column2

PHP MySQL Update

对于 MySQL 数据库中的数据你可以根据需要进行更新！

UPDATE 语句用于中修改数据库表中的数据。

 

更新数据库中的数据

UPDATE 语句用于更新数据库表中已存在的记录。

 

语法

UPDATE table_name

 SET column1=value, column2=value2,...

 WHERE some_column=some_value

 

注释：请注意 UPDATE 语法中的 WHERE 子句。WHERE 子句规定了哪些记录需要更新。如果您想省去 WHERE 子句，所有的记录都会被更新！

 

如需学习更多关于 SQL 的知识，请访问我们的 SQL 教程。

 

为了让 PHP 执行上面的语句，我们必须使用 mysqli_query() 函数。该函数用于向 MySQL 连接发送查询或命令。

 

实例

在本教程的前面章节中，我们创建了一个名为 "Persons" 的表，如下所示：

 ```php
 FirstName  LastName  Age
 
 Peter   Griffin  35
 
 Glenn  Quagmire   33
 
 下面的例子更新 "Persons" 表的一些数据：
 
  
 
 <?php
 
  $con=mysqli_connect("example.com","peter","abc123","my_db");
 
  // Check connection
 
  if (mysqli_connect_errno())
 
  {
 
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
 
  }
 
  
 
  mysqli_query($con,"UPDATE Persons SET Age=36
 
  WHERE FirstName='Peter' AND LastName='Griffin'");
 
  
 
  mysqli_close($con);
 
  ?>
 ```



在这次更新后，"Persons" 表如下所示：

 

FirstName  LastName  Age

Peter   Griffin  36

Glenn  Quagmire   33

PHP MySQL Delete

如果你不再需要 MySQL 数据库中的某条记录了，那么你也可以根据需要将其删除！

DELETE 语句用于从数据库表中删除行。

 

删除数据库中的数据

DELETE FROM 语句用于从数据库表中删除记录。

 

语法

DELETE FROM table_name

 WHERE some_column = some_value

 

注释：请注意 DELETE 语法中的 WHERE 子句。WHERE 子句规定了哪些记录需要删除。如果您想省去 WHERE 子句，所有的记录都会被删除！

 

如需学习更多关于 SQL 的知识，请访问我们的 SQL 教程。

 

为了让 PHP 执行上面的语句，我们必须使用 mysqli_query() 函数。该函数用于向 MySQL 连接发送查询或命令。

 

实例

请看下面的 "Persons" 表：

 ```php
 FirstName  LastName  Age
 
 Peter   Griffin  35
 
 Glenn  Quagmire   33
 
 下面的实例删除 "Persons" 表中所有 LastName='Griffin' 的记录：
 
  
 
 <?php
 
  $con=mysqli_connect("example.com","peter","abc123","my_db");
 
  // Check connection
 
  if (mysqli_connect_errno())
 
  {
 
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
 
  }
 
  
 
  mysqli_query($con,"DELETE FROM Persons WHERE LastName='Griffin'");
 
  
 
  mysqli_close($con);
 
  ?>
 ```



在这次删除后，"Persons" 表如下所示：

FirstName  LastName  Age

Glenn  Quagmire   33

在下一节内容中，你将学习到如何连接到数据源！

