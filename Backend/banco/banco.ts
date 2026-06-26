import { Sequelize, DataTypes } from "sequelize";
// cria conexão com banco em memória
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
});

export const Produto = sequelize.define("Produto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

type CREATEPRODUCT = {
    nome: string
    valor: number
    descricao: string
    imagem:string
}

export async function createProduct({nome,valor,descricao,imagem}: CREATEPRODUCT){
    return await Produto.create({
        nome,
        valor,
        descricao,
        imagem
    })
}

export async function findAllProducts(){
    return await Produto.findAll({
        attributes: ["nome","valor","descricao","imagem"]
    });
}

export async function DBconnect(){
    await sequelize.sync();
    await Produto.sync();
    console.log("Conectado com o banco")
}