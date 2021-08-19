//******************************************************************************************
// show output on console AND html
showResult = (param) => {
    console.log(param);
    document.write(`${param}<br>`)
}


//******************************************************************************************
// CodeFlow Übung lev1_1: Arrow Function
showResult("CodeFlow Übung lev1_1: Arrow Function");

function intro() {
    showResult("Hello World1");
}
intro();

// Hier verkürzen wir unseren Code mit Hilfe von einer Arrow Function.
intro = () => {
    showResult("Hello World2");
}
intro();

// Wenn die Funktion nur eine Statement hat und das Statement einen Wert
// zurückgibt, können die Klammern entfernen werden.
intro = () => showResult("Hello World3");
intro();


//******************************************************************************************
//CodeFlow Übung lev1_2: functions
showResult('-'.repeat(40));
showResult("CodeFlow Übung lev1_2: functions");
function sayHello() {
    showResult("Hallo");
}
sayHello();

//------------------------------------
function add(x, y) {
    showResult(x + y);
}
add(2, 3);

//------------------------------------
function multiply(x, y) {
    // alert(x * y);
    showResult(x * y);
}
multiply(2, 3);

//------------------------------------
i = true;
j = 'hi';
k = 1;
l = { name: 'John' };
a = [0, 1];
function gettype(param) {
    showResult(typeof param);
}
gettype(i);
gettype(j);
gettype(k);
gettype(l);
gettype(a);

//------------------------------------
showResult('-'.repeat(40));
sayHello = () => showResult("Hallo");
sayHello();
//------------------------------------
add = (x, y) => showResult(x + y);
add(2, 3);
//------------------------------------
multiply = (x, y) => showResult(x * y);
multiply(2, 3);
//------------------------------------
gettype = (param) => showResult(typeof param);
gettype(i);
gettype(j);
gettype(k);
gettype(l);
gettype(a);


//******************************************************************************************
// CodeFlow Übung lev1_4: function hero
showResult('-'.repeat(40));
showResult("CodeFlow Übung lev1_4: function hero");
hero = (heroName, heroPower, heroEnemy) => {
    let name = `Mein Lieblingsheld aus Marvel ist: ${heroName}`;
    let power = `Er/Sie hat die Fähigkeit: ${heroPower}`;
    let enemy = `Sein/Ihr größter Gegner ist: ${heroEnemy}`;
    showResult(name);
    showResult(power);
    showResult(enemy);
}
hero("Iron Man", "Technik-Superhirn", "er selbst")

//******************************************************************************************
// CodeFlow Übung lev1_6: function vs. variable
showResult('-'.repeat(40));
showResult("CodeFlow Übung lev1_6: function vs. variable");
returnOne = () => { return 1 }
let x = 1;
let y = returnOne();
if (x === y) {
    showResult("Wird das gedruckt?");
}

//******************************************************************************************
// CodeFlow Übung lev1_7: function double
showResult('-'.repeat(40));
showResult("CodeFlow Übung lev1_7: function double");
double = (value) => { return value * 2 };
showResult(double(5));

//******************************************************************************************
// CodeFlow Übung lev1_8: function your age 
showResult('-'.repeat(40));
getAge = (yearborn) => { return new Date().getFullYear() - yearborn; }
showResult(`Alter: ${getAge(1964)}`);

showResult('-'.repeat(40));
ageDiff = (age1, age2) => { return age1 > age2 ? age1 - age2 : age2 - age1; }
showResult(`Die Altersdifferenz betraegt: ${ageDiff(57, 25)} Jahre`);

//******************************************************************************************
//CodeFlow Übung lev1_9: function introduction 
showResult('-'.repeat(40));

///vorname, nachname, geburtsort, alter, wohnort
introduction = (vorname, nachname, geburtsort, alter, wohnort) => {
    showResult("Mein Name ist " + vorname + " " + nachname + ".");
    showResult("Ich bin in " + geburtsort + " geboren.");
    showResult("Ich lerne HTML/CSS/JS bei SuperCode.");
    showResult("Ich bin " + alter + " Jahre alt.");
    showResult("Ich wohne in " + wohnort + ".");
}
introduction("Klaus", "Nienhaus", "Bocholt", 57, "Bochum");

