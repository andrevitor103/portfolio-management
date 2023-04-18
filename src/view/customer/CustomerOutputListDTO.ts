import { Customer } from "../../model/Customer"
import { CustomerOutputDTO } from "./CustomerOutputDTO"

export class CustomerOutputListDTO {
    constructor(readonly list: Array<CustomerOutputDTO>) {
    }

    static create(data: Array<Customer>): CustomerOutputListDTO {
        const list = data.map((customer: any) => {
                return new CustomerOutputDTO(customer.getName(), customer.getContacts())
        })
        console.log(list)
        return new CustomerOutputListDTO(list)
    }
}
