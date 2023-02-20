import { deleteProject, getProjects } from "../../Api/projects"
import { useState, useEffect } from "../../libs"
import Header from "../../components/Header"
import container from "../../components/container"
import { deleteCategory, getCategorys } from "../../Api/Categorys"

const categorys = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem('projects'))
    // setdata(projects)
  //   fetch('http://localhost:3000/projects')
  //   .then((res) => res.json())
  //   .then((data) =>setdata(data))
  // }, [])
  getCategorys().then(({data}) =>setdata(data))
 
}, [])
 
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-remove')
   
    // const btns_update = document.querySelectorAll('.btn-update')
    console.log(btns);
    for (let btn of btns) {
      const id = btn.dataset.id
      const name = btn.dataset.name
      console.log(name);
      btn.addEventListener('click', () => {
       
        const comfrim = "Bạn có chắc là muốn xóa";
        if (confirm(comfrim)) {
          const newProject = data.filter((categorys) => categorys.id!= id)
          // localStorage.setItem('projects', JSON.stringify(newProject))
          setdata(newProject);
        }

        //  fetch(`http://localhost:3000/projects/${id}`,{
        //           method:"DELETE"
        //         })
        //         .then(()=> alert("Project deleted"))
        deleteCategory(id);
      })
      
    }

    

  })
  return `
  
  ${container()}
  <table class="table border  text-center my-5" >
  <thead>
    <tr>
      <th id="th_id">ID</th>
      <th >Name</th>
     
      <th  >Action <a class="text-decoration-none"  href="/admin/category_add">Thêm </a></th>
    </tr>
  </thead>
  <tbody>
${data.map((categorys, index) => `<tr>
<th >${index + 1}</th>
<td>${categorys.name}</td>

<td> <button data-name="${categorys.name}" data-id="${categorys.id}" class="bg-danger btn-remove border-0 p-2"> Remove</button>
<a href="/admin/categorys_edit/${categorys.id}"> <button data-name="${categorys.name}"  class="bg-success btn-update border-0 p-2 "> Update</button></a>
</td>
</tr>`).join(' ')}


    
   
  </tbody>
</table>
  
  `
}

export default categorys