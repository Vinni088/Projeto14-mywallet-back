import { Router } from "express"
import moneyRouter from "./RotasMoney.js"
import userRouter from "./RotasUsuario.js"

const router = Router()

router.use(userRouter)
router.use(moneyRouter)

export default router