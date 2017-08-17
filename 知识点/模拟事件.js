var ele = document.getElementById("clickMe")
ele.onclick = function (e) {

}
//自动点击函数
function autoClick(ele) {
    // IE
    if(document.all) {
        ele.click();
    }
    // 其它浏览器
    else {
        //创建一个鼠标事件
        var e = document.createEvent("MouseEvents");
        //配置这个事件 15个参数
        e.initEvent("click", true, true);
        //触发这个事件
        ele.dispatchEvent(e);
    }
}