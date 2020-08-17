import { Transaction } from './transaction.model';
import { Account } from './account.model';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });


  it('7. Should do a transfer', () => {
    const valueTransfer = 10;
    
    let account: Account = new Account();
    const deposit = 100;
    account.balance = account.Deposit(deposit);

    let transaction: Transaction = new Transaction();
    transaction.account = account;
    expect(transaction.Transfer(valueTransfer)).toBeTrue();
  });

  it('8. Transfer money Should have a value', () => {
    const valueTransfer = null;
    
    let account: Account = new Account();
    const deposit = 100;
    account.balance = account.Deposit(deposit);

    let transaction: Transaction = new Transaction();
    transaction.account = account;
    expect(transaction.Transfer(valueTransfer)).toBeTrue();
  });

});
