describe("The BankAccount class", function() {

     let finalBalance = new BankAccount(1000, 50, 12);

    it ("should be able to perform finishmonth and update the balance", function() {
  
        expect(finalBalance.finishMonth()).toBe(960);
     });

    it ("should be able to withdraw an amount from the updated balance and return the correct balance", function() {
  
        expect(finalBalance.withdrawal(100)).toBe(860);
    });

   it ("should be able to deposit an amount from the updated balance and return the correct balance", function() {
  
        expect(finalBalance.deposit(100)).toBe(960);
    });
});

describe("The Bank class", function(){

     let k = new Bank(1000, 12, 50, 1234567899);
     let l = new Bank(2000, 12, 50, 1234567898);
     let m = new Bank(1000, 12, 50, 1234567888);


    it ("should be able to create accounts with account numbers and use the account numbers to withdraw, deposit and transfer between them", function() {
 
        expect(k.withdraw(1234567899, 500)).toBe(500);
   });

    it ("should be able to create accounts with account numbers and use the account numbers to withdraw, deposit and transfer between them", function() {
 
        expect(l.deposit(l.accountNumber, 500)).toBe(2500);
    });

    it ("should be able to create accounts with account numbers and use the account numbers to withdraw, deposit and transfer between them", function() {
 
        expect(l.transfer(l.accountNumber, m.accountNumber, 1000)).toBe(1500, 2500);
    });
});

describe("The Customer class", function() {

     let a = new Customer (1000, 12, 50, 1234567899);
     let b = new Customer (2000, 12, 50, 1234567898);
     let c = new Customer (1000, 12, 50, 1234567888);

     c.setPassword(1234);                            // set the password

it ("should be able to set passwords and use them to perform the necessary transactions", function() {
 
        expect(c.customerPassword).toBe(1234);
    });

    it ("should be able to set passwords and use them to perform the necessary transactions", function() {
 
         expect(b.withdraw(b.accountNumber, 500, b.customerPassword)).toBe(1000);
    });

    it ("should be able to set passwords and use them to perform the necessary transactions", function() {
 
         expect(a.deposit(a.accountNumber, 1000)).toBe(1500);
    });

    it ("should be able to set passwords and use them to perform the necessary transactions", function() {
 
        expect(a.transfer(a.accountNumber, c.accountNumber, 1000, a.customerPassword)).toBe(500, 500);
    });
});
