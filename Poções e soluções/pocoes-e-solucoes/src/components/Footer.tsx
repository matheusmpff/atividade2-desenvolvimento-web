import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="text-white bg-footerBg px-4 md:px-0  mt-8 border-solid border-t-2 border-darkpurple">
        <div className="flex justify-center mt-6 gap-12 border-b-1 py-2">
            <div>
                <div className="mb-1 font-bold text-lg">Endereço</div>
                <p className=" text-sm opacity-80">Beco da Última Saída</p>
            </div>
            <div >
                <div className="mb-1 font-bold text-lg">Formas de Contato</div>
                <p className=" text-sm opacity-80">(21) 99999-9999</p>
                <p className="text-sm opacity-80">poçõesoluções@gmail.com</p>
            </div>
            <div >
                <div className="mb-1 font-bold text-lg">Empresa</div>
                <ul className="text-sm gap-8 text-white opacity-80">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/sobre-nos"><li>SOBRE NÓS</li></Link>
                <Link to="/produtos"><li>PRODUTOS</li></Link>
            </ul>
            </div>
        </div>
        <div className="flex justify-center items-center py-3">Copyright © 2026 Poções e Soluções Inc. Todos os Direitos Reservados.</div>
    </footer>
    );
};
