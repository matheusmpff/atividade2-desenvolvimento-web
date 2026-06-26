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
    imagem: string
}

export async function createProduct({ nome, valor, descricao, imagem }: CREATEPRODUCT) {
    return await Produto.create({
        nome,
        valor,
        descricao,
        imagem
    })
}

export async function findAllProducts() {
    return await Produto.findAll({
        attributes: ["nome", "valor", "descricao", "imagem"]
    });
}

export async function putData() {
    await createProduct({
        nome: "Poção Blue Sky",
        valor: 300,
        descricao: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
        imagem: "initData/rsz-sky.png"
    })
    await createProduct({
        nome: "Poção do Perfume Misterioso",
        valor: 200,
        descricao: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
        imagem: "initData/rsz-lilas.png"
    })
    await createProduct({
        nome: "Poção de Pinus",
        valor: 3000,
        descricao: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos",
        imagem: "initData/rsz-pinus.png"
    })
    await createProduct({
        nome: "Poção da Beleza Eterna",
        valor: 3000,
        descricao: "Veneno que mata rápido.",
        imagem: "initData/rsz-1beleza.png"
    })
    await createProduct({
        nome: "Poção do Arco Íro",
        valor: 120,
        descricao: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
        imagem: "initData/rsz-2unicornio.png"
    })
    await createProduct({
        nome: "Caldeirão das Verdades Secretas",
        valor: 150,
        descricao: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
        imagem: "initData/rsz-verdades.png"
    })

}

export async function DBconnect() {
    await sequelize.sync();
    await Produto.sync();
    await putData
    console.log("Conectado com o banco")
}