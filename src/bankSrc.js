class BankAccount {
    constructor (amount, monthlyFee, interestRate, deposit, withdrawal){
        this.balance = amount;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;
        this.withdrawal = withdrawal;
        this.deposit = deposit;
    };

     finishMonth(){
            var interestEarned = ((this.interestRate / 100) / 12) * this.balance;
            console.log( (this.balance + interestEarned) - this.monthlyFee); 
    };

deposit(amount){
        this.balance = (this.balance + amount);
        console.log(this.balance); 
  };
};

let finalBalance1 = new BankAccount (1000, 50, 12, 40);
let finalBalance2 = new BankAccount (500, 35, 12);

    finalBalance1.finishMonth();
    finalBalance2.deposit(100);


