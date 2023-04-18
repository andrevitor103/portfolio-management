import { Portfolio } from "../model/Portfolio"
import { PortfolioRepository } from "../repository/PortfolioRepository"
import { PortfolioListView } from "../view/portfolio/PortfolioListView"

import { Request, Response } from "express"

export class PortfolioController {
    constructor(readonly portfolioRepository: PortfolioRepository) {
    }
    public async retrieve(request: Request, response: Response) {
        const portfolio: Portfolio = await this.portfolioRepository.findAll()
        const portfolioListDTO = PortfolioListView.create(portfolio.list())
        return response.status(200).json(portfolioListDTO.format())
    }
}
