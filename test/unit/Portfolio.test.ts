import { Customer } from "../../src/model/Customer"
import { Email } from "../../src/model/Email"
import { Phone } from "../../src/model/Phone"
import { Portfolio } from "../../src/model/Portfolio"
import { Uuid } from "../../src/model/Uuid"

test('Deve criar um portfolio', () => {
    let list: Array<Customer> = []
    list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769')]))
    const portfolio = Portfolio.create(list)
    expect(portfolio).toBeInstanceOf(Portfolio)
})

test('Deve remover cliente da lista', () => {
    let list: Array<Customer> = []
    const removeUuid = new Uuid('c61a9934-2003-4361-9ccc-1020d47308a2')
    list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769'), new Email('email@mail.com')], new Uuid('8a91e564-b0c6-40b5-9e68-6987d0ae55aa')))
    list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769'), new Email('email@mail.com')], removeUuid))
    const portfolio = Portfolio.create(list)

    expect(portfolio.list()).toHaveLength(2)
    console.log(portfolio.list())
    portfolio.removeCustomerOfList(removeUuid)
    console.log(portfolio.list())
    expect(portfolio.list()).toHaveLength(1)
})
