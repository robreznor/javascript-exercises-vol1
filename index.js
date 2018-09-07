/**
Vanilla Javascript Exercises

This are a collection of javascript exercises.
Every function must execute a custom code and return the required
data. At the end section there will be a console log on each of the functions
to test if the produced code is valid.

Rule nº1: Do not modify the original data. Every function must return a new set of data.
Rule nº2: Do not use any helper library as lodash or Underscore, as the main goal is to exercise vanilla javascript skills

And thats it!

@author 'MrXploder' <l.arancibiaf@gmail.com>
@version 1.0
*/

/**
Do not modify this section

@section DATASET
*/
const Clients = [
  { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
  { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
  { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
  { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
  { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
  { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
  { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
  { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
  { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
];

const Banks = [
  { id: 1, name: 'SCOTIABANK' },
  { id: 2, name: 'BCI' },
  { id: 3, name: 'ITAU' },
  { id: 4, name: 'CONDELL' },
];

const Accounts = [
  { clientId: 4, bankId: 1, balance: 79069 },
  { clientId: 6, bankId: 3, balance: 136060 },
  { clientId: 9, bankId: 3, balance: 74908 },
  { clientId: 2, bankId: 2, balance: 4391 },
  { clientId: 6, bankId: 2, balance: 116707 },
  { clientId: 1, bankId: 3, balance: 157627 },
  { clientId: 5, bankId: 4, balance: 136372 },
  { clientId: 7, bankId: 4, balance: 190204 },
  { clientId: 5, bankId: 4, balance: 149670 },
  { clientId: 2, bankId: 3, balance: 143321 },
  { clientId: 2, bankId: 4, balance: 67466 },
  { clientId: 2, bankId: 3, balance: 17956 },
  { clientId: 9, bankId: 2, balance: 43194 },
  { clientId: 5, bankId: 1, balance: 52245 },
  { clientId: 6, bankId: 2, balance: 41562 },
  { clientId: 3, bankId: 2, balance: 138046 },
  { clientId: 6, bankId: 3, balance: 196964 },
  { clientId: 8, bankId: 3, balance: 73803 },
  { clientId: 9, bankId: 2, balance: 150402 },
  { clientId: 7, bankId: 1, balance: 122869 },
  { clientId: 5, bankId: 4, balance: 65223 },
  { clientId: 7, bankId: 3, balance: 143589 },
  { clientId: 9, bankId: 3, balance: 43346 },
  { clientId: 2, bankId: 1, balance: 60421 },
  { clientId: 4, bankId: 4, balance: 184110 },
  { clientId: 8, bankId: 4, balance: 195903 },
  { clientId: 5, bankId: 2, balance: 77649 },
  { clientId: 8, bankId: 4, balance: 28170 },
  { clientId: 5, bankId: 1, balance: 132850 },
  { clientId: 1, bankId: 3, balance: 139679 },
  { clientId: 7, bankId: 4, balance: 119808 },
  { clientId: 4, bankId: 4, balance: 109201 },
  { clientId: 9, bankId: 3, balance: 112529 },
  { clientId: 1, bankId: 3, balance: 137914 },
  { clientId: 6, bankId: 2, balance: 122904 },
  { clientId: 5, bankId: 4, balance: 103142 },
  { clientId: 8, bankId: 2, balance: 69163 },
  { clientId: 2, bankId: 4, balance: 57812 },
  { clientId: 2, bankId: 3, balance: 32851 },
  { clientId: 7, bankId: 1, balance: 109763 },
  { clientId: 8, bankId: 3, balance: 147442 },
  { clientId: 9, bankId: 1, balance: 42217 },
  { clientId: 1, bankId: 1, balance: 39658 },
  { clientId: 6, bankId: 2, balance: 8664 },
  { clientId: 8, bankId: 1, balance: 41915 },
  { clientId: 7, bankId: 1, balance: 31879 },
  { clientId: 7, bankId: 4, balance: 117795 },
  { clientId: 1, bankId: 4, balance: 108862 },
  { clientId: 5, bankId: 1, balance: 18550 },
];

/**
*/

/**
Every function must return the desired data.
The goal is to accomplish what is asked for.
Avoid mutate the original values.
Always return a new dataset.

@section EXERCISES
*/

/**
Exercise 0
@description Return an Array with Clients 'id'
*/
function Exercise0(){
  return Clients.map(client => client.id);
}
//Answer// => [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
Exercise 1
@description Return an Array with Clients 'id' sort by 'rut'
*/
function Exercise1(){
  //TODO:
}
//Answer// => [ 9, 6, 7, 5, 2, 4, 3, 1, 8 ]


/**
Exercise 2
@description  Return an Array with Clients 'name' ordered from highest to lowest
              by the TOTAL sum of the balances of each Clients Accounts.
*/
function Exercise2(){
  //TODO:
}
/* //Answer//=> [
  'DOMINGUEZ HOUSE GONZALES SALAZAR',
  'BRADY MARY RANDALL FERNANDEZ',
  'ACOSTA COLE ATKINSON PITTS',
  'LARA RENE PETTY BERGER',
  'KIRSTEN COLLINS BYERS COFFEY',
  'FIELDS RATLIFF MORRIS QUINN',
  'CONWAY LANDRY POLLARD BRADLEY',
  'SIMMONS NELSON WITT MONROE',
  'MICHELLE LETITIA BATTLE MOONEY'
  ]
*/


/**
Exercise 3
@description  Return an Object in which the Key are the name of the Banks
              and the Values are the 'rut' of his Clients sorted alphabetically by 'name'
*/
function Exercise3(){
  //TODO:
}
/* //Answer// => {
  SCOTIABANK:
   [ '79093176',
     '81706494',
     '86833361',
     '9065642K',
     '91361017',
     '89873550',
     '87252013' ],
  BCI:
   [ '71167355',
     '81706494',
     '86833361',
     '9065642K',
     '91361017',
     '88271452' ],
  ITAU:
   [ '79093176',
     '71167355',
     '9065642K',
     '86833361',
     '91361017',
     '89873550' ],
  CONDELL:
   [ '91361017',
     '81706494',
     '86833361',
     '79093176',
     '89873550',
     '87252013' ]
  }
*/


/**
Exercise 4
@description  Return an Array order from highest to lowest with the balance of the Clients that
              have more than 25000 in the 'SCOTIABANK' bank
*/
function Exercise4(){
  //TODO:
}
//Answer// => [ 132850, 122869, 109763, 79069, 60421, 52245, 42217, 41915, 39658, 31879 ]


/**
Exercise 5
@description  Return an Array with the 'id' of the Banks from lowest to highest by the
              TOTAL amount of money the manage
*/
function Exercise5(){
  //TODO:
}
//Answer// => [ 1, 2, 3, 4 ]


/**
Exercise 6
@description  Return an Object in which Keys are the name of the Banks
              and the Value is the amount of Clients that only has an account in that Bank
*/
function Exercise6(){
  //TODO:
}
//Answer// => { SCOTIABANK: 0, BCI: 1, ITAU: 0, CONDELL: 0 }


/**
Exercise 7
@description  Return an Object in which the Keys are the name of the Banks
              and the Value is the 'id' of his Client with less money
*/
function Exercise7(){
  //TODO:
}
//Answer// => { SCOTIABANK: 5, BCI: 2, ITAU: 2, CONDELL: 8 }


/**
Output stage, Do not modify.

You must run this exercise in Nodejs and check if your code is outputing the right results

@section CONSOLE LOG
*/

console.log("Exercise 0 --> ", Exercise0() || "Not yet answered");
console.log("Exercise 1 --> ", Exercise1() || "Not yet answered");
console.log("Exercise 2 --> ", Exercise2() || "Not yet answered");
console.log("Exercise 3 --> ", Exercise3() || "Not yet answered");
console.log("Exercise 4 --> ", Exercise4() || "Not yet answered");
console.log("Exercise 5 --> ", Exercise5() || "Not yet answered");
console.log("Exercise 6 --> ", Exercise6() || "Not yet answered");
console.log("Exercise 7 --> ", Exercise7() || "Not yet answered");

process.exit();