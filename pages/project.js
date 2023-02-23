import { getCategorys } from "../Api/Categorys";
import { getProjects, ProjectsCategory } from "../Api/projects";
import container from "../components/container";
import Footer from "../components/Footer";

import { useEffect, useState } from "../libs";

const ProjectPage = () => {
  // console.log(projectList.map(item => `<p>Project Id: ${item.id}</p>`).join(""));
  const [project, setproject] = useState([])
  const [category, setcategory] = useState([])

  useEffect(() => {
    getCategorys().then(({ data }) => setcategory(data))

  }, [])
  useEffect(() => {
    getProjects().then(({ data }) => setproject(data))

  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-project')
    for (const btn of btns) {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        console.log(id);
        btns.forEach(btn => {
          btn.classList.remove('active')
        })

        btn.classList.add('active')
        ProjectsCategory(id).then(({ data }) => setproject(data)
        )


      })
    }


  })
  return /*html*/`

    ${container()}
    <div > 
        <h1>Categorys-Projects</h1>
  <div class="sort">
        ${category
      .map(
        (category) =>
                /*html*/ `<button type="button" data-id = "${category.id}" class=" btn-project text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >${category.name}</button>`
      )
      .join(" ")}
    </div>
            </div>

            <div class="container mx-auto py-8">
   
            <div class ="flex flex-wrap mt-6 transition delay-700	duration-500		">
            ${project
      .map(
        (item) => /*html*/ `
               
                <div class="flex-wrap mt-10 mr-7 shadow-boxShadowNew ">
                <a class="relative block text-decoration-none  bg-gray-900 group w-72  p-4" href="/projects/${item.id}">
                <div class="w-52">
                  <img
                    class="absolute inset-0 object-cover py-14 w-full h-full group-hover:opacity-50 "
                    src="${item.image}">
                  </div>
                  <div class="relative ">
                    <div class="mt-40">
                      <div
                        class="transition-all duration-1000 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        <div class="p-2 text-center">
                          <p class="text-xl text-yellow-500 font-bold italic">${item.name}</p>
                          <button class=" py-2 text-sm text-white ">
                            ${item.text}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            
              
                `
      )
      .join(" ")}
          </div>
          </div>
          ${Footer()}
    `;

}

export default ProjectPage;