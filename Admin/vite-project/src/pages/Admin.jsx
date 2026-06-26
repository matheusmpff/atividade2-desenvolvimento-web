import { useEffect, useState } from "react";
export default function Admin() {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState(0);
    const [foto, setFoto] = useState(null);
    const [dados,setDados] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputs = new FormData();

        inputs.append("nome", nome);
        inputs.append("descricao", descricao);
        inputs.append("valor", valor);
        inputs.append("foto", foto);

        console.log(foto)
        console.log(typeof foto)

        const res = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            body: inputs
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            alert("Cadastrado com sucesso");
        }
        else{
            alert("Erro no cadastro. Verifique os dados e tente novamente");
        }
    }

    useEffect(() => {
        const handleProducts = async () => {
            const dados = await fetch("http://localhost:3000/produtos");
            const res = await dados.json();

            setDados(res.dados);
        }
        handleProducts();
    })
    return (
        <div className='container text-white mx-auto '>
            <div className="p-8 text-2xl font-bold text flex items-center justify-center">Administração Poções e Soluções</div>

            <div className="flex flex-col">
                <div className="text-2xl mb-12 ">Adicionar Produto:</div>

                <form className="self-center bg-footerBg px-6 rounded grid md:grid-cols-2  w-fit" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome:</label>
                        <input onChange={(e) => { setNome(e.target.value) }} required type="text" id="nome" className="p-2 text-footerBg bg-lightpurple rounded w-fit inline-block " placeholder="Insira o nome do produto" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="descricao">Descrição:</label>
                        <input onChange={(e) => { setDescricao(e.target.value) }} required type="text" id="descricao" className="p-2 text-footerBg bg-lightpurple rounded w-fit inline-block " placeholder="Insira a descrição do produto" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nome">Valor:</label>
                        <input onChange={(e) => { setValor(e.target.value) }} required type="number" className="p-2 text-footerBg bg-lightpurple rounded w-fit inline-block " placeholder="Insira o valor do produto" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="imagem">Imagem:</label>
                        <input type="file" onChange={(e) => { setFoto(e.target.files[0]) }} required accept="image/*" multiple id="imagem" className="p-2 text-white file:bg-highlight file:p-1 file:rounded w-fit inline-block " placeholder="Insira o nome do produto" />
                    </div>

                    <button type="submit" className="mb-2 p-2 rounded w-full flex justify-center items-center bg-highlight font-bold md:col-span-2">ENVIAR</button>

                </form>
            </div>

            <div className="mt-24 flex flex-col">
                <div className="text-2xl mb-12 ">Produtos Cadastrados:</div>
                <div>
                    {dados.map((dado)=>(
                        <div className="mt-20">
                            <img src= {`http://localhost:3000/${dado.imagem}`} className="w-32" alt="" />
                            <div className="text-2xl font-bold ">{dado.nome}</div>
                            <div>Descrição: {dado.descricao}</div>
                            <div>Preço: {dado.valor} moedas</div>
                            
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};
