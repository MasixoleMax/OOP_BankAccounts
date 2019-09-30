class BankAccount {
    constructor (balance, monthlyFee, interestRate){
        this.balance = balance;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;
       
    }
};

class Bank extends BankAccount {
    constructor (balance, monthlyFee, interestRate, BankAccount ){
        this.BankAccount = new BankAccount(balance, monthlyFee, interestRate);
        this.BankAccount = AccNum;
    };

    withdraw(AccNum, amount){
        AccNum.this.BankAccount.withdraw(amount);
    }
}

let y = new Bank();
console.log(y.withdraw(123456788, 100));
