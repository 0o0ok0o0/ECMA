import { getProject } from "../Api/projects";
import container from "../components/container";

import { router, useEffect, useState } from "../libs";

const projectDetail= ({data:{id}}) => {
  const [data, setproject]= useState([]);
  
  useEffect(()=>{
  
  getProject(id).then(({data})=>setproject(data))
  },[])
console.log(id);

// const project = projectList.filter(function(project){
//     return project.id == id
// })

// const filteredProducts = products.filter(product => product.category_id === categoryId){


    if(!data) {
    return router.navigate('/project')
    }
  return /*html*/ `
  ${container()}
  <h1> Chi tiết Project</h1>
  <div class="bg-white rounded-lg overflow-hidden shadow-md">
  <img src="${data.image}"  alt="Project Image" class="block object-cover  h-64">
  <div class="p-4">
    <h2 class="text-lg font-medium text-gray-800">${data.name}</h2>
    <p class="text-gray-500 text-sm mt-1">Date: <span class="font-medium">${data.date}</span></p>
    <p class="text-gray-700 mt-2">${data.text}</p>
    <a href="https://github.com/LongThanh2409/Du_An_1.git" class=" text-blue-500 mt-2 inline-block hover:underline">Link Git</a>
  </div>
</div>
  `
}

export default projectDetail