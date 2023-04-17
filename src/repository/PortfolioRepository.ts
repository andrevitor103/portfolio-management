import { Portfolio } from "../model/Portfolio";

export interface PortfolioRepository {
    findAll(): Promise<Portfolio>;
}
