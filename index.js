//VARIABLE: 
    //In the javascript variable is like a container. jis me hum alag alag tarah ka data store kar sakhty hn.
    //RULES OF VARIABLE:
    //variable ko initialize karny ky liye kuchh rules hoty hn jis se hum variable ko declere karty hn.
    //variable ko hum letters, digit, underscore(_) and dollar sign($) he allowed hn.
    //variable ko hum letter, underscrore(_) or dollar($) se he start kar sakhty hn otherwise javascript humy error dy dy gi.
    //varible ko hum kise bhi reserved keyword se denoted nah kar sakhty. Reserved Keyword se murad jo keyword javascript ky system me include hn. For example:(var, let, ya phr alert etc,).
    //Javascript [case sensetive] hoti hay agar humny aik variable assign kia "harry" ky naam se phr hum aik aur variable assign karty hn "haRRy" ky naam se tu javascript as ko new variable he assign kary gi. 

let apple = "Fruit";
console.log(apple);
let $apple = "MaxFruit";
console.log($apple);
let _apple = 89;  
console.log(_apple);  

    //DIFFRENCE BETWEEN VAR, LET AND CONST:
    //var ko hum phly ky code me istamaal karty hn after "ES6" hum var ko ignore karna ziada pasand karty hn because var ko use karny se humary javascript code me bug bhi asakhata hay.
    //let ko hum aj ky dour ky code me istamaal karty hn. let ko initial kar ky baad me aski valur ko change tu kar sakhty hn jis naam se humny variable banaya hay as naam ko dubara use nah kar sakhty hn.
    //const ko hum jab use karty hn jab humy ye pata hoky humy as variable ki value ko change nah karna hay agar hm change karna bhi chahn tu wo JS humy error dy dy gi.const ko humy initialize or declare dono aik sath he karna ho ga matlb asa nah ky variable assign kar dia likn as me koi value nah rakhi wo tab bhi humy error dy ga.

var q = 78;
q = true;
console.log(q);
let drama = "khudgarz";
drama = "kaise tere khudgarzi";
console.log(drama);
const auther = "Khalil-ur-Rehman";
console.log(auther);

//PRIMATIVE AND NON-PRIMATIVE DATA TYPE OF JAVASCRIPT:
// {ss nn bb u}: It is the short foams of all seven data types;
// [string, symbol, number, null, boolean, bigInt, undefined] they all seven types of javascript;
let a = "Maria";
let b = 19;
let c = true;
let d = null;
let e = undefined;
let f = BigInt("567") + ("7");
let g = Symbol("I am a nice Symbol.")
console.log(a, b, c, d, e, f, g);
console.log(typeof b, g);

//OBJECT (OBJECT)IS THE NON-PRIMITIVE DATA TYPE OF JAVASCRIPT:
const student = {
    "abdullah": true,
    "Rohan": false,
    "Laila": undefined,
    "Rahul": 89,
}
console.log(student["Rahul"]);
  //CHAPTER : 01 [PRACTICE SET]:
//QUESTION 01
let a1 = "horia";
console.log(a1);
a1 = 56;
console.log(a1);
//QUESTION 02
console.log(typeof a1);
//QUESTION 03/04
const teacher = {
    name: "Moin",
    faculty: "pharm-D",
    salary: 50000,
    subject: "pre-Medical"
}
console.log(teacher);
//QUESTION 05
const dict = {
    appreciate: "recognize the full worth of",
    congratulation: "words expressing one's praise for an achievement or good wishes on a special occasion.",
    heaven: "Heaven or the heavens",
}
console.log(dict);


//EXPRESSIONS: 
let w = 13; let i = 25;
console.log("w + i = ", w+i); //ase tarah se substraction, multilply aur division ka same he mathod hay so hum yahan pr nah kar rahy hn wo kaam.
console.log("w++ = ", w++); //++ se value me increament hota hay likn wo increament humy as waqt deckhai nah dy ga likn jab bhi hum variable ko dobara use karengy tu aski value increase ho kar ai gi.
console.log("w = ", w); //jaise phly aski value {13} print hui likn ab jab hum ny asko dubara console karaya tu aski value increase hogai aur {14} print hui.
console.log("++w = ", ++w); //ab baad me plus lagany me aur phly plus lagany me ye fark hay ky phly tu wo value ko increase kar raha tha likn print ah kar raha tha likn as me ye nah hay as me ye foran he value ko increase karta hay aur print karta hay.
console.log("w-- = ", w--); //same plus wala rule he as pr bhi apply hota hay.
//AAIGNMENT OPERATOR:
//+= ka matlb hay apki value me 1 ka izzafa hoga and same rule minase and multiply aur divide ky liye bhi apply hoga.
//COMPARISON OPERATER: ye humy valur boolean me retuen karta hay.
//   ==          equal to, 
//   !=          not equal
//   ===         equal value and type
//   !==         not equal value or not equal type
//   >           greater than
//   <           less than
//   >=          greater than aur equals to
//   <=          less than aur equals to
//   ?           ternary operator 
//LOGICAL OPERATER: (&&) ka matlb hota hay ky sirf sahi statement batana, (||) ka matlb hota hay ky agar 2 statement me se koi aik bhi true hay tu true he print karna, (!)aska kaam hota hay ky kise bhi true function ko false karna aur false function ko true karna.
//CONDITIONAL STATEMENT: it's also called a if, else statement.
// let n = prompt("Hey whats your age?");
// n = Number.parseInt(n); //Converting the string to a number.
// if (n < 0){
//     console.log("This is an invalid age");
// } else if (n < 9){
//     console.log("You are a kid and you cannot even think of driving.");
// } else if (n < 18 && n >= 9){
//     console.log("You are a kid and you can think of driving after 18.");
// } else {
//     console.log("You can now drive as you are above 18.");
// }

// let age = prompt("Hey! What's your age?")
// if (age >= 10 && age <= 20) {
//     console.log("Your age is lies between 10 and 20.");
// } else {
//     console.log("Your age does not lies between 10 and 20.")
// }


  //FOR LOOP IN JAVACRIPT: 
         //loops humy baar baar action ko repeat karny me help karta hay for example agar humy 1 to 100 numbers ko print karna hay tu humy asko aik aik karky console karny ki zarorat nah hay hum ase for loop ki madad se asani se print kara sakhty hn.
         //TYPES OF LOOPS IN JAVASCRIPT:
         //[for loop, for in loop, for of loop, while loop, do while loop]:
         //FOR LOOP:  for loop 3 statement pr mubni hota hay asmi phly statement 1 execute hoti hy jo ky aik he baar execute hoti hay phr statement 2 execute hoti hay phr agar wo statement true hoti hay tu phr statement 3 execute hoti hay phr again statement 2 executed hoti hay phr statement 3 excute hoti hY LIKN yaad rahy ky statement 1 sirf aik he baar execute hoti hay.
// let sum = 0
// let m = prompt("Enter the value of m:")
// m = Number.parseInt(m);
// for (let i = 0; i < m; i++) {
//     sum += (i + 1)
// }
// console.log("Sum of first " + m + " natural numbers is " + sum);

//FOR IN LOOP: for in loop humy object ki keys ko print karny me madad karta hay for examples:
// let obj = {
//     Maryam: 80,
//     Ayesha: 77,
//     Sidra: 76,
//     Unzila: 75
// }
// for (let a in obj) {
//     console.log("Marks of " + a + " are " + obj[a])
// };
//FOR OF LOOP:  for of loop ka kaam hota hay value dena hay likn yaad rahy ky asky liye obj ka ilteral hona bht zarori hay.

// for (let b of "Maryam")
// console.log(b);

//WHILE LOOP: while loop bilkul for loop ki tarah he kaam karta hay bs farq sirf itna hay ky for loop statement ki series se chata hay likn while loop sirf jab he execute hota hay jab humari statement true hoti hay. For example:
// let r = prompt ("Enter the value of r:");
// r = Number.parseInt(r);
// let p = 0;
// while(p < r) {
//     console.log(p);
//     p++;
// }

//FUNCTION IN JAVASCRIPT: function basically ye kaam karty hn ky agar humy apny code me koi cheez baar baar use karni hay tu wo humy as ko baar baar use karny ki mehnet se bachaty hn and functions ko hum jab tak call nah karengy function execute nah hoga. For example:
const hello = () => {
    console.log("Hey how are you. I am fine yaar.")
    return "hi!"
}
let v = hello();
console.log(v); // It's also called the arrow function. latest javacript me hum arrow function ko use karny ko ziada tarjee dn gy.

function onePlusAvg(x , y) {
    return 1 + (x + y) / 2
}// as tarh ka code hum porani javascript me use karty thy, abhi bhi hum ye code use kar sakhty hn.koi manadi nah hay as me. [as code ko humny likha zaroor hay lin call nah kiya hay tu ye rules ky mutabiq execute nah hoga.].
// let s = 1;
// let t = 2;
// let u = 3;
// console.log("One plus Average of s and t is ", onePlusAvg(s, t));
// console.log("One plus Average of t and u is ", onePlusAvg(t, u));
// console.log("One plus Average of u and s is ", onePlusAvg(u, s));
//ab humy aik object me bachon ky naam ky sath anky marks bhi print karany hn tu hum asky liye ye syntax ka istamal karengy. For examples,
let marks = {
    "Maryam": 90,
    "Malaika": 50,
    "Maham": 92,
    "Neha": 33,
    "Fatima": 45,
}
for (let keys = 0; keys < Object.keys(marks).length; keys++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
} // ye example ko hm ny for loop ki madad se kia hay. ab same problem ko hum neechy for in loop se solve karen gy.
for (let keys in marks) {
    console.log("The marks of " + keys + " are " + marks[keys]);
} // tu deckha apny ky for in loop ny same kaam he humara kitny km code me he print kar dia hay.
// Ab next problem humary pass hay ky humy aik try again question create karna hay "while loop ko use karky", ye function jab tak hu se value mangta rahy ga jab tak hum asko correct value nah dy dety. so lets start!
// let correctNumber = 55;
// let u ;
// while (u != correctNumber) {
//     console.log ("Try again")
//     u = prompt("Enter the number:");
// }
// console.log("You have entered the correct number.") // ye hum ny while loop ki example deckhi hay 
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7)); // ye hum ny arrow function ki example ki hay jis me hum ny aik arrown function ko use karty huye aik mens ka output nikala hay.
//TEMPLATES LITERALS: templates literal aik aur tareeka hay string ko decleare karny ka as me agar humy kise bhi 2 string ko aik sentence me call karna ho tu hum asani se ase call kar sakhty hn sirf itna he nah hum baad me aski value ko change bhi karsakhty hn. asko decleared karny ka tareka neechy example me hay:
let boy1 = "Faizan";
let boy2 = "Moin";
let sentence = `${boy1} is a friend of ${boy2}.`
console.log(sentence);
//ESCAPE SEQUENCE CHARACTER: ye characters humary pass wo hoy hn jaise ky hum html me use karty thy single quotes aur double quotes ko ky humy aik he line me 3 single/double quotes ko use karna hay likn browser humy error dy deta hy tu ye character humy help karty hn as ko aik he line me identify karny ky liye.
let actor = 'Ileana D\' Cruze' //same cheez double quote ky liye bhi follow hogi.
console.log(actor); // this function is called escape sequence character.
// \n(NewLine);   \t(tab);    \r(carriageReturn);  //That is the another functions of escape sequence character.
//METHODS OF STRING IN JAVASCRIPT: [ye chnd strings ky method hn jo aksar use hoty hn.]
let name = "Maryam";
console.log(name.length); // ye aik property hy. naam se he lag raha hay ky string ki lenght maloom karny ky liye use hota hay.
console.log(name.toUpperCase()); //ye aik function hay as liye asko call karny ky liye round bracket lagany ki zarorat mehsoos hoti hay. as me bhi naam se he zaher hay ky kise bhi string ko upper case me likhny me use hota hy.
console.log(name.toLowerCase()); // ye bhi same upper case ki tarh he work karta hay.
console.log(name.slice(2, 4)); //ye bhi aik function hy asko bhi call karny pr he ye work karta hay as me hm parameters bhi add kar sakhty hn.Acha ye pata hoan chahiye ky string index ky hissab se "0" se start hota hay hum "slice" keyword ko apny string me mojood kise bhi character ko print karany me helip karta hay. (2,4) as me se jo last wala number hay means ky 4, ab 4 se phluy tak he ye character ko print kary ga matlb 4 aski counting me include nh hoga.
console.log(name.slice(2)); //In this case, agar hum asko 2nd parameter nah dety h tu ye 2 se ly kar jahn tak apka string ahy wahan last tak ky character ko print kar deta hay.
console.log(name.replace("Mar", "Yar"));//It is also called a function and it has a parameters. naam se he zaher hay ky ye kise bhi string ko replace karny me help karta hay likn as ky liye replace karny waly string ka same ona bht zarori hay.
let friend = "Ayesha";
console.log(name.concat(" is a friend of ", friend, "OK")); // It is also called a function and it has a parameters. concat functiona ka kaam hota hay ky jo bhi huamra variable hay or as me jo bhi string declear as me jo bhi hum chahn asko one by one print karaty jana.
let friend2 = "    Unzila    ";
console.log(friend2);
console.log(friend2.trim()); //It is also called a function and as ky bhi parameters ho sakhty hn. Aska kaam ye hay ky agar humary string ky agay ka peechy kahin pr bhi gaap araha hay tu ye function asko remove kar deta hay. sab functions ki examples neechy describe hn. plz look it,
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0]); // as tarah se hum apny string ky characters ko print kara sakty hn.
console.log(fr[1]); // likn yaad rahy ky string ka index bhi (0) se he start hota hay.
console.log(fr[2]);
console.log(fr[3]);
console.log(fr);











