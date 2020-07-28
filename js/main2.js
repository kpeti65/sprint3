/* változók:
boolean
number
string
null
undefined
symbol
- a pont az mindig belelép a

number:
let userAge =33;
userAge + 5
userAge - 5
userAge * 2
userAge / 2

maradékot adja vissza: modulus, vissza adja, hogy páros vagy páratlan e a szám
6 % 0
6 % 5

hatványozás:
3 ** 3
9 ** 2

Stringeket mindig indézőjel közé kell tenni.

"Ming " + userName
"Ming Nagy Géze"

*/



console.log("Hello this is console massage");
let price1 = 5;
let price2 = 6;
let total = price1 + price2;
let name;

const age = 44;
const valamit = "Más valami";

let car = "Vw";
car = "Volvo";
/* let userAge = 55; */
let thisIsAnImpontantVariable = "Important";

let num = "4";
typeof num;

let userAge =33;
userAge + 5
userAge - 5
userAge * 2
userAge / 2

let userName = "Kiss Piroska";


let carName;
typeOf carName; /* undified változó lett */

carName = "Mercedes";
typeof carName;  /*  Mercedes */

carName = null;
typeof carName;  /* kiüritettem ezt a változót = object típus lesz*/

let door = "11"; /*  stringként fogom megkapni */
door * 2 /*  így átalakítja a program: impicit módon */
door + 2 /*  itt már probléma mert stringként fogja értelmezni és hozzáfűzi: 115 lesz. */
String(33) /* számot írtam be mindenképp string lesz: konstruktor */
userAge = String(33)
Number("hello") /* nem lesz jó */
String(0); /* 0 lesz*/
String(22); /* 22 lesz*/
String(NaN); /* NaN lesz*/

/* toString   metódus */
let UserAge = 33;
String(userAge)
userAge.toString()

/* toString   metódus */
userAge.toFixed()
let amount = 33.543210;
amount.toFixed(2) /* levágja a további tizedeseket és stringé alakította*/
amount.toPrecision(3) /* osszes számjegyre vonatkozik 33.543*/
amount.toPrecision(2) /* osszes számjegyre vonatkozik 34 - kerekített is*/
amount = 34.567;
amount.toFixed(1) /* toFixed is kerekíti, csak a tizedesek számát kell megadni*/

parseInt("22hal"); /* number készített csak 22 */
parseFloat("22.33"); /* stringből tizedes törtet csinált*/