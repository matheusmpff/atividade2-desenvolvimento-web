import frenteLoja from "../assets/frenteLoja.png";
export default function Sobre_nos() {
    return (<div className="text-white container flex justify-center items-center flex-col lg:flex-row mx-auto px-6 mt-20">
        <div className="">
            <div className="text-3xl">NOSSA</div>
            <div className="text-5xl font-luxurious text-highlight">HISTÓRIA</div>
            <p className="mt-12 max-w-3xl">
                Poções e Soluções é uma empresa de comércio focado no nicho de produtos mágicos,
                mais especificamente, poções e soluções mágicas. Estamaos nessa aventura desde 1870,
                o que nos torna uma das empresas mais consolidadas e focadas no nicho de poções.
            </p>
            <p className="mt-8 max-w-3xl">
                Nosso principal objetivo, desde o primeiro dia que a empresa foi criada, é tornar acessível
                da melhor forma possível, os mais variados tipos de produtos mágicos, os quais são tão
                importantes para nosso dia-a-dia.

            </p>
            <p className="mt-8 max-w-3xl">
                Por isso temos como dever derrubar qualquer barreira  que impessa esse objetivo, de forma
                que  nem mesmo  a distância ou ou falta de instrumentos mágicos seja um problema para
                adquirir nossos produtos
            </p>
        </div>
        <div className="flex items-center justify-center mt-20 md:ml-8 lg:ml-40">
            <img src={frenteLoja} className="w-180" alt="" />
        </div>
    </div>)
};
