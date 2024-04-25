import inquirer from 'inquirer'


const currency : any = {
    USD: 1,  //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PkR: 280,
   }


let user_answer  = await inquirer.prompt(
    [
       {
         name:'from',
         message:"Enter From Currency",
         type: 'list',
         choices: ['USD', 'EUR', 'GBP', 'INR', 'PkR']
       },
       {
         name:'to',
         message:"Enter To Currency",
         type: 'list',
         choices: ['USD', 'EUR', 'GBP', 'INR', 'PkR']
       },
       {
         name:'amount',
         message:"Enter Amount",
         type: 'number'
       }

    ]
)


let fromAmount = currency [user_answer.from]
let toAmount = currency [user_answer.to]
let amount=user_answer.amount
let baseAmount= amount/fromAmount
let convertedAmount= baseAmount*toAmount

console.log(convertedAmount);
