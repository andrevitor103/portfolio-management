import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository"
import { Customer } from "../model/Customer"
import { CustomerInputDTO } from "../view/customer/CustomerInputDTO"
import { CustomerOutputListDTO } from "../view/customer/CustomerOutputListDTO"

export class CustomerController {
    constructor(readonly repository: CustomerRepository) {
    }

    public async create(request: Request, response: Response) {
        const customerDTO = CustomerInputDTO.create(request.body)
        const customer = Customer.create(customerDTO.name, customerDTO.document, customerDTO.contacts)
        await this.repository.save(customer)
        return response.status(201).json({})
    }

    public async list(request: Request, response: Response) {

        const result = await this.repository.findAll()
        return response.status(200).json(result)
    }
}
