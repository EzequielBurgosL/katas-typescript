import { ILoggerService } from './LoggerService';
import { ITimeService } from './TimeService';

interface IAccountService {
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  printStatement: () => void;
}

export interface ITransaction {
  date: string;
  amount: number;
}

export class AccountService implements IAccountService {
  private transactions: ITransaction[] = [];

  constructor(
    private logger: ILoggerService,
    private timeService: ITimeService,
  ) {
    this.logger = logger;
    this.timeService = timeService;
  }

  deposit(amount: number) {
    const date = this.timeService.getDate();

    this.transactions.push({ amount, date });
  }

  withdraw(amount: number) {
    const date = this.timeService.getDate();

    this.transactions.push({ amount: -amount, date });
  }

  printStatement() {
    let balance = 0;
    const transactionsWithBalance = this.transactions
      .map(transaction => {
        balance += transaction.amount;

        return JSON.stringify({ ...transaction, balance });
      })
      .reverse();
    const stringOutput = transactionsWithBalance.join('\n');

    this.logger.print(stringOutput);
  }
}
