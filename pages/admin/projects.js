
import { getCategorys } from '../../Api/Categorys'
import { deleteProject, getProjects } from '../../Api/projects'
import Header from '../../components/Admin/Header'
import Navbar from '../../components/Admin/Navbar'
import { useEffect, useState } from '../../libs'

const projects = () => {
    const [data, setdata]= useState([])
    const [category, setcategory]= useState([])
    useEffect(()=>{
    getProjects().then(({data}) => setdata(data))

    }, [])
    useEffect(()=>{
  
      getCategorys().then(({data}) => setcategory(data))
      }, [])
      
useEffect(()=>{
const btns = document.querySelectorAll('.btn-remove');
for (const btn of btns) {
  btn.addEventListener('click',()=>{
   const id = btn.dataset.id;
  //  const newProject = data.filter((projects)=> projects.id !== id);
  //  deleteProject(id)
  //  setdata(newProject)
  
  const comfrim = "Bạn có chắc là muốn xóa";
  if (confirm(comfrim)) {
    const newProject = data.filter((projects) => projects.id!= id)
    // localStorage.setItem('projects', JSON.stringify(newProject))
    setdata(newProject);
  }
  deleteProject(id);
   
   
  })
}
})
  return /*html*/ `
  
  <div class="flex flex-col h-screen">
  ${Header()}
  <div class="flex-1 flex flex-row">
  ${Navbar()}
  <div class="flex-1 bg-gray-100 p-4">
  <h1 class="text-4xl font-bold text-gray-800 mb-4">Quản Lý Dự Án</h1>
  <table class="table border my-5 " >
  <thead>
    <tr class="text-center">
      <th id="th_id">ID</th>
      <th >Name</th>
      <th >Image</th>
      <th >Category</th>
      <th >Describe</th>
      <th >Date</th>
      <th  >Action <a class="text-decoration-none"  href="/admin/projects_add">Thêm </a></th>
    </tr>
  </thead>
  <tbody>
${data.map((projects, index) => `<tr>
<th >${index + 1}</th>
<td>${projects.name}</td>
<td><img class="w-36 m-auto" src="${projects.image}" ></td>


<td>${category.map((cate)=>
cate.id == projects.categoryID ?`<span>${cate.name}</span> `:""
).join(" ")}</td>
<td class="w-80">${projects.text} </td>
<td>${projects.date} </td>
<td> <button data-name="${projects.name}" data-id="${projects.id}" class="bg-danger btn-remove border-0 p-2 rounded-md"> Remove</button>
<a href="/admin/projects_edit/${projects.id}"> <button data-name="${projects.name}"  class="bg-success btn-update border-0 p-2 text-lime-50 rounded-md "> Update</button></a>
</td>
</tr>`).join(' ')}


    
   
  </tbody>
</table>
</div>
</div>
</div>
  `
}

export default projects