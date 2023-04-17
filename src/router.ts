import { Router } from "express"

import { PortfolioController } from "./controller/PortfolioController"
import { PortfolioInMemoryRepository } from "./repository/memory/PortfolioInMemoryRepository"
import { CustomerInMemoryRepository } from "./repository/memory/CustomerInMemoryRepository"
import { CustomerController } from "./controller/CustomerController"

const router = Router()

const portfolioRepository = new PortfolioInMemoryRepository()
const portfolioController = new PortfolioController(portfolioRepository)

const customerRepository = new CustomerInMemoryRepository()
const customerController = new CustomerController(customerRepository)

router.get("/portfolio", (req, res) => {
    return portfolioController.retrieve(req, res)
})

router.get("/customer", (req, res) => {
    return customerController.list(req, res)
})

router.post("/customer", (req, res) => {
    return customerController.create(req, res)
})

export { router }
