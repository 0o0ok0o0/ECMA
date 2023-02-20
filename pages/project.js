import { CategorysDetail, getCategory, getCategorys } from "../Api/Categorys";
import { ProjectsCategory } from "../Api/projects";
import container from "../components/container";
import ProjectList from "../components/ProjectList";
import { projectList } from "../data/data";
import { useEffect, useState } from "../libs";

const ProjectPage = ()=>{
    // console.log(projectList.map(item => `<p>Project Id: ${item.id}</p>`).join(""));
    const [project, setproject] = useState([])
    const [category, setcategory]= useState([])

    useEffect(()=>{
    getCategorys().then(({data}) => setcategory(data))
   
    } ,[])

    useEffect(()=>{
  const btns = document.querySelectorAll('.btn-project')
  for (const btn of btns) {
    btn.addEventListener('click',()=>{
    const id = btn.dataset.id;
    console.log(id);
    
   ProjectsCategory(id).then(({data}) => setproject(data)
   )
    
    
    })
  }


    })
    return /*html*/`

    ${container()}
    <div class=""> 
        <h1>Project Page</h1>
  
        ${category
            .map(
              (category) =>
                /*html*/ `<button type="button" data-id = "${category.id}" class=" btn-project text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >${category.name}</button>`
            )
            .join(" ")}
            </div>

            <div class ="flex flex-wrap mt-6 transition delay-700	duration-500		">
            ${project
              .map(
                (item) => /*html*/ `
                
                <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
                <div class="flex flex-col min-h-full">
                  <div class="px-6 py-4 border-b">
                    <div class="text-xl text-center">${item.name} </div>
                  </div>
                  <div class="px-6 py-10 flex-grow">
                  
                   
                    <p class="text-gray-700 text-base">
                      ${item.describe}
          
                    </p>
                  </div>
                 
                </div>
              </div>
              
                `
              )
              .join(" ")}
          </div>
    `;
    
}

export default ProjectPage;