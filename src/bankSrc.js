 //let BankAccount = require ('./bankAccSrc');

 class Bank {
    constructor (AccNum, balance){
        this.AccNum = AccNum;
        this.balance = balance;
        }

    withdraw(AccNum, amount){

        if(this.AccNum = AccNum){
            var final = this.balance -= amount;
            console.log(final);
        }

        else {

                throw new Error('But you have entered an invalid account number');
        }
    }

    deposit(AccNum, amount){
       
        if(this.AccNum = AccNum){
          
            var final = this.balance += amount;
            console.log(final)
        }

        else {
                throw new Error('You have entered an invalid account number');
        }
    }

    transfer(fromBankAcc, toBankAcc, amount){

            this.withdraw(fromBankAcc, amount);
            this.deposit(toBankAcc, amount);
            console.log(this.balance);
        }
    }

let x = new Bank(54321, 2000);
let y = new Bank(12345, 1000);

// //Perform withdrawal and deposit for x //
// console.log("The new balances of x after withdrawal and deposit respectively are:");

// x.withdraw(x.AccNum, 100);
// x.deposit(x.AccNum, 200);
// console.log("");

// //Perform withdrawal and deposit for y //
// console.log("The new balances of y after withdrawal and deposit respectively are:");

// y.withdraw(y.AccNum, 100);
// y.deposit(y.AccNum, 200);
// console.log("");

//Perform a tranfer from x to y //
console.log("The new balance of y after transfer is:");

y.transfer(12345, 54321, 100);
console.log("");

// console.log(y.balance);
// console.log(x.balance);

