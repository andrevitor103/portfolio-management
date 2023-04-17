import { Customer } from "../../model/Customer";
import { CustomerRepository } from "../CustomerRepository";

export class CustomerInMemoryRepository implements CustomerRepository {
    private customerCollection: Array<Customer> = []
    
    async save(customer: Customer): Promise<void> {
        await this.customerCollection.push(customer)
    }

    async findAll(): Promise<Customer[]> {
        return await this.customerCollection
    }
}
