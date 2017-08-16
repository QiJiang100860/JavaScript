var str = "1112222";
checkStringNum(str);
debugger
function checkStringNum(str) {
    var strObj = {};
    var arr = [];
    for(var i = 0;i<str.length;i++){
        if(!strObj.hasOwnProperty(str[i])){
            strObj[str[i]] = {
                value:str[i],
                num:1
            }
        }else {
            strObj[str[i]].num++
        }
    }
    for(var prop in strObj){
        // console.log(prop+"出现的次数为"+strObj[prop].num)
        arr.push(strObj[prop].num);
    }
    var maxStr = checkMax(arr,strObj);
    console.log("最大的字符为："+maxStr.value+";次数为："+maxStr.num);
    debugger;
}

function checkMax(arr,obj) {
    var maxTimes = Math.max.apply(this,arr);
    for(var prop in obj){
        if(obj[prop].num === maxTimes){
            return obj[prop]
        }
    }
}
