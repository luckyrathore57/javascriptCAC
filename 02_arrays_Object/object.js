const mySym=Symbol("india"); // singleton object(it can be initialize using constructor only)
const JsUser={
    name:"Lucky",
    [mySym]:"mykey1",//use symbol inside object
    age:21,
    islog:false,
}
// console.log(JsUser[mySym]);//better way to access element in object
// console.log(JsUser["age"]);//better way to access element in object

// console.log(JsUser);
// JsUser.age=22;
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.age=23;
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
// console.log(JsUser);



//=================================\


const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={e:5,f:6};

// const obj4={obj1,obj2,obj3}; //this make a objection with key obj1,obj2,.. and store object asitis
// const obj4=Object.assign({},obj1,obj2,obj3);//merge objects
// const obj4={...obj1,...obj2,...obj3};//split all key value pair and done task
// console.log(obj4);


const tinderUser={}
tinderUser.id=123;
tinderUser.name="lucky";
tinderUser.logged=false;


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(course.courseInstructor === instructor);
// console.log(instructor);
// console.log(course);





