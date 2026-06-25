import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="text-white container flex justify-center items-center flex-col lg:flex-row mx-auto px-6 mt-20">
            <div className="">
                <div className="text-3xl">POÇÕES E</div>
                <div className="text-5xl font-luxurious text-highlight">SOLUÇÕES</div>
                <p className="mt-12 max-w-3xl">
                    Precisando de uma poção para mudar suas necessidades? Nós da Poções e Soluções
                    podemos te ajudar! Venha conhecer mais sobre a gente clicando no botão abaixo. Não
                    perca a oportunidade de conhecer mais sobre nossa história!
                </p>
                <Link to="/sobre-no"><div className="mt-6 mx-auto font-bold transition duration-200 hover:bg-lightpurple border-solid w-fit px-3 py-1 border-2 rounded border-lightpurple" >SOBRE NÓS</div></Link>
            </div>
            <div className="flex items-center justify-center mt-20 md:ml-8 lg:ml-40">
                <div className="grid grid-cols-2 w-fit gap-[1px] bg-amber-300">
                    <div className="bg-background p-6 flex flex-col items-center justify-center">
                        <p className="font-bold text-3xl">+5000</p>
                        <p className="text-center">CLIENTES SATISFEITOS</p>
                    </div>
                    <div className="bg-background p-6 flex flex-col items-center justify-center">
                        <p className="font-bold text-3xl">+10</p>
                        <p className="text-center">POÇOES IMPORTADAS</p>
                    </div>
                    <div className="bg-background p-6 flex flex-col items-center justify-center">
                        <p className="font-bold text-3xl">+150 ANOS</p>
                        <p className="text-center">NO MERCADO</p>
                    </div>
                    <div className="bg-background p-6 flex flex-col items-center justify-center">
                        <p className="font-bold text-2xl text-center ">ALTA QUALIDADE</p>
                        <p className="text-center">EM TODAS AS POÇÕES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
