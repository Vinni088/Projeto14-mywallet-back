import { Router } from "express"
//import recipeRouter from "./receitas.routes.js"
import userRouter from "./RotasUsuario.js"

const router = Router()

router.use(userRouter)
//router.use(recipeRouter)

export default router