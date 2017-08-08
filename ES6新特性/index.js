/*
* 关键字const,let与var
*
* var，变量---词法作用域
*
* const，是常量---块级作用域
* let，是变量---块级作用域
* */

const b = 3;

if(true){
    const a = 1;
}
console.log(a);//undefind

/*
* 箭头函数(匿名函数)
* */


let add = (a,b)=>a+b;
let add = function(a,b){
  return a+b
}



/*
* 析构表达式
* (个人理解：就是解析和重构)
* */

//对象取值
const user = {
    name:"zhangs",
    age:"29"
}

//注意解析的时候用的是{}
const {name,age} = user
console.log(name)//zhangs
console.log(age)//29

//数组取值
const arr = [1,2,3];
//注意解析的时候用的是[]
const [one,two,three] = arr;
console.log(one)//1





