// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 100;
    const withdrawAmount = 150;
    const account = getBankAccount(initialBalance);
    const action = () => account.withdraw(withdrawAmount);
    expect(action).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account1 = getBankAccount(100);
    const account2 = getBankAccount(50);
    const action = () => account1.transfer(100 + 100, account2);
    expect(action).toThrow();
    expect(action).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const action = () => account.transfer(initialBalance, account);
    expect(action).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    const initialBalance = 100;
    const depositAmount = 50;
    const account = getBankAccount(initialBalance);
    account.deposit(depositAmount);
    expect(account.getBalance()).toBe(initialBalance + depositAmount);
  });

  test('should withdraw money', () => {
    const initialBalance = 100;
    const withdrawAmount = 50;
    const account = getBankAccount(initialBalance);
    account.withdraw(withdrawAmount);
    expect(account.getBalance()).toBe(initialBalance - withdrawAmount);
  });

  test('should transfer money', () => {
    const account1InitialBalance = 100;
    const account2InitialBalance = 50;
    const transferAmount = 25;
    const account1 = getBankAccount(account1InitialBalance);
    const account2 = getBankAccount(account2InitialBalance);
    account1.transfer(transferAmount, account2);
    expect(account1.getBalance()).toBe(account1InitialBalance - transferAmount);
    expect(account2.getBalance()).toBe(account2InitialBalance + transferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const balance = await account.fetchBalance();

    if (!balance === null) {
      expect(typeof balance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(50);
    const mockBalance = 150;

    const mockedFetchBalance = jest
      .spyOn(account, 'fetchBalance')
      .mockResolvedValue(mockBalance);

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(mockBalance);
    mockedFetchBalance.mockRestore();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);

    const mockedFetchBalance = jest
      .spyOn(account, 'fetchBalance')
      .mockResolvedValue(null);

    const action = async () => await account.synchronizeBalance();
    expect(action).rejects.toThrowError(SynchronizationFailedError);

    mockedFetchBalance.mockRestore();
  });
});
