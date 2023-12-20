"use strict";

function submitForm(){
    alert(submit);
}

// // animal has methods
// let animal = walk() {
//     if (!this.isS1eeping) {
//         alert(`I walk`);
//     }
// }
// sleep() {
//     this.isS1eeping= true;
// }
// let rabbit {
//     name:"White Rabbit", 
//     __proto__ : animal      
// };

// // modifies rabbit.isS1eeping
// rabbit.sleep();
// alert(rabbit.isS1eeping); // true
// alert(anima1.isS1eeping); // undefined (no such property in the prototype)






// let prices = {
//     banana : 1 ,
//     orange : 2 ,
//     meat : 4,
// }
// function doubleIt(item) {
//     // item => [key,value]
//     let key = item[0];
//     let value = item[1];
//     value = value *2;
//     return [key,value];
// }


// let entries = Object.entries(prices);
// let newEntries = entries.map(doubleIt);
// let newObject = Object.fromEntries(newEntries);


// console.log(newEntries);

// console.log(entries);
// console.log("Finished")

// let arr1 = [2,4,5,-3];
// let arr2 = [66,44,55,-9];
// let arr3 = [...arr1];
// let merge1 = [0, ...arr1,2,5,...arr2];
// let merge2 = [arr1,arr2];

// console.log(Math.max(...arr1,...arr2)); //spread

// console.log(Math.max(...[3,55,343,34,-4]));
// console.log(merge1.length);
// console.log(merge2.length);
// console.log(arr1);
// console.log(arr3);

// let person = {
//         name : "Pack",
//         age : 27,
// get remain(){
//         return 100-this.age
// }    
// };
// console.log(obj1.remain);
// console.log(..."Hello");

// let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);

//getter- ถ้ามีแค่ get อ่านได้อย่างเดียว รับของ / setter - return ของ

// let employee = {
//     __proto__ : person ,
// }

// // let angel = {
// //     name :"Superman",
// // }

// // employee.__proto__ = angel; // ไม่ควรยัดห่าอะไรลงไป โปรแกรมจะเดี้ยงได้

// console.log(person.name);
// console.log(employee.name);
// console.log(person);
// console.log(employee, employee.remain);
// // person.name = "Packky" ;
// // person.middleName = "GG" ;

// employee.age = 55;
// console.log(employee,person.remain,employee.remain);

// console.log(person);








// let army = {
//     minAge : 18,
//     maxAge : 27, 
//     canJoin(user) {
//         if (user.age >= this.minAge) {
//             if(user.age < this.maxAge) {
//                 return true;
//             }
//             return false;
//         }
//     }

//     };
//     // return user.age >= this.minAge && user.ag

// let users = [
//     {age : 16},
//     {age : 20},
//     {age : 23},
//     {age : 30},
// ];
// console.log(users[1].age);

// let thaiArmy = {
//     minAge : 21,
//     maxAge : 25, 
// }
// let soldiers = users.filter(army.canJoin,army);
// let soldier = users.filter(army.canJoin,thaiArmy);

//array like 
// let arr = {
//     0 : 12,
//     1 : 22,
//     2 : 555,
//     length : 3,
// }
// console.log(arr[1])

// let realArray = Array.from(arr);
// console.log(realArray); // ผลลัพธ์ที่ได้เป็น array จริงๆแล้วววว 
// // Array.from
// console.log("Finished")

// function test(arg1,arg2,arg3) {
//     console.log(`Hello ${arg1}`);
//     return(arg1.length > 5);
// }

// let fruits = ["Apple","Orange","Plum","Papaya","Orange","Grape","Orange"];

// function calcAvg(accumulator, item, index, array) {
//     accumulator = accumulator + item;
//     if (index == array.length - 1 ) {
//         accumulator = accumulator/array.length;
//     }
//     return accumulator;      
// }
// console.log([1,11,15,2].reduce(calcAvg));
// console.log("Finished")
//fruits.forEach(test);

// console.log(fruits.indexOf("Orange"));
// console.log(fruits.lastIndexOf("Orange"));

// console.log(fruits.indexOf("Melon"));
// console.log("Finished");
// console.log(fruits.filter(test));

// console.log(fruits.map(test));
// console.log(fruits.sort(test));
// console.log(fruits);

// let number = [11,15,2,1].sort(compareNumeric);
// console.log(finished);
// let idx = 0;

// while (idx>=0) {
//     idx = fruits.indexOf("Orange",idx);
//     if (idx > -1){  
//     console.log(idx);
//     idx = idx+1 ;    
//     }
// }


// test();
// test(1,2,3,4);
// test("ABC",null);
// test(boolean,2323);
// console.log("Finished");



// let fruits = ["Apple","Orange","Plum",
// "Lemon","Banana","Melon"]

// let idx = fruits.indexOf("Lemon")
// console.log(fruits[idx]);
// console.log(fruits.indexOf("Lemon"));
// console.log(fruits.indexOf("Mangosteen")); // ไม่เจอคำตอบ -1
// console.find(fruits.find ((item)=>  {
//     return item =="Lemon" ;

// }
// ));

// let result = fruits.slice(2,4); // ดึงคำตอบที่เลือกเอามาใช้
// console.log(fruits.toString());
// console.log(result.toString());

// let np = pick.concat("Mango","Durian",["Plum"])
// np.forEach((item) => {console.log(item)});

// let result = fruits.slice(2,4); // ดึงคำตอบที่เลือกเอามาใช้
// console.log(fruits.toString());
// console.log(result.toString());




// fruits.splice(1,1);
// console.log(fruits.toString());

// fruits.splice(0,3,"Cherry","Grape");
// console.log(fruits.toString());

// let removed = fruits.splice(0,2);
// console.log(removed.toString());

// fruits.splice(2,0,"Tangerine","Kiwi");
// console.log(fruits.toString());

// fruits.splice(-1,0,"Mango","Papaya");
// console.log(fruits.toString());



// let fruits = ["apple" , "cherry" , "banana"];

// for (let i = 0 ; i < fruits.length ; i++) {
//     console.log(fruits[i]);
// }

// for(let f of fruits){
//     console.log(f);
// }

// for (let key in fruits){
//     console.log(fruits[key]);
// }
//console.log(fruits);







// let id = Symbol("id");
// let user =  {
//     name : "Packk",
//     age : 27,
//     [id]: "KKK",
//     [Symbol.toPrimitive](hint){
//         console.log(`hint:${hint}`);
//         return hint == "string" ? this.toString(): this.valueOf(      
//     },
//     toString(){
//         return`name is ${this.name}` ;
//     },
//     valueOf(){
//         return this.age;
//     },
// };





// let user = {};

// console.log(user?.address?.street);

// let id = Symbol("id");
// let id2 = Symbol("id");

// id2 = id;

// console.log(id==id2);

// console.log(id.toString);
// console.log(id.description);





// function User(name){
//     this.name = name;
//     this.sayHi = function() {
//         console.log("My name is : " + this.name);
//     }
// }

// new User("a");
// // this.name = "111";
// function testThis(x){
//     console.log(x);
// }
// let x = new testThis(this);

// console.log(x);

// let user = {
//     "name" : "Pack" ,
//     size : {
//         width : 300,
//         length: 200,
//     },
//    // sayHi() : function() {
//     sayHi: sayHi ,

// function sayHi() {
//     let arrow = () => {console.log(this.name)};
//     arrow();
// },
// };

// checkThis();

// user.sayHi();

//console.log(user.sayHi());

// let x = structuredClone(user);
// console.log(x==user);



// let user = {name: "John"};

// let permission1 = {canView : true};

// let permission2 = {canEdit : true};

// Object.assign(user,permission1,permission2);

// user.canView = false;
// user.canEdit = false;

// console.log(permission1.canView);



// let user = {
//     "name" : "Pack" ,
//     age:27,
//     "long name": "Woo hoo",
//     1 : 2323,
//     for : "jibi",
//     option1 : "yes",
//     option2 : "no",
// };

// let admin = user;
// admin.name = "Jim";
// console.log(user.name);
 // Jim


// console.log(user.name);
// console.log(user.age);
// console.log(user["long name"]);
// console.log(user["1"]);
// console.log(user.for);
// console.log(user.["for"]);
// console.log(user);

// let test = "jibi" in user;
// console.log(test);

// let answer = prompt("choose option 1 or 2");
// console.log(answer);


// user.lastName = "Zaza";
// user["child"] = 2;



 
 


// "use strict";

// let username = prompt("Who's there?");

// if (username == "" username == null){
//     alert('canceled');
// }else if (username != 'Admin') {
//     alert('I dont know');
// }else {
//     let password= prompt("Password?");
//     if (password == "" password == null){
//         alert('canceled');
//     }else if (password != 'Admin') {
//         alert('I dont know');
//     }else {
// }
  
    
//     "cancel"){
//     alert('canceled');
// }else if (username = 'Other') {
//     alert('I dont know');
// }else (username = 'Admin') {
//     alert('I dont know')
// }





// if (age >= 14 && age >= 90)'';

// if (!(age >= 14 && age >= 90));

// if (age < 14 || age < 90);




// let result = +prompt("Please enter the number");

// if (a+b < 4) {
//     result = "below";

// }else
//     result = "over";

//let result = (a+b <4) ? "below" :"over" ;  

// let value = +prompt("Please enter the number");

// if (value>0){
//     alert(1);
// }else if (value == 0){
//     alert(0);
// } else {
//     alert(-1);
// }




// let input = prompt('What is the "official" name of JavaScript');

// if (input == "EMCAScript") {
//     console.log("Right");

// } else {
//     console.log("You don't know?" ECMAScript!!!);
// }



// let sum = (a,b) => a+b;

// console.log(sum(1,3));

// console.log(sum(1,3));

// function showMessage(a="", text="") {
//     a = '*' +a+'*';
//     console.log(a+ ':' +text);
// }
//     let from = "ann";
//     showMessage(from);

//     console.log(from); //Ann

// let f2 = showMessage;
// f2("Henry","Good Day");

// console.log(f2)




// let sum = 0;
// while (true) {
//     let value = Number(prompt("enter a number" , ''));

//     if(!value) break;

//     sum += value;
// }
// console.log('sum:' +sum);






// let firstname = null;
// let lastname = "";
// let nickname = "super coder";

// if (firstname){
//     console.log(firstname);
// } else if (lastname) {
//     console.log(lastname);
// } else if (nickname) {
//     console.log(nickname);
// } else {
//     console.log("anonymous");
// }

// console.log(firstname || lastname || nickname || null); 


// let age = prompt("Enter your age", 0);

// let accessAllowed = (age>18) ? age*2 : age*4;


// console.log("Hello World")
// console.log('"Hello 22"');


// let result = prompt("Please enter age");
// console.log(result);


// result = confirm("Are u human?");
// console.log(result);

// let value = false;
// alert(typeof value);

// value = String(value);
// console.log(typeof value);


// // value = "77   Yesman";
// // console.log(String(value));


// value = "77 is  Yesman ";
// console.log(Number(value));


// console.log( 2 + 2 + '1'); // 41
// console.log( '2'+ 2 + 1); // 221


// let a = 1;
// let b = 2;

// a =b+1;
// let c= 3-a;

// console.log(a);
// console.log(c);

// console.log(undefined > 0 ) ; // false
// console.log(undefined == 0 ) ; // false

