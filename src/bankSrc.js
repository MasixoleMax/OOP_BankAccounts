 let BankAccount = require ('./bankAccSrc');

 class Bank {
    constructor (AccNum, balance, newBalance){
        this.AccNum = AccNum;
        this.balance = balance;
        while(arguments == 2){
            this.newBalance = newBalance;
        }
     
    }

    
    withdraw(AccNum, amount){

        if(this.AccNum = AccNum){

            let newBalance = this.balance - amount;
            console.log(newBalance);

        }   
            else {

                     throw new Error('But you have entered an invalid account number');
        } 
    }

    deposit(AccNum, amount){
       
        if(this.AccNum = AccNum){
          
            let newBalance = this.balance + amount;
            console.log(newBalance);

        } 

        else {
            
                throw new Error('You have entered an invalid account number');
            
        }
     
    }


    transfer(fromBankAcc, toBankAcc, amount){
           
            this.deposit(toBankAcc, amount);  
            this.withdraw(fromBankAcc, amount);  
        } 

    }


let y = new Bank(54321, 2000);
let x = new Bank(12345, 1000);

//Perform withdrawal and deposit for x //
console.log("The new balances of x after deposit and withdrawal respectively are:");

x.deposit(x.AccNum, 200);
x.withdraw(x.AccNum, 100);
console.log("")


//Perform withdrawal and deposit for y //
console.log("The new balances of y after deposit and withdrawal respectively are:");

y.deposit(y.AccNum, 200);
y.withdraw(y.AccNum, 100);
console.log("")

//Perform a tranfer from x to y //
console.log("The new balance of x after transfer is:");

x.transfer(x.AccNum, y.AccNum, 100);
console.log("")


// console.log(y.balance);
// console.log(x.balance);