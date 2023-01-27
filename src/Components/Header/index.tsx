import "@fontsource/poppins";
import "./index.css";
import { scrollToPres } from "../../Pages/Index";

function Header() {
    return (
        <header className="header">
            <a className="headerItems">Início</a>
            <a className="headerItems" onClick={()=> scrollToPres(1700)}>Projetos</a>
            <a className="headerItems" onClick={()=> scrollToPres(2500)}>Contato</a>
        </header>
    )
}

export default Header
