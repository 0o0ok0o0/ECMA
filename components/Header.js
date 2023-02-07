import { menuList } from "../data/data";
import Navbar from "./Navbar";
const Header = () => {
    return `
        <header>
            <nav>
               ${Navbar()}
            </nav>
        </header>
    `
}

export default Header;