import bcrypt from "bcrypt"
import { v4 as tokenGeneretor } from "uuid"
import { db } from "../database/database.connection.js"


export async function cadastro(req, res) {
    const { nome, email, senha } = req.body

    const hash = bcrypt.hashSync(senha, 10)

    try {
        let usuarioExistente = await db.collection("usuarios").findOne({ email: email})
        if(usuarioExistente) {
            return res.status(409).send("Email já Cadastrado!")
        }
        await db.collection("usuarios").insertOne({ nome, email, senha: hash })
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function login(req, res) {
    const { email, senha } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (!usuario) return res.status(404).send("Usuário não cadastrado")

        const senhaEstaCorreta = bcrypt.compareSync(senha, usuario.senha)
        if (!senhaEstaCorreta) return res.status(401).send("Senha incorreta")

        await db.collection("sessao").deleteMany({ idUsuario: usuario._id })
        const token = tokenGeneretor()
        await db.collection("sessao").insertOne({ token, idUsuario: usuario._id, nome: usuario.nome })

        res.send(token)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function usuarioON (req, res) {
    const { sessao } = res.locals

    try {
        const usuario = await db.collection("usuarios").findOne({ _id: sessao.idUsuario })

        delete usuario.senha
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function CleanDataUsers(req, res){
    try {
      await db.collection("usuarios").deleteMany();
      await db.collection("sessao").deleteMany();
      res.send("Dados Referentes aos usuarios limpos");
    } catch {
      res.status(500).send(err.message);
    }
  };
