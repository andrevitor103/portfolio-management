import { Customer } from "../../model/Customer";
import { Phone } from "../../model/Phone";
import { Portfolio } from "../../model/Portfolio";
import { PortfolioRepository } from "../PortfolioRepository";

export class PortfolioInMemoryRepository implements PortfolioRepository {
    private portfolio: Portfolio;
    
    constructor() {
        const list: Array<Customer> = []
        list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769')]))
        list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769')]))
        list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769')]))
        list.push(Customer.create('Teste', '11259209989', [new Phone('42998718769')]))
        this.portfolio = new Portfolio(list)
    }

    async findAll(): Promise<Portfolio> {
        return await this.portfolio
    }

}