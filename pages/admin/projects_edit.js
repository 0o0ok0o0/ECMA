import { getProject, updateProject } from "../../Api/config";
import { router, useEffect, useState } from "../../libs"
import projects from "./projects";

const projects_edit = ({data:{id}}) => {
    // const projectList = JSON.parse(localStorage.getItem('projects'))||[]
    // const currprojectList = projectList.find((project) => project.id === id)
    const [data, setdata] = useState([])
        // const projectList = JSON.parse(localStorage.getItem('projects')) || [];
        useEffect(() => {
        // fetch(`http://localhost:3000/projects/${id}`)
        // .then((res) => res.json())
        // .then((data) =>setdata(data))
        getProject(id).then(({data}) =>setdata(data))
      console.log(getProject());
      }, [])

// console.log({projectList:{id}});
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
    // const newProjectList = projectList.map((project)=>{
    //     return project.id == newProject.id? newProject:project
    // })

    // localStorage.setItem('projects', JSON.stringify(newProjectList))
    // router.navigate('admin/project')
    // fetch(`http://localhost:3000/projects/${id}`,{
    //         method:"PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newProject),
            
    //       }).then(()=>router.navigate('/admin/projects')) 
    updateProject(newProject).then(()=>router.navigate('/admin/projects')) 
    
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
  ${data.name}
  </td>
  </tr>
 
 
  </table>
  <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" value="${data.name}" placeholder="Name">
  <button class="bg-danger border-0 p-2 btn-add ">Update</button>
  </form>
  </div>
  `
 
}

export default projects_edit