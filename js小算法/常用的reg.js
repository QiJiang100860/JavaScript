window.onload = function () {
    regNum("123211")//true
    regNum("1211")//true
    regNum("12aa")//false
    function regNum(str) {
        var reg = /^(\d{4}){1}(\d{2})?$/
        return reg.test(str)
    }

    /*是否带有小数*/
    function    isDecimal(strValue )  {
        var  objRegExp= /^\d+\.\d+$/;
        return  objRegExp.test(strValue);
    }

    /*校验是否中文名称组成 */
    function ischina(str) {
        var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
        return reg.test(str);     /*进行验证*/
    }

    /*校验电话码格式 */
    function isTelCode(str) {
        var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        return reg.test(str);
    }

    /*校验邮件地址是否合法 */
    function IsEmail(str) {
        var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }
}