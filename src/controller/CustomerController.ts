import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository"
import { Customer } from "../model/Customer"
import { CustomerDTO } from "./CustomerDTO"

export class CustomerController {
    constructor(readonly repository: CustomerRepository) {
    }

    public async create(request: Request, response: Response) {
        const customerDTO = CustomerDTO.create(request.body)
        const customer = Customer.create(customerDTO.name, customerDTO.document, customerDTO.contacts)
        await this.repository.save(customer)
        return response.status(201).json(await this.repository.findAll())
    }

    public async list(request: Request, response: Response) {
        const list = await this.repository.findAll()
        return response.status(200).json(list)
    }
}
