// variabel create
// var a=5;
// var b=10;
// var result=a+b;
// console.log(result);
//  string variable
// var a="kashif";
// alert(a);

// operaters
// var ab=12;
// var bc=22;
// alert(ab+bc);
// condtional operaters
// var user=+prompt("user enter a number");
// if (user>50) {
//     console.log("correct value")
// }
// else{
//     console.log("not correct value");
// }

// if statment
// var user1=+prompt("user1 enter a number");
// var user2=+prompt("user2 enter a number")
// if (user1==user2) {
//     console.log("equal values both users");
// }
// else{
//     console.log("not equal values both users");
// }

// else if
// var marks=+prompt("user enter a total marks");
// if (marks>=80 && marks<=100) {
//     console.log("A++ grade");
// } 
// else if (marks>=70 && marks<80) {
//     console.log("A garde");
// }
// else if (marks>=60 && marks<70) {
//     console.log("B grade");
// }

// function 
// function res(marks) {
//     var marks=+prompt("user enter a total marks");
// if (marks>=80 && marks<=100) {
//     console.log("A++ grade");
// } 
// else if (marks>=70 && marks<80) {
//     console.log("A garde");
// }
// else if (marks>=60 && marks<70) {
//     console.log("B grade");
// }
// }
// res()
// var abc=+prompt("Enter a number");

// for (var  index = 0; abc <= 10; index++) {
//     const element = abc[index];
//     console.log(abc,"=",index,"*",abc*element );
    
// // }
// var ab=+prompt("table");
// for (var index = 1; index<=ab.length; index++) {
//     // const element = ab[index];
//     // console.log(element);
//     console.log(ab,"*",index,"=",(ab*index));
    
// }

var ab = +prompt("Enter a number: ");

for (var index = 1; index <= 10; index++) {
    console.log(ab + " * " + index + " = " + (ab * index));
}
