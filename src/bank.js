/******************************************************************
                   Creating a Bank Blueprint
*******************************************************************/

  let BankAcc = require("./bankAcc");                                 // Importing class from bankAcc.js 
  let accounts = [];                                                  // Stores all the created accounts

/*******************************************************************
                 This is where my class begins
********************************************************************/
  
  class Bank {
    constructor(balance, interestRate, monthlyFee, accountNum){
        this.bankAccount = new BankAcc (balance, interestRate, monthlyFee);
        this.accountNumber = accountNum; 
        this.createAccounts(balance, interestRate, monthlyFee, accountNum);
  }
  
/*********************************************************************
                       The class methods
**********************************************************************/
 createAccounts(balance, interestRate, monthlyFee, accountNum) {                           
    this.bankAccount = new BankAcc(balance, interestRate, monthlyFee);
    this.accountNumber = accountNum; 
     accounts.push({ 
      accountNumber: this.accountNumber,
      bankAccount: this.bankAccount
  })
}

    withdraw(bankAccountNumber, amount) {                                            
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber === bankAccountNumber) {
          accounts[i].bankAccount.withdrawal(amount)
           return;                                                                     
          } 
        }
          throw new Error("Withdraw unsuccessful. Bank account number is not found!");   
    }


    deposit(bankAccountNumber, amount) {                                              
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber === bankAccountNumber) {
          accounts[i].bankAccount.deposit(amount);
           return;                                                                         
      } 
    }
          throw new Error("Account number to deposit to was not found!");
}
  
    transfer(fromBankAccountNumber, toBankAccountNumber, amount) {                    
      this.withdraw(fromBankAccountNumber, amount);
      this.deposit(toBankAccountNumber, amount);
    }
  }

  module.exports = Bank;
  
/**************************************************************************************
                              Lets instantiate the new Banks
****************************************************************************************/
    
  let x = new Bank (1000, 12, 50, 1234567899);
  let y = new Bank (2000, 12, 50, 1234567898);
  let z = new Bank (1000, 12, 50, 1234567888);




  
/***************************************************************************************
                      Lets test the methods and print to the console
****************************************************************************************/             
  console.log("----------------------------BANK ACCOUNTS PART 2--------------------------------");
  console.log("");                                   
  console.log("****** Before any transactions the account balances are: ******");   
  console.log("");  

  console.log(accounts);   
  console.log("");
  console.log("****** updated balance after deposit, withdraw and transfer respectively : ******");   

  y.deposit(y.accountNumber, 2000);                        // Prints the balance of y after deposit.
  x.withdraw(x.accountNumber, 500);                        // Prints the balance of x after withdraw. 
  console.log("");                                   

  console.log("****** updated balance of y & z respectively after transfer : **********");   
  y.transfer(y.accountNumber, z.accountNumber, 1000);      // Prints the balance of y & z after transfer. 
  console.log("");   

  console.log("****** After all transactions, the updated account balances are: ******");
  console.log("");

  console.log(accounts);                                  
  console.log(""); 
  


  
  
  
  
  


