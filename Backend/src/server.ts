import express from "express";
import { DBconnect } from "../banco/banco.js";
import multer from "multer";
import { createProduct, findAllProducts } from "../banco/banco.js";
import path from "path";
import cors from "cors";

const upload = multer({ dest: path.resolve("uploads") });
const server = express();

server.use(cors());

server.use(
    "/uploads",
    express.static(path.resolve("uploads"))
);

server.get("/",(req,res)=>{
    res.status(200).json({msg: "Servidor rodando corretamente"})
})

server.post("/produtos",upload.single("foto"),async (req,res)=>{

    if(!req.file){
        return res.json({msf:"Faltou a imagem"});
    }
    console.log(req.file)
    const dados = await createProduct({
        nome: req.body.nome,
        valor: Number(req.body.valor),
        descricao: req.body.descricao,
        imagem: req.file.filename
    });
    console.log(dados);
    res.status(200).json({ msg: "Cadastrado com sucesso"})
})

server.get("/produtos", async (req,res)=>{
    const dados =  await findAllProducts();
    console.log(dados )
    res.status(200).json({dados: dados, msg: "Retornado com sucesso os produtos disponíveis"})
})

await DBconnect();

server.listen(3000,()=>{
    console.log("Servidor rodando em: http://localhost:3000/")
})