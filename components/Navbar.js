
import { menuList } from "../data/data";
const Navbar = () => {
    return `
    ${menuList.map((menu)=>{
        
    return ` <div class="  mb-1 text-xl font-bold duration-300 hover:scale-105 hover:border-b-4  "><a class="rounded-lg my-auto p-2 px-3 mx-1 text-decoration-none bg-rose-600 text-light"   href = "${menu.path}" >${menu.name}<a> </div> `
    }).join("")}
    `
}
export default Navbar

{/* <a href='/'>Home</a>
<a href='/contact'>Contact</a>
<a href='/test'>Test</a>
<a href='/trangchu'>Trang chủ</a>
<a href='/project'>Projects</a> */}