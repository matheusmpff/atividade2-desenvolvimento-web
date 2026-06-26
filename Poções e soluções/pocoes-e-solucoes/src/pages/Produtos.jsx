import Card from "../components/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Produtos() {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [source, setSource] = useState("");
    const [dados, setDados] = useState([])
    useEffect(() => {
        const productsHandler = async () => {
            const dados = await fetch("http://localhost:3000/produtos");
            const res = await dados.json()
            console.log(res.dados[0].imagem)
            if (res.dados.length > 0) {
                setDescricao(res.dados[0].descricao);
                setPreco(res.dados[0].valor);
                setNome(res.dados[0].nome);
                setSource(res.dados[0].imagem);
                setDados(res.dados);
            }

        }
        productsHandler();
    }, []);

    return (
        <div className="container mx-auto text-white ">
            <div className="flex justify-center mb-20">
                <div onClick={() => { alert(id) }} className="text-3xl mr-2">NOSSOS</div>
                <div className="text-3xl text-highlight font-luxurious">PRODUTOS</div>
            </div>
            <div className="flex w-fit mx-auto items-center">
                <div onClick={() => {
                    if (id == 0) {
                        return
                    }
                    setDescricao(dados[id - 1].descricao);
                    setPreco(dados[id - 1].valor);
                    setNome(dados[id - 1].nome);
                    setSource(dados[id - 1].imagem);
                    setId(id - 1);
                }} className="bg-darkpurple rounded-full border-solid border-4 border-background -mr-5 z-10 p-2"> <ArrowLeft></ArrowLeft></div>
                <Card nome={nome} descricao={descricao} preco={preco} source={source}></Card>
                <div onClick={() => {
                    if(id == dados.length-1){
                        return;
                    }
                    setDescricao(dados[id + 1].descricao);
                    setPreco(dados[id + 1].valor);
                    setNome(dados[id + 1].nome);
                    setSource(dados[id + 1].imagem);
                    setId((id + 1));
                }} className="bg-darkpurple rounded-full border-solid border-4 border-background -ml-5 z-10 p-2"> <ArrowRight></ArrowRight></div>
            </div>
        </div>
    );
};
