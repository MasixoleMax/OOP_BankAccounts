class BankAccount {
    constructor (amount, monthlyFee, interestRate){
        this.balance = amount;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;
       
    };
}
 class Bank extends BankAccount {
    constructor(bankAccountNumber, balance, monthlyFee, interestRate){
        this.bankAccountNumber = bankAccountNumber;
        super(balance, monthlyFee, interestRate)
    }

    withdraw(bankAccountNumber, amount){
     let bankAccountNumber = this.bankAccountNumber;
     console.log(super.withdrawal())

    };
}

let finalBalance1 = new Bank(1000, 50, 12);
finalBalance1.withdraw();

