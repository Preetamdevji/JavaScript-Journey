// Arrays Practise

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];

// res_1 = console.log(result[3]);
// res_2 = console.log(result[1]);

// console.log(res_1 + res_2);


// if we want to check the length of arrays

// console.log(result[result.length - 1]);

// we use for loop to navigate

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];

// for(let i=0; i<=result.length; i++){
//     console.log(result[i]);
// }


// ES6 for in loop

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];

// for(let results in result){
//     console.log(results);
// }

// ES6 for of loop

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];

// for(let results of result){
//     console.log(results);
// }

// ES6 foreach loop
// call a function foreach loop in Array

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];

// // first i use normal traditional method
// result.forEach(function(elements,index,array){
//     console.log(elements + " :" + index + " " + array);
// });

// ES6 foreach loop
// 2nd i use fatArrow function 

// var result = [
//     'preetam',
//     'devji',
//     'kesu',
//     'eshwer'
// ];


// result.forEach((elements,index,array) => {
//     console.log(elements + " :" + index + " " + array);
// })


// splice method 

// const course_Name = [
//     'html',
//     'css',
//     'javasrcipt',
//     'bootstrap',
//     'php',
// ];

// const newCourse_Name = course_Name.splice(4,0,"Sql");
// console.log(course_Name);

// const newCourse = course_Name.splice(course_Name.length,0,"sql");
// console.log(course_Name);

// const new_del_Course = course_Name.splice(0,2,0);
// console.log(course_Name);


//(problem:1) find the square root of each elements in an array

// let arr = [25,36,49,64,81];

// let newArr = arr.map((currElement) => {
//     return Math.sqrt(currElement);
// });

// console.log(newArr);

//(problem:1) Multiply each elements by 2 and those elements which are greater then 10.

let mularr = [2,4,6,8,];
    debugger;
let newMulArr = mularr.map((currElement) => {
    return currElement * 2; 
}).filter((currElement) => {
    return currElement > 10;
}).reduce((accumulator, currElement) => {
    return accumulator += currElement
});
console.log(newMulArr);


// Fatten Array
// converting 2d or 3d array 

let nestedArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9,10]
];


let newNestedArr = nestedArr.reduce((accum, currValue) => {
    return accum.concat(currValue);
});

console.log(nestedArr);
console.log(newNestedArr);




