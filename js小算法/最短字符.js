/**
 * Created by Myron on 2017/8/8.
 */
window.onload = function () {
    var str = "bitcoin take over the world maybe who knows perhaps"
    findShort(str);
    function findShort(s){
        //分割字符串为数组
        var arr = s.split(" ");
        var lengthArr = [];
        //转换成字符长度的数组
        arr.map(function(item,index){
            lengthArr[index] = item.length
        });
        //拿到数组最小值返回
       return Math.min.apply(Math,lengthArr)
    }
}