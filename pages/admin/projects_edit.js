import { router, useEffect, useState } from "../../libs"
import projects from "./projects";

const projects_edit = ({data:{id}}) => {
    const projectList = JSON.parse(localStorage.getItem('projects'))||[]
    // const currprojectList = projectList.find((project) => project.id === id)

console.log({projectList:{id}});
    useEffect(()=>{
    const form = document.querySelector('.form');
    const name = document.querySelector('.name');
    console.log(name);
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
     
    const newProject ={
   id: id,
    name: name.value
    }
    // const newProjectsList = newProject.map((project)=> project.id == id)
    const newProjectList = projectList.map((project)=>{
        return project.id == newProject.id? newProject:project
    })
    localStorage.setItem('projects', JSON.stringify(newProjectList))
    router.navigate('admin/project')
    })
     })

    return `
  <table class="table table-bordered">
 
  <tr>
  <td>ID</td>
  <td>Name </td>
  
  </tr>
  <tr>
  <td> ${id}</td>
  <td>
  </td>
  </tr>
 
 
  </table>
  <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" placeholder="Name">
  <button class="bg-danger border-0 p-2 btn-add ">ADD</button>
  </form>
  </div>
  `
}

export default projects_edit