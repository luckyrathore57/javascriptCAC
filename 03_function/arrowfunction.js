// basic arrow function

const lucky=()=>{
    let name="india";
    console.log(name);
}
lucky();




// function in object

const user={
    name:"lucky",
    age:21,
    intro: function(){
        console.log(`my name is ${user.name}, I am ${user.age} year old`);
    }
}

console.log(user);
console.log(user.name);
user.intro();

// arrow function with two input

const sum=(a,b)=>(a+b);
console.log(sum(1,5));

//for each

const myarr=[2,4,5,32,6,4]

let ans=0;
myarr.forEach((e)=>{
    ans=ans+e;
    // console.log(e);
});
console.log(ans);

