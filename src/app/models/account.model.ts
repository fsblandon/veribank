export class Account {
    id: number;
    balance: number;

    Deposit(value: number): number {
        if (value > 0) {
            let balance = this.balance + value;
            return balance;
        } else {
            return this.balance;
        }
        
    }

    Withdraw(value: number): number {
        if(value > 0) {
            if(value <= this.balance) {
                let balance = this.balance - value;
                return balance;
            } else {
                return this.balance;
            }
        } else {
            return this.balance;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}
