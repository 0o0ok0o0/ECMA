
import { menuList } from "../data/data";
const Navbar = () => {
    return `
    ${menuList.map((menu)=>{
        console.log(menu);
    return `<a class="px-2 p-2 text-decoration-none bg-rose-600 text-light"   href = "${menu.path}" >${menu.name}<a>  `
    }).join("")}
    `
}
export default Navbar

{/* <a href='/'>Home</a>
<a href='/contact'>Contact</a>
<a href='/test'>Test</a>
<a href='/trangchu'>Trang chủ</a>
<a href='/project'>Projects</a> */}