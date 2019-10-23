
class BankAccount {
    constructor (balance, monthlyFee, interestRate){
        this.balance = balance;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;

    }

     finishMonth(){
            var interestEarned = ((this.interestRate / 100) / 12) * this.balance;
            this.balance = (this.balance + interestEarned - this.monthlyFee); 
            this.balance == this.balance;
            return this.balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
        return this.balance;
    }

    withdrawal(amount){
        this.balance = this.balance - amount;
        return this.balance;

    }
}

 let finalBalance = new BankAccount(1000, 50, 12);

// // // Perform finishMonth() 
//  console.log("");
//  console.log("------------------------BANK ACCOUNTS PART 1-----------------------------------");
//  console.log("");
//  console.log('The final balance of the account after one month is:')
//  console.log("");
//  console.log(finalBalance.finishMonth());
//  console.log("");

// // // Perform withdral()
// console.log('The final balance of the account after withdrawing the amount is:')
// console.log("");
// console.log(finalBalance.withdrawal(100));
// console.log("");

// // // Perform deposit()
// console.log('The final balance of the account after depositing the amount is:')
// console.log("");
// console.log(finalBalance.deposit(200));
// console.log("");

//module.exports = BankAccount;

  /*****************************************[END]*********************************************/
