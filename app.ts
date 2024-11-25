import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(25)
peopleAccount.withdraw(5)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(22)
companyAccount.withdraw(2)
companyAccount.getLoan(40)

const specialAccount: SpecialAccount = new SpecialAccount('Lucas', 30)
console.log(specialAccount)
specialAccount.deposit(22)
specialAccount.withdraw(2)
