import Joi from "joi"

export const EsquemaCadastro = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(3).required()
});

export const EsquemaLogin = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required().min(3)
});
