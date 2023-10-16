//for loop(basic)

// let s="";
// for (let i = 0; i < 10; i++) {
//     s=s+" "+ i;
// }
// console.log(s);


//while loop
// let x=27;
// let y=0;
// while(x){
//     y=y*10+(x%2);
//     x=Math.floor(x/2);
// }
// console.log(y);

//do while

// let n=23;
// do{
//     console.log("even",n);
//     n--;
// }while(n%2==0);

//for loop for objects

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { //this is not allowed
//     console.log(key, ':-', value);
    
// }

//we can use for loop for object by using obj.keys,obj.values,obj.entries
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }





//for loop for maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }



//forEach function or loop

// const marks=[87,93,96,76];
// let sum=0;
// marks.forEach(function(i){
//     sum+=i;
// })
// console.log(sum);


//filter function for make new array with certain property

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


//   let mybooks=books.filter(function(bk){
//     return bk.publish<=1995;
//   })
//   console.log(mybooks);




//some concept for map on arrays

//   const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);



//reduce (for finding sum product and other)

const nums=[1,5,6,44,64,3,7];
let ans=nums.reduce((acc,curr)=>acc+curr,0);// acc is updated with acc+curr, curr iterate over nums,acc initialize with 0
console.log(ans);





