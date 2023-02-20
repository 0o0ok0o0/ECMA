import { menuList } from "../data/data";
import Navbar from "./Navbar";
const Header = () => {
    return /*html*/ `
        <header class="flex h-44 justify-center ">

        <div class="logos max-h-44 w-3/12 place-self-center">
        <div class="w-44 m-auto ">
        <img class="w-full  rounded-full" src="./Images/taoanhdep_avatar_logo_90796.jpg" >
        </div>
        </div>
       <div class="max-h-44 flex flex-col justify-center items-center bg-red-200 rounded-lg  w-9/12" >
      
      <nav class="flex space-x-1    "> 
      ${Navbar()}
      </nav>
      
     </div>
    
        </header>
    `
}

export default Header;