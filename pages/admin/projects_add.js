import { router, useEffect, useState } from "../../libs"

const projects_add = () => {
    const projectList = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        const form = document.querySelector('.form');
        const name = document.querySelector('.name');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            //   console.log(name.value); 
            const newProject = {
                id: projectList.length + 1,
                name: name.value
            }
            projectList.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projectList));
            router.navigate('/admin/project')
        })
        
    })
    return `
   <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" placeholder="Name">
  <button class="bg-danger border-0 p-2 btn-add">ADD</button>
  </form>
  </div>
  `
}

export default projects_add