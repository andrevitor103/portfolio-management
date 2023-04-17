import { Customer } from "../model/Customer";

export interface CustomerRepository {
    save(customer: Customer): Promise<void>;
    findAll(): Promise<Array<Customer>>;
}