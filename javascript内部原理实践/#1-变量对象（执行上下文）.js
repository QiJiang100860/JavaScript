/**
 * Created by Myron on 2017/7/24.
 */
if(!("a" in window)){
    var a = 12
}
console.log(a);


/*
 * 在控制台打印结果是undefind（太坑了）
 *
 * javascript处理上下文分为两个阶段
 *
 * 1.进入上下文（静态处理）
 * 创建变量对象
 * 本例来说进入上下文
 * VO = {
 *   a:undefined
 * }
 *
 * 2.执行代码（动态处理）
 * 更新变量中的值
 * */





/*
* 分解为
* 1.注意变量的提升
* 2.注意if语句没有块作用域范围
* */

var a;
/*
* a的值变量对象上
* VO = {
*   a:undefined
* }
* */
if(!("a" in window)){
    /*
    * 此处if的判断条件为false，不会执行此语句
    * */
    a = 12
}
console.log(a)



