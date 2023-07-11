import Joi from "joi"

export const EsquemaTransacao = Joi.object({
	email: Joi.string().required(),
	descricao: Joi.string().required(),
	valor: Joi.number().greater(0).required()
})