import { menuList } from "../data/data";
import Navbar from "./Navbar";
const Header = () => {
    return `
        <header class="text-center mt-4">
            <nav>
               ${Navbar()}
            </nav>
        </header>
    `
}

export default Header;