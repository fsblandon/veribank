import { Account } from './account.model';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account()).toBeTruthy();
  });

  it('1. Should increase balance', () => {
    const deposit = 10;
    let account: Account = new Account();
    account.balance = 100;
    
    expect(account.Deposit(deposit)).toBeGreaterThan(account.getBalance());
  });

  it('2. Deposit amount should not be negative values', () => {
    const deposit = -20;
    let account: Account = new Account();
    account.balance = 100;
    
    expect(deposit).toBeGreaterThan(0);
  });

  it('3. Should decrease balance', () => {
    const withdraw = 10;
    let account: Account = new Account();
    account.balance = 100;
    
    expect(account.Withdraw(withdraw)).toBeLessThan(account.getBalance());
  });

  it('4. Withdraw amount should be less or equal than current balance', () => {
    const withdraw = 120;
    let account: Account = new Account();
    account.balance = 100;
    
    expect(withdraw).toBeLessThanOrEqual(account.getBalance());
  });

  it('5. Withdraw amount should not be negative values', () => {
    const withdraw = -10;
    let account: Account = new Account();
    account.balance = 100;
    
    expect(withdraw).toBeGreaterThan(0);
  });

});
