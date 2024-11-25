import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (depositValue: number): void => {
        let newBalance: number = this.getBalance() + (depositValue + 10)
        this.setBalance(newBalance)
        console.log("Depósito especial realizado. Novo saldo: ", this.getBalance())
    }
    
}