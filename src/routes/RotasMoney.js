import { Router } from "express"
import { AdicionarTransação, Transações } from "../controllers/ControllersMoney.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { EsquemaTransacao } from "../schemas/EsquemasMoney.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const moneyRouter = Router()

moneyRouter.use(validateAuth)

moneyRouter.post("/nova-transacao/:tipo", validateSchema(EsquemaTransacao), AdicionarTransação)
moneyRouter.get("/transacoes", Transações)


export default moneyRouter