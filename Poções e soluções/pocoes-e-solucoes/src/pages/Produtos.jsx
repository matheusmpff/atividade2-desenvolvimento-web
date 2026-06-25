import Card from "../components/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Produtos() {
    const [id,setId] = useState(0);
    const [descricao,setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [source, setSource] = useState("");

    
    return (
        <div className="container mx-auto text-white ">
            <div className="flex justify-center mb-20">
                <div onClick={()=>{alert(id)}} className="text-3xl mr-2">NOSSOS</div>
                <div className="text-3xl text-highlight font-luxurious">PRODUTOS</div>
            </div>
            <div className="flex w-fit mx-auto items-center"> 
                <div onClick={()=>{
                    if(id == 0){
                        return
                    }
                    setId(id-1)
                }} className="bg-darkpurple rounded-full border-solid border-4 border-background -mr-5 z-10 p-2"> <ArrowLeft></ArrowLeft></div>
               <Card descricao={descricao} preco={preco} source={source}></Card>
               <div onClick={()=>{
                    setId((id+1)%5)
               }} className="bg-darkpurple rounded-full border-solid border-4 border-background -ml-5 z-10 p-2"> <ArrowRight></ArrowRight></div>
            </div>
        </div>
    );
};
