/**
How To

In this file are the procedures to get to the results in the questions below.
It should be noted that they are only an approximation of the thousands of ways that the same result can be achieved
If you have a better aproach, please! let me know! :D

@author 'MrXploder' <l.arancibiaf@gmail.com>
@version 1.0
@license MIT
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
  	return Clients
			.sort((current, next) => parseInt(current.rut) - parseInt(next.rut))
			.map(client => client.id);
}


/**
Exercise 2
@description  Return an Array with Clients 'name' ordered from highest to lowest
              by the TOTAL sum of the balances of each Clients Accounts.
*/
function Exercise2(){
  return Clients
						/*adds the property "residue" to each "client".*/
						.map(client => {
							/*residue property is the sum of all 'saldo' properties for the current client*/
							client.residue = Accounts.reduce((accumulator, account) => {
								if(client.id === account.clientId) return (accumulator + account.balance);
								else return accumulator;
							}, 0);
							return client;
						})
						/*sort the array by "residue" property in descending order*/
						.sort((current, next) =>  next.residue - current.residue)
						/*create the array of client names*/
						.map(client => client.name);
}


/**
Exercise 3
@description  Return an Object in which the Key are the name of the Banks
              and the Values are the 'rut' of his Clients sorted alphabetically by 'name'
*/
function Exercise3(){
  /*this exercise took me 1hour :( so please people if you have a better aproach let me know!*/
	let payLoad = {};

	/*because we have to reference 3 tables lets first add a bunch of properties called
	* "clientName", "clientTaxNumber" and "bankName" on each account object*/
	Accounts.forEach(account => {
		const clientData = Clients.find(client => client.id === account.clientId);

		account.clientTaxNumber = clientData.rut;
		account.clientName 			= clientData.name;
		account.bankName				= Banks.find(bank => bank.id === account.bankId).name;
	});

	/*then, create an object which key is the bank name and the value is an array of object with
	*Clients account.*/
	Banks
	.map(bank => {
		payLoad[bank.name] = Accounts.filter(account => {
			if(account.bankName === bank.name) return account;
		})
		return bank;
	})
	/*finally, sort by bank name and map to rut*/
	.map(bank => {
		/*why es7 syntax looks so sweet? :3 */
		payLoad[bank.name] = [...new Set(payLoad[bank.name]
																			.sort((current, next) => current.clientName > next.clientName)
																			.map(item => item.clientTaxNumber)
																		)];
	});

	return payLoad;
}


/**
Exercise 4
@description  Return an Array order from highest to lowest with the balance of the Clients that
              have more than 25000 in the 'SCOTIABANK' bank
*/
function Exercise4(){
  return Accounts
					/*this one is simple, we first sort by Accounts by "balance"*/
					.sort((current, next) => next.balance - current.balance)
					/*then we reduce and push if the conditions matches*/
					.reduce((accumulator, account) => {
						if(account.bankId === 1 && account.balance > 25000) accumulator.push(account.balance);
						return accumulator;
					}, []);
}


/**
Exercise 5
@description  Return an Array with the 'id' of the Banks from lowest to highest by the
              TOTAL amount of money the manage
*/
function Exercise5(){
  return Banks
					/*not so trivial but easy. We first create a "total" property for each bank
					*'total' is the total amount of money that the bank has in all of his Accounts*/
					.map(bank => {
						bank.total = Accounts.reduce((accumulator, account) => {
							if(account.bankId === bank.id) return accumulator + account.balance;
							else return accumulator;
						}, 0);
						return bank;
					})
					/*then we can sort ascending by this new total property*/
					.sort((current, next) => current.total - next.total)
					/*finally we map to the desired array*/
					.map(bank => bank.id);
}


/**
Exercise 6
@description  Return an Object in which Keys are the name of the Banks
              and the Value is the amount of Clients that only has an account in that Bank
*/
function Exercise6(){
  let payLoad = {};

	/*here I initialize the payLoad object with zeroes
	*because if we dont do this, if a client doesn't have a loyal custumer it wont be show up in the result*/
	Banks.forEach(bank => payLoad[bank.name] = 0);

	Clients
		/*the same trick. We create a Set of banks id's matching the current client*/
		/*by doing [...new Set(...)] we return only the unique values*/
		.map(client => {
			client.banksId = [...new Set(Accounts.filter(account => account.clientId === client.id).map(account => account.bankId))];
			return client;
		})
		/*then we check for the length of the new banksId array that we create previously
		*if the length is 1, that means that the client has only one account in a 'x' bank
		*and because the array stores the banksId, we can reference to the banks object with that id*/
		.map(client => {
			let bankName = Banks.find(bank => bank.id === client.banksId[0]).name;
			if(client.banksId.length === 1) payLoad[bankName] += 1;
		});

	return payLoad;
}


/**
Exercise 7
@description  Return an Object in which the Keys are the name of the Banks
              and the Value is the 'id' of his Client with less money
*/
function Exercise7(){
  let payLoad = {};

	/*its easy to find the poor ones xdxd*/
	Banks.forEach(bank => {
		payLoad[bank.name] = Accounts
													/*get from Accounts all the Accounts that matched the current bank id*/
													.filter(account => account.bankId === bank.id)
													/*sort by ascending so the first item in the array is the poor one*/
													.sort((current, next) => current.balance - next.balance)[0]
													/*return the id*/
													.clientId;
	});

	return payLoad;
}


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