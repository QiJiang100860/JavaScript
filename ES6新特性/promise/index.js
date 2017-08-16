window.onload=function () {
    //模拟数据
    var mockData = function () {
        return {
            name:"zhangs",
            age:"222"
        }
    };

    var ajaxPromise = new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(mockData())
        },200)
    });

    ajaxPromise.then(function(data){
        debugger;
    })
}