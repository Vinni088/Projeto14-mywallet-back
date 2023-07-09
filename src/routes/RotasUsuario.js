import { Router } from "express"
import { cadastro } from "../controllers/ControllersUser.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { EsquemaCadastro } from "../schemas/EsquemasUsuario.js"
import { validateAuth } from "../middlewares/validateAuth.js"

const userRouter = Router()

userRouter.post("/cadastro", validateSchema(EsquemaCadastro), cadastro)
/*userRouter.post("/", signin)
userRouter.get("/usuario-logado", validateAuth, getUser)*/

export default userRouter