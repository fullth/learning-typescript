class Account {
    balance: number;

    get getBalance(): number {
        return this.balance;
    }
    set setBalance(amount: number) {
        this.balance += amount;
    }
    
    deposit(depositAmount: number){
        this.setBalance = depositAmount;
    }

    constructor(defaultBalance: number = 0
        , protected bankName: string = "fullthBank"
        , readonly interestRate: number = 0.1) {
            this.balance = defaultBalance;
    }

    getInterestRate() {
        return this.interestRate;
    }

    getDefaultBalance() {
        //return this.defaultBalance; // 생성자 내부에서만 접근가능
    }
}