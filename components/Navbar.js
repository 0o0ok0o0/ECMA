
import { menuList } from "../data/data";
const Navbar = () => {
    return /*html*/`
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">MENU</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
      ${menuList.map((item)=>{
    
  return /*html*/ `
        <a href="${item.path}"
          class="text-2xl text-decoration-none text-light block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          ${item.name}
        </a>`
        })}
      </div>
      <div>
        <a href="#" 
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><img src=""></a>
      </div>
    </div>
  </nav>
    `
}
export default Navbar

{/* <a href='/'>Home</a>
<a href='/contact'>Contact</a>
<a href='/test'>Test</a>
<a href='/trangchu'>Trang chủ</a>
<a href='/project'>Projects</a> */}