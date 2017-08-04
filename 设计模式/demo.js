/*
* 说明例子：
*   启动和停止一个动画
* */

//A.过程式程序设计
function startAnimate() {

}

function stopAnimate() {

}
startAnimate();
stopAnimate();

/*---------------------------------------------------------------------------------------------------------------------*/

//B.创建一个类 Anim
var Anim = function () {

}
Anim.prototype.start = function () {
 //给原型对象直接添加start方法
}
Anim.prototype.stop = function () {
//同上，给原型对象添加stop方法
}
var animate = new Anim()
animate.start();
animate.stop();

/*---------------------------------------------------------------------------------------------------------------------*/

//C.完善Anim类，改变Anim类的原型对象，（注意构造函数的指向。。）
Anim.prototype = {
    constructor:Anim,
    start1:function () {

    },
    stop1:function () {

    }
}

/*---------------------------------------------------------------------------------------------------------------------*/


//D.这种是什么设计模式，我也不清楚，继续看书。。回头补上

/*
* 给Function对象上面添加Method方法，给类上面添加方法的
* 她又俩个参数
* name--方法名
* fn--对应的方法
* */
Function.prototype.method = function (name,fn) {
    this.prototype[name] = fn;
    return this;//添加完方法之后，返回类，为的是（链式调用）
}

//第一步创建类
var Animate = function () {

}
//第二步，用Function的Method方法给类添加方法
Animate.method("start",function () {

})
Animate.method("stop",function () {

})

//拓展，链式添加方法
Animate.method("start1",function () {

}).method("stop1",function () {

})

//第三步，调用类上面的方法
var animate = new Animate();
animate.start();
animate.stop();


//调用 链式添加的方法
animate.start1();
animate.stop1();//？？？？？？？？？？？？？？


