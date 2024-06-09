



// Task 1
// function sayHello (name){
//     alert("Hello," + name)
// }
// sayHello(prompt("What is your name? "));






// Task 2
// let square = function (x){return x*=x};
// console.log(square(2));
// console.log(square(5));





// Task 3
// let multiply= (x,y) => x*y;
// console.log(multiply(2,3));
// console.log(multiply(4,5));







// Task 4
// const car ={
//     make:"Toyota",
//     model:"Camry",
//     year:"2020",
//     getCarInfo : function (){
//         return `${this.make} ${this.model} ${this.year}`;
//      }
// };
//  console.log(car.make);
//  console.log(car.getCarInfo());






// Task 5
// let colors = ["Red", "Green", "Blue","yellow"];
// let text = " " ;
// let newLine= " \n ";
// function printColors(){
//     for (let i = 0; i < colors.length; i++) {
//         text+=colors[i] + newLine;
//     }
//     document.getElementById("color").innerHTML= text;
// }
// printColors();







// Task 6
// function getStringLength(userString) {
//     return (userString.length)
// }
// console.log(getStringLength('Hello'));
// console.log(getStringLength('JavaScript')); 






// Task 7
// function toUpperCase(userString){
//     return userString.toUpperCase();
// }
// console.log(toUpperCase('hello')); 
// console.log(toUpperCase('world')); 








// Task 8
// let word="";
// let result=[];
// function splitString(sentence, splitBy) {
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i]===splitBy){
//             result.push(word);
//            word="";

//         } else {
//             word+=sentence[i];
//         }
//     }


//     if (sentence.length>0) {
//         result.push(word);
//     }
//     return result;
// }

// console.log(splitString("aya,abdallah,samer,ahmad,bassam,awaysheh",","));




// Task 8
// function splitString(suntence, splitBy){
//     return suntence.split(splitBy);
// }
// console.log(splitString('JavaScript is fun', ' '));


// "red,white,blue"




// ------------------------------More Tasks-----------------------------------

// let area ;
// function calculateArea (radius){
//     radius*=radius;
//     radius*=Math.PI;
//     area=radius;
//     return area;
// }
// console.log(calculateArea(5));
// //78.53981633974483
// console.log(calculateArea(10));
// //314.1592653589793




// let reverseString = function (str) {
//     let word = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         word += str[i];
//     }
    
   
//     return word;
    
// };
// console.log(reverseString("hello"));
// console.log(reverseString("abdallah"));





// function filterEvenNumbers(numsArray){
//     let evenNums=[];
//     for (let i = 0; i < numsArray.length;i++){
//         if (numsArray[i]%2 == 0 ){
//             evenNums.push(numsArray[i]);
//         }
//     }
   
//     return evenNums;
// }
// console.log (filterEvenNumbers ([1, 2, 3, 4, 5, 6]));

// console.log (filterEvenNumbers([11, 22, 33, 44, 55]));
// const library={
//     books:[],
//     addBook:function(book){ 
//             this.books.push(book);
//          }
// };
// library.addBook({title: '1984', author: 'George Orwell'});
// library.addBook({title: 'To Kill a Mockingbird', author: 'Harper Lee' });
// console.log(library.books);