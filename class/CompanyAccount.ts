import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.getStatus()) {
      this.setBalance(value);
      // this.setBalance += value;
      console.log(`---------- EMPRÉSTIMO ----------`);
      console.log(`Você pegou um empréstimo de R$ ${value}`);
      console.log(`Saldo em conta atualizado: R$ ${this.getBalance()}`);
      console.log();
    }
  };
}
