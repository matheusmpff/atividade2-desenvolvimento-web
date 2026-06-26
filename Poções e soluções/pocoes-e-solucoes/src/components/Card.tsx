export default function Card(props:{
    source: string
    descricao: string
    nome: string
    preco: number
}) {
    return (
        <div className="flex justify-between items-center flex-col bg-lightpurple rounded min-h-90 w-90  p-6 mx-auto">
            <img className="w-32 " src= {`http://localhost:3000/${props.source}`} alt="imagem do produto atual" />
            <p className="mt-2 mx-auto font-bold text-highlight">{props.nome}</p>
            <p className="mt-3" >{props.descricao}</p>
            <div className="mt-4 flex gap-8">
                <div className="w-fit p-2 border-1 border-solid border-highlight bg-highlight rounded">{props.preco} moedas</div>
                <button className="cursor-pointer border-1 border-solid border-darkpurple hover:border-background font-bold bg-darkpurple p-2 rounded">COMPRAR</button>
            </div>
        </div>
    );
};
