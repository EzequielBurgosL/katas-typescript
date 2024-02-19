import { AccountService } from './AccountService';
import { ILoggerService } from './LoggerService';
import { ITimeService } from './TimeService';

/* eslint-disable max-nested-callbacks */
describe('Bank', () => {
  const logger: ILoggerService = {
    print: jest.fn(),
  };

  const timeService: ITimeService = {
    getDate: jest.fn(),
  };

  describe('Given a client makes a deposit of 1000 on 10 - 01 - 2012', () => {
    describe('And a deposit of 2000 on 13 - 01 - 2012', () => {
      describe('And a withdrawal of 500 on 14 - 01 - 2012', () => {
        describe('When they print their bank statement', () => {
          it('should do see the expected print statement', () => {
            const bankAccountService = new AccountService(logger, timeService);
            const expectedPrintStatement =
              '{"amount":-500,"date":"14 - 01 - 2012","balance":2500}\n{"amount":2000,"date":"13 - 01 - 2012","balance":3000}\n{"amount":1000,"date":"10 - 01 - 2012","balance":1000}';

            (timeService.getDate as jest.Mock).mockReturnValueOnce(
              '10 - 01 - 2012',
            );
            bankAccountService.deposit(1000);
            (timeService.getDate as jest.Mock).mockReturnValueOnce(
              '13 - 01 - 2012',
            );
            bankAccountService.deposit(2000);
            (timeService.getDate as jest.Mock).mockReturnValueOnce(
              '14 - 01 - 2012',
            );
            bankAccountService.withdraw(500);

            bankAccountService.printStatement();

            expect(logger.print).toHaveBeenCalled();
            expect(logger.print).toHaveBeenCalledWith(expectedPrintStatement);
          });
        });
      });
    });
  });
});
