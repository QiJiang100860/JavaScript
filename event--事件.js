//javascript事件整理

//事件流--描述的是从页面中接收事件的顺序
//1.IE的事件流----------事件冒泡
//2.netscape的事件流----事件捕获

//DOM事件流
//三个阶段
//事件捕获阶段(e.eventPhase == 1) ---- 事件处于目标阶段(e.eventPhase == 2) ---- 事件冒泡阶段(e.eventPhase == 3)

ele.addEventListenter("click",handle,[Boolean])
var handle = function(event){
    //......
}

//***第三个参数为可选参数（默认为false）
//默认：
    //false---事件在冒泡阶段响应handle事件处理
    //true---事件在捕获阶段响应handle事件处理

//阻止冒泡行为
    event.stopPropagation();

//阻止默认事件的特定行为（比如a链接中href="../index.html"）;
    event.preventDefault();

//跨浏览器的事件对象(事件对象的兼容性处理)

var EventUntil = {
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false)//在补货阶段获取数据
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler)//兼容IE
        }else {
            element["on"+type] = handler
        }
    },
    getEvent:function(event){
        return event?event:window.event
    },
    getTarget:function(){
        return event.target || event.stcElement
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault()
        }else{
            event.returnValue = false
        }
    },
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false)
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler)
        }else{
            element["on"+type] = null
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}

//实例：

element.onclick = function(event){
    event = EventUntil.getEvent();
    EventUntil.stopPropagation(event);
}
