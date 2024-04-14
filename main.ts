#! /usr/bin/env node

import inquirer from 'inquirer'
const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let userAns = await inquirer.prompt( 
   [
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices:['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        },
        {
            name: "to",
            message: "Enter from Currency",
            type: "list",
            choices:['USD', 'EUR', 'GBP', 'INR', 'PKR'],
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        }
   ]
        
)

let fromAmount = currency[userAns.from]
let toAmount = currency[userAns.to]
let amount = userAns.amount
let baseAmount = amount / fromAmount  //USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);


