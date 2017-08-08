//ques1

(function(){
    // 'use strict';
    var a = b =5;
})();
console.log(b);

//ques2

String.prototype.repeatify = String.prototype.repeatify || function(times){
        var str ='';
        for(var i =0; i < times; i++){
            str +=this;
        }
        return str;
};
console.log("jiangqi".repeatify(2));


//ques3

function test(){
    console.log(a);
    console.log(foo());
    var a =1;
    function foo(){
        return2;
    }
}

test();


//ques4

var fullname ='John Doe';
var obj ={
    fullname:'Colin Ihrig',
    prop:{
        fullname:'Aurelio De Rosa',
        getFullname:function(){
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname()); // Colin Ihrig
var test = obj.prop.getFullname;
console.log(test()); //John Doe

//ques5 call(),apply();
console.log(test.call(obj.prop));  // Aurelio De Rosa