import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    const aditional: number = 10;

    this.balance += value + aditional;
    console.log(`---------- DEPÓSITO COM ACRÉSCIMO ----------`);
    console.log(
      `Voce depositou R$ ${value} + e teve acréscimo de R$ ${aditional}`
    );
    console.log(`Saldo em conta atualizado: R$ ${this.balance}`);
    console.log();
  };
}
