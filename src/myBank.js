 // let Bank = require("./bank");

class Customer {
  constructor(balance, interest, monthlyFee, accountNum, customerPassword) {
    this.mybank = new Bank(balance, interest, monthlyFee, accountNum);
    this.accountNumber = accountNum; 
    this.customerPassword =  customerPassword;
  }

  setPassword(secretPassword) {
    this.customerPassword = secretPassword;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    if (this.customerPassword === secretPassword) {
        this.mybank.withdraw(bankAccountNumber, amount);
    }     return this.mybank.bankAccount.balance;

    //   } else {
    //   throw new Error("Incorrect password!");
      }
  

  deposit(bankAccountNumber, amount) {                                            
        this.mybank.deposit(bankAccountNumber, amount)
  
        return this.mybank.bankAccount.balance;
}

  transfer(fromBankAccountNumber, toBankAccountNumber, amount, secretPassword) {
    if (this.customerPassword == secretPassword) {
      this.mybank.withdraw(fromBankAccountNumber, amount);
      this.mybank.deposit(toBankAccountNumber, amount);
      return this.mybank.bankAccount.balance;

      } 
    
    //  else {
    //    throw new Error("Incorrect password!");
    // }
  }
}

let a = new Customer (1000, 12, 50, 1234567899);
let b = new Customer (2000, 12, 50, 1234567898);
let c = new Customer (1000, 12, 50, 1234567888);

a.setPassword("gggh");
b.setPassword("ppp8");
c.setPassword("1234");

//  console.log("----------------------------BANK ACCOUNTS PART 3-----------------------------------");

// console.log("");
// console.log("Password of x is :  " + a.customerPassword);               // Prints the password of x : "gggh" 
// console.log("Password of y is :  " + b.customerPassword);               // Prints the password of y : "ppp8" 
// console.log("Password of z is :  " + c.customerPassword);               // Prints the password of z : "1234" 
// console.log("");
// console.log("****** updated balance of y after withdraw and x after deposit respectively : ******");
// b.withdraw(b.accountNumber, 500, b.customerPassword);                   // Prints the updated balance of y after withdraw 
// a.deposit(a.accountNumber, 1000);                                       // Prints the updated balance of x after deposit
// console.log("");
// console.log("****** updated balance of z & y respectively after transfer : **********");
// c.transfer(c.accountNumber, c.accountNumber, 500, c.customerPassword);  // Prints updated balance of z & y after transfer
// console.log("");

// console.log("---------------------------------[  THE END  ]--------------------------------------"); 

  /*****************************************[END]*********************************************/
