import { Customer } from "../../model/Customer";
import { PortfolioItemListView } from "./PortfolioItemListView";

export class PortfolioListView {
    private constructor(
        readonly list: Array<PortfolioItemListView>
    ) {
    }

    static create(list: Array<Customer>): PortfolioListView {
        const portfolioListDTO: Array<PortfolioItemListView> = list.map((customer) => {
            return PortfolioItemListView.create(customer.getId().getValue(), customer.getName())
        })
        return new PortfolioListView(portfolioListDTO)
    }

    public format(): Array<any> {
        return this.list
    }
}
