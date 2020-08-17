import { Account } from './account.model';

export class Transaction {
    id: number;
    amount: number;
    result: boolean;
    account: Account;

    Transfer(value: number): boolean {
        this.amount = value;
        let currentBalance = this.account.balance;
        if (this.amount > 0) {
            this.account.balance = currentBalance - this.amount;
            this.result = true;
        } else {
            this.result = false;
        }

        return this.result;
    }
}
