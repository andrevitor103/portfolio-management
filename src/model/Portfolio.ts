import { Customer } from "./Customer";
import { Uuid } from "./Uuid";

export class Portfolio {
    private CustomerList: Array<Customer> = []

    constructor(customerList: Array<Customer>) {
        this.CustomerList = customerList
    }

    static create(customerList: Array<Customer>): Portfolio {
        return new Portfolio(customerList)
    }

    list(): Array<Customer> {
        return this.CustomerList
    }

    removeCustomerOfList(customer_id: Uuid): void {
        this.CustomerList = this.CustomerList.filter((customer) => {
            return customer.getId() != customer_id
        })
    }
}
