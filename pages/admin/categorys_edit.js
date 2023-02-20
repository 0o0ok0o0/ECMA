import { getCategory, updateCategory } from "../../Api/Categorys";

import { router, useEffect, useState } from "../../libs"
import categorys from "./categorys";

const categorys_edit = ({data:{id}}) => {
    // const projectList = JSON.parse(localStorage.getItem('categorys'))||[]
    // const currprojectList = projectList.find((project) => project.id === id)
    const [data, setdata] = useState([])
        // const projectList = JSON.parse(localStorage.getItem('categorys')) || [];
        useEffect(() => {
        // fetch(`http://localhost:3000/categorys/${id}`)
        // .then((res) => res.json())
        // .then((data) =>setdata(data))
        getCategory(id).then(({data}) =>setdata(data))
      // console.log(getProject());
      }, [])

// console.log({projectList:{id}});
    useEffect(()=>{
    const form = document.querySelector('.form');
    const name = document.querySelector('.name');
    console.log(name);
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
     
    const newCategory ={
   id: id,
    name: name.value
    }
    // const newcategorysList = newProject.map((project)=> project.id == id)
    // const newProjectList = projectList.map((project)=>{
    //     return project.id == newProject.id? newProject:project
    // })

    // localStorage.setItem('categorys', JSON.stringify(newProjectList))
    // router.navigate('admin/project')
    // fetch(`http://localhost:3000/categorys/${id}`,{
    //         method:"PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newProject),
            
    //       }).then(()=>router.navigate('/admin/categorys')) 
    updateCategory(newCategory).then(()=>router.navigate('/admin/categorys')) 
    
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

export default categorys_edit