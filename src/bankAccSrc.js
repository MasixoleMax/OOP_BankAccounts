class BankAccount {
    constructor (balance, monthlyFee, interestRate){
        this.balance = balance;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;
     
    };

     finishMonth(){
            var interestEarned = ((this.interestRate / 100) / 12) * this.balance;
            this.balance = (this.balance + interestEarned - this.monthlyFee); 
            this.balance === this.balance;
            console.log(this.balance);
    };

    deposit(amount){
        this.balance = this.balance + amount;
        console.log(this.balance);
    };

    withdrawal(amount){
        this.balance = this.balance - amount;
        console.log(this.balance);

    };
};

// module.exports = BankAccount;

let finalBalance = new BankAccount (2000, 50, 12);

//Perform finishMonth()
console.log('The final balance of the account after one month is:')
finalBalance.finishMonth();
console.log("");

//Perform withdral()
console.log('The final balance of the account after withdrawing the amount is:')
finalBalance.withdrawal(100);
console.log("");

//Perform deposit()
console.log('The final balance of the account after depositing the amount is:')
finalBalance.deposit(200);
console.log("");




