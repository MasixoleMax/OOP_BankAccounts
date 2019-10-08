let Bankacc = require("./bankAccSrc.js");
class Bank {
  constructor(balance, interestRate, monthlyFee, accountNum) {
    this.bankAccount = new Bankacc(balance, interestRate, monthlyFee);
    this.accountNum = accountNum; 
    this.accounts = [];
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount
    });
  };
  createAccounts(balance, interestRate, monthlyFee, accountNum) {
    this.bankAccount = new Bankacc(balance, interestRate, monthlyFee);
    this.accountNum = accountNum; 
    this.accounts.push({
      accountNumber: this.accountNum,
      bankAccount: this.bankAccount
    });
  }

  withdraw(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.withdraw(amount);
      } else {
            throw new Error("Not the correct account!");
      }
    }
  }

  deposit(bankAccountNumber, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (bankAccountNumber == this.accounts[i].accountNumber) {
        this.accounts[i].bankAccount.deposit(amount);
      } else {
            throw new Error("Not the correct account!");
      }
    }
  }

  transfer(fromBankAccountNumber, toBankAccountNumber, amount) {
    this.withdraw(fromBankAccountNumber, amount);
    this.deposit(toBankAccountNumber, amount);
  }
}
let x = new Bank (1000, 12, 50, 12345);
console.log(x.deposit(100));


