class BankAccount {
    constructor (balance, monthlyFee, interestRate){
        this.balance = balance;
        this.monthlyFee = monthlyFee;
        this.interestRate = interestRate;
       
    };

     finishMonth(){
            var interestEarned = ((this.interestRate / 100) / 12) * this.balance;
            this.balance = (this.balance + interestEarned - this.monthlyFee); 
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
``
let finalBalance = new BankAccount (1000, 50, 12);


finalBalance.finishMonth();
finalBalance.withdrawal(100);
finalBalance.deposit(100);



