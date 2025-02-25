
import { getProjects } from "../Api/projects";
import container from "../components/container";
import Footer from "../components/Footer";
import { useEffect, useState } from "../libs";


const HomePage = () => {

  const [projects, setproject] = useState([]);
  

useEffect(()=>{
getProjects().then(({data})=> { 
  const limitedProjects = data.slice(0, 3)
  setproject(limitedProjects)

})

},[])

   
  return /*html*/`
      ${container()}
      <h1 class="text-center">About </h1>
 <div class="w-10/12 m-auto">
      <div class="pt-3 pb-20"> 
      <div class="p-1 bg-gradient-to-r from-[#00cc99] via-[#00cc99] to-[#6600ff] " style="opacity: 1; transform: none;">
        <div class="p-7 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-dark-200">
        <div class="flex border-8 border-gray-200 dark:border-white">

        <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">

        <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">

        <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27350%27/%3e">
        </span>
        <img alt="" src="../Images/Avatar.jpg &amp;w=750&amp;q=75" decoding="async" data-nimg="intrinsic" class="object-cover" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="../Images/Avatar.jpg ">
        </span>
        </div>
        <div class="flex-1 ">
        <div class="pb-4 border-b border-gray-500">
        <h2 class="text-3xl font-bold my-3">Một chút về tôi</h2>
        <p>Hiện tại, mình đang là sinh viên kì 5 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...</p>

        <p class="pt-2">Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.</p>
        </div>

        <div class="py-3">
        <h1 class="text-xl font-bold capitalize my-4">Thông tin cơ bản</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2">

        <li><span class="w-[110px] inline-block">Học vấn<!-- -->:</span>
        <span>FPT Polytechnic</span></li>
        <li><span class="w-[110px] inline-block">Điện thoại<!-- -->:</span>
        <span>0367767248</span></li>
        <li><span class="w-[110px] inline-block">Email<!-- -->:</span>
        <span>longka14pro@gmail.com</span>
        </li>
        <li><span class="w-[110px] inline-block">Địa chỉ<!-- -->:
        </span>
        <span>Chương Mỹ - Hà Nội</span>
        </li>
        <li><span class="w-[110px] inline-block">Website<!-- -->:</span>
        <span> <a class="text-decoration-none" href="https://github.com/LongThanh2409/Du_An_1.git"> Github.com/LongThanh2409 </a></span>
        </li><li><span class="w-[110px] inline-block">Nghề nghiệp<!-- -->:</span>
        <span>Web developer</span>
        </li></ul>
        </div>
        </div>
        </div>
        </div>
        </div>
       
        </div>
        <h1 class="text-center"> Projects </h1>
    <div class="flex flex-wrap justify-center py-12">
        
        ${projects.map((project)=>{
      return/*html*/ `
   
        <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
          <div class="bg-white rounded shadow-lg hover:shadow-xl">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-700 font-bold text-lg">${project.name}</span>
                <span class="text-orange-500 font-bold">${project.date}</span>
              </div>
              <p class="text-gray-700 mt-4">${project.text}</p>
             <a href="https://github.com/LongThanh2409/Du_An_1.git"> <img src="${project.image}" alt="${project.name}" class="hover:opacity-90 cursor-pointer w-full mt-4"> </a>
              <button
                class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mt-4 transition-colors duration-300 ease-in-out">Chi Tiết</button>
            
            </div>
          </div>
        </div>`
          }).join(' ')}
      </div>

      ${Footer()}
       `;
}

export default HomePage;