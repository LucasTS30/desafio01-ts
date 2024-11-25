export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    let newBalance: number = this.getBalance() + depositValue
    this.setBalance(newBalance)
    console.log("Depósito realizado. Novo saldo: ", this.getBalance())
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus() && this.balance > 0) {
      let newBalance: number = this.getBalance() - withdrawValue
      this.setBalance(newBalance)
    }
    console.log("Saque realizado. Novo saldo: ", this.getBalance())
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
