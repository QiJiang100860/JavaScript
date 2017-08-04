/**
 * Created by Myron on 2017/8/4.
 */
/*
* 第一句话：函数运行在定义他的作用域中，而不是调用他的作用域中
* 第二句话：js的作用域又是词法性质，
*   **就是外部作用域，无法访问内部作用域。
*   **而内部作用域，可以访问外部作用域。
* */

var bazz;
(function () {
    var a = 1;
    var b = 2;
    //定义函数
    bazz = function () {
        return a+b
    }
})()
//调用函数
bazz()

