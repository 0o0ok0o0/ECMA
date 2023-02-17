import { deleteProject, getProjects } from "../../Api/config"
import { useState, useEffect } from "../../libs"
import Header from "../../components/Header"

const projects = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem('projects'))
    // setdata(projects)
  //   fetch('http://localhost:3000/projects')
  //   .then((res) => res.json())
  //   .then((data) =>setdata(data))
  // }, [])
  getProjects().then(({data}) =>setdata(data))
  console.log(getProjects);
}, [])
 
  useEffect(() => {
    const btns = document.querySelectorAll('.btn-remove')
    const btns_update = document.querySelectorAll('.btn-update')
    // const btns_update = document.querySelectorAll('.btn-update')
    console.log(btns);
    for (let btn of btns) {
      const id = btn.dataset.id
      const name = btn.dataset.name
      console.log(name);
      btn.addEventListener('click', () => {
       
        const comfrim = "Bạn có chắc là muốn xóa";
        if (confirm(comfrim)) {
          const newProject = data.filter((projects) => projects.id!= id)
          // localStorage.setItem('projects', JSON.stringify(newProject))
          setdata(newProject);
        }

        //  fetch(`http://localhost:3000/projects/${id}`,{
        //           method:"DELETE"
        //         })
        //         .then(()=> alert("Project deleted"))
        deleteProject(id);
      })
      
    }
    console.log();
    setInterval(()=>{
      document.querySelector("#th_id").classList.toggle('redss')
      for ( const btn_remove of btns ) {
        btn_remove.classList.toggle('fff')
      
      }
      for ( const btn_update of btns_update ) {
        btn_update.classList.toggle('fff')
      
      }
      
    },700)
    

  })
  return `
  ${Header()}
  <table class="table table-bordered text-center my-5" >
  <thead>
    <tr>
      <th id="th_id">ID</th>
      <th >Name</th>
     
      <th  >Action <a class="text-decoration-none"  href="/admin/project_add">Thêm </a></th>
    </tr>
  </thead>
  <tbody>
${data.map((projects, index) => `<tr>
<th >${index + 1}</th>
<td>${projects.name}</td>

<td> <button data-name="${projects.name}" data-id="${projects.id}" class="bg-danger btn-remove border-0 p-2"> Remove</button>
<a href="/admin/project_edit/${projects.id}"> <button data-name="${projects.name}"  class="bg-success btn-update border-0 p-2 "> Update</button></a>
</td>
</tr>`).join(' ')}


    
   
  </tbody>
</table>
  
  `
}

export default projects