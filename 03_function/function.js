function lucky(){
    console.log(`india`);
}
lucky();
function greet(username){
    console.log(`${username} hello`);
}
greet("lucky");

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

function fact(num){
    if(num<=1){
        return 1;
    }
    return num*fact(num-1);
}
console.log(fact(10));


function calc(...num1){
    let sum=0;
    for(let i=0;i<num1.length;i++){
        sum+=num1[i];
    }
    return sum;
}
console.log(calc(2,3,5));

const user={
    name:"lucky",
    age:21
}
function hobj(obj){
    console.log(`my name is ${obj.name} and i am ${obj.age} year old`);
}

hobj(user);
