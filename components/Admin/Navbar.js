
import { menuListAdmin } from "../../data/dataAdmin/data"
const Navbar = () => {
  return /*html*/` 

  <div class="bg-indigo-800 text-white flex-shrink-0 h-full w-64">
  <div class="p-4">
  <h2 class="text-lg font-bold mb-4">Main Menu</h2>
  <ul class="text-sm">


  
  ${menuListAdmin.map((menu)=>{
        
    return /*html*/`
    <li class="py-2 border-b border-white">
				 
				  <ul class="pl-2">
					<li class="py-2">
					  <a  href="${menu.path}" class="text-decoration-none text-light block hover:text-blue-500">${menu.name}</a>
					</li>
					
				  </ul>
				</li>
    `
    }).join("")}
    </ul>
    </div>
    </div>
  `
}

export default Navbar