/*
*
* 1.toLocaleUpperCase  ---将字符串中所有的字母字符都将被转换为大写的，同时适应宿主环境的当前区域设置
* 2.toUpperCase        ---将字符串中的所有字母都被转化为大写字母
* 3.toLocaleLowerCase  ---将字符串所有的字母字符都被转换为小写，同时考虑到宿主环境的当前区域设置
* 4.toLowerCase        ---将字符串中的字母被转换为小写字母
*
* */
window.onload = function () {
    longHead("jiangCbAaqi");
    debugger;
    function longHead(s) {
        var str = s.split("");

        str.map(function (item,index,arr) {
            arr[index] = pinStr(item,index)
        });
        return str.join("-");
    }

    function pinStr(str,count) {
        var strs = ""
        for(var i=0;i<=count;i++){
            strs+=str
        }
        return firToUpperCace(strs)
    }

    function firToUpperCace(str) {
        var string = str.toLocaleLowerCase()
        return string.slice(0, 1).toLocaleUpperCase() + string.slice(1);
    }
}

