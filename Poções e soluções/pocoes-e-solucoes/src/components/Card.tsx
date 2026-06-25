export default function Card(props:{
    source: string
    descricao: string
    preco: string
}) {
    return (
        <div className="flex justify-between items-center flex-col bg-lightpurple rounded min-h-80 p-6 w-fit mx-auto">
            <img src={props.source} alt="imagem do produto atual" />
            <p >{props.descricao}</p>
            <div className=" flex gap-8">
                <div className="w-fit p-2 bg-amber-400 rounded">R$ {props.preco}</div>
                <button className="bg-darkpurple p-2 rounded">COMPRAR</button>
            </div>
        </div>
    );
};
