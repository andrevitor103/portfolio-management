import knex, { Knex } from 'knex'
import { development } from './ConfigKnex'
import { PortfolioRepository } from '../PortfolioRepository';
import { Portfolio } from '../../model/Portfolio';
import { Customer } from '../../model/Customer';
import { ContactFactory } from '../../model/ContactFactory';

export default class PortfolioDatabaseRepository implements PortfolioRepository {
    knex: Knex;

    constructor() {
        this.knex =  this.init()
        }

    private init() {
        return knex(development)
    }

    async close(): Promise<void> {
        await this.knex.destroy()
    }

    async findAll(): Promise<Portfolio> {
        const customers = await this.knex('CUSTOMER').select('*')
        let customerCollection: Array<Customer> = []
        customers.map(async (customer: Customer) => {
            let contacts = await this.knex('CONTACTS').select('contact').where({
                'cod_customer': customer.getId().getValue()
            })
            contacts = contacts.map((contact: string) => {
                return ContactFactory.create(contact)
        })
            customerCollection.push(Customer.create(customer.getName(), customer.getDocument().getValue(), contacts))
        })
        await this.close()
        return Portfolio.create(customerCollection)
    }
}
