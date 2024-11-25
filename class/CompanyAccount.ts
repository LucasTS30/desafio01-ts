import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if(this.validateStatus()) {
      let newBalance: number = this.getBalance() + loanValue
      this.setBalance(newBalance)
    }
    console.log("Empréstimo realizado. Novo saldo: ", this.getBalance())
  }
}
