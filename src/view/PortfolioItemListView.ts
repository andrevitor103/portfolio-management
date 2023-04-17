import { Customer } from "../model/Customer";
import { Portfolio } from "../model/Portfolio";

export class PortfolioItemListView {
    private constructor(
        readonly customer_id: string,
        readonly name: string
    ) {
    }

    static create(customer_id: string, customer_name: string): PortfolioItemListView {
        return new PortfolioItemListView(customer_id, customer_name)
    }
}