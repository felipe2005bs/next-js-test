import { IAccountRepository } from '@/domain/repositories/AccountRepository';

export const AccountService = (
  repository: IAccountRepository,
): IAccountRepository => ({
  createAccount: account => {
    return repository.createAccount(account);
  },
  getActions: (password, passwordConfirmation) => {
    return repository.getActions(password, passwordConfirmation);
  },
  getAllAccounts: params => {
    return repository.getAllAccounts(params);
  },
  updateAccount: (accountId, account) => {
    return repository.updateAccount(accountId, account);
  },
});
