
 // let MyBank = require("./bank");

class Customer {
  constructor(balance, interest, monthlyFee, accountNum, customerPassword) {
    this.mybank = new MyBank(balance, interest, monthlyFee, accountNum);
    this.accountNumber = accountNum; 
    this.customerPassword =  customerPassword;
  }

  setPassword(secretPassword) {
    this.customerPassword = secretPassword;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    if (this.customerPassword === secretPassword) {
        this.mybank.withdraw(bankAccountNumber, amount);
       } else {
      throw new Error("Incorrect password!");
    }
  }

  deposit(bankAccountNumber, amount) {                                            
        this.mybank.deposit(bankAccountNumber, amount);
}

  transfer(fromBankAccountNumber, toBankAccountNumber, amount, secretPassword) {
    if (this.customerPassword == secretPassword) {
      this.mybank.withdraw(fromBankAccountNumber, amount);
      this.mybank.deposit(toBankAccountNumber, amount);
       } else {
      throw new Error("Incorrect password!");
    }
  }
}

let x = new Customer (1000, 12, 50, 1234567899);
let y = new Customer (2000, 12, 50, 1234567898);
let z = new Customer (1000, 12, 50, 1234567888);

x.setPassword("gggh");
y.setPassword("ppp8");
z.setPassword("1234");

console.log("----------------------------BANK ACCOUNTS PART 3-----------------------------------");

console.log("");
console.log("Password of x is :  " + x.customerPassword);               // Prints the password of x : "gggh" 
console.log("Password of y is :  " + y.customerPassword);               // Prints the password of y : "ppp8" 
console.log("Password of z is :  " + z.customerPassword);               // Prints the password of z : "1234" 
console.log("");
console.log("****** updated balance of y after withdraw and x after deposit respectively : ******");
y.withdraw(y.accountNumber, 500, y.customerPassword);                   // Prints the updated balance of y after withdraw 
x.deposit(x.accountNumber, 1000);                                       // Prints the updated balance of x after deposit
console.log("");
console.log("****** updated balance of z & y respectively after transfer : **********");
z.transfer(z.accountNumber, y.accountNumber, 500, z.customerPassword);  // Prints updated balance of z & y after transfer
console.log("");

console.log("---------------------------------[  THE END  ]--------------------------------------"); 
















