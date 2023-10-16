// array initialize

const arr=[2,3,4,5,4];
// const arr2=[3,4,"lucky",35.4,'c'];
// const arr3=new Array(3,5,3,5,2,6);
console.log(arr);
// console.log(arr2);
// console.log(arr3);


console.log("---------");

//function of arr


// arr.push(4);
// console.log(arr);
// arr.push(3,5,33,6,25);
// console.log(arr);
// arr.pop();
// console.log(arr);



// while(arr.length!=0){
//     arr.pop();
// }
// console.log(arr);
// arr.pop();
// console.log(arr);


// arr.shift(); //remove first element
// console.log(arr);
// arr.unshift(8); //add element if first index
// console.log(arr);

// arr.splice(2,0,75); //add element at 2 index
// console.log(arr);
// arr.splice(2,1);
// console.log(arr);    //delete element at index 2
arr.splice(1,2);
console.log(arr);


// console.log(arr.includes(5));
// console.log(arr.indexOf(5));

// const narr=arr.join(); // convert arr into string
// console.log(narr);
// console.log(arr);

// console.log("lucky" ,arr);




/*combine two array*/

const arrf1=["lucky","sudhanshu","yash","harshit","jayant M"];
const arrf2=["sourabh","harsh","deepanshu","jayant D"];
// const arrf=[...arrf1,...arrf2]; //split all element and add without changing existing array
// const arrf=arrf1.concat(arrf2); //not change arrf1 and combine two array
// console.log(arrf1);
// console.log(arrf);

// const arrn=[1,2,3,[4,5,6],7,[8,9,[10,11,[12,13]]]];
// const arrnm=arrn.flat(Infinity);
// console.log(arrn);
// console.log(arrnm);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); // return an empty array

let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3));


















