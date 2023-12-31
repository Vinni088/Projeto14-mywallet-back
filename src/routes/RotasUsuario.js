import { cadastro, login, usuarioON, usuarioOF, CleanDataUsers } from "../controllers/ControllersUser.js"
import { EsquemaCadastro, EsquemaLogin } from "../schemas/EsquemasUsuario.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { Router } from "express"

const userRouter = Router()

userRouter.post("/cadastro", validateSchema(EsquemaCadastro), cadastro)
userRouter.post("/login", validateSchema(EsquemaLogin), login)
userRouter.get("/usuario-logado", validateAuth, usuarioON)
userRouter.post("/logout", validateAuth, usuarioOF)
userRouter.delete("/all", CleanDataUsers)

export default userRouter