import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="container mx-auto flex justify-center">
            <ul className="flex gap-8 text-white">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/sobre-nos"><li>SOBRE NÓS</li></Link>
                <Link to="/produtos"><li>PRODUTOS</li></Link>
            </ul>
        </div>
    );
};
