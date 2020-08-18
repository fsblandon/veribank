import { Injectable } from '@angular/core';

import { Account } from "../models/account.model";
import { Transaction } from "../models/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  newAccount1: Account = new Account();

  newTransfer: Transaction = new Transaction();

  account1 = {
    id: 12345,
    balance: 2000
  }

  transfer = {
    id: 123,
    amount: 0,
    result: false
  }

  constructor() {
    this.newAccount1.id = this.account1.id
    this.newAccount1.balance = this.account1.balance;

    this.newTransfer.id = this.transfer.id;
    this.newTransfer.amount = this.transfer.amount;
    this.newTransfer.result = this.transfer.result;
    this.newTransfer.account = this.newAccount1;
  }
}
