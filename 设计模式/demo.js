/*
* 给Function对象添方法
* */
Function.prototype.method = function (name,fn) {
    this.prototype[name] = fn;
    return this //返回this，链式调用
}

var Animate = function () {
    
}
Animate.method("start",function () {
    //...
}).method("playing",function () {
    //...
}).method("stop",function () {
    //...
})


//调用

var animate = new Animate()

animate.start();


