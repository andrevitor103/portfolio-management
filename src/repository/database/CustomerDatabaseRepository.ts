import knex, { Knex } from 'knex'
import { development } from './ConfigKnex'
import { CustomerRepository } from '../CustomerRepository';
import { Customer } from '../../model/Customer';
import { Contact } from '../../model/Contact';
import { ContactFactory } from '../../model/ContactFactory'

export default class CustomerDatabaseRepository implements CustomerRepository {
    knex: Knex;

    constructor() {
        this.knex =  this.init();
        }

    private init() {
        return knex(development);
    }

    async close(): Promise<void> {
        await this.knex.destroy();
    }

    async save(customer: Customer): Promise<void> {
        await this.knex('CUSTOMER').insert({
            'id': customer.getId().getValue(), 
            'name': customer.getName(), 
            'document': customer.getDocument().getValue()
        })
        customer.getContacts().forEach(async (contact: Contact) => {
            await this.knex('CONTACTS').insert({
                'cod_customer': customer.getId().getValue(),
                'contact': contact.getValue()
            })
        })
    }

    async findAll(): Promise<Array<Customer>> {
        const customers = await this.knex('CUSTOMER').select('*')
        const customerCollection: Array<Customer> = []
        for(var i = 0; i < customers.length; i++) {
            const contacts = await this.knex('CONTACTS').select('contact').where('cod_customer', customers[i]['id'])
            customerCollection.push(Customer.create(customers[i]['name'], customers[i]['document'], contacts, customers[i]['id']))
        }
        return customerCollection
    }
}
