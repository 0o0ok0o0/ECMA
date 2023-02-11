
import { useState, useEffect } from "../../libs"
const projects = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects'))
    setdata(projects)
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
       
     
        const newProject = data.filter((projects) => projects.id != id)
        // localStorage.setItem('projects', JSON.stringify(newProject))
        setdata(newProject)

      })
    }
    

  })
  return `
   
  <table class="table table-bordered text-center my-5" >
  <thead>
    <tr>
      <th >ID</th>
      <th >Name</th>
     
      <th >Action <a href="/admin/project_add">Thêm </a></th>
    </tr>
  </thead>
  <tbody>
${data.map((project, index) => `<tr>
<th >${index + 1}</th>
<td>${project.name}</td>

<td> <button data-name="${project.name}" data-id="${project.id}" class="bg-danger btn-remove border-0 p-2"> Remove</button>
<a href="/admin/project_edit/${project.id}"> <button data-name="${project.name}"  class="bg-success btn-update border-0 p-2"> Update</button></a>
</td>
</tr>`).join(' ')}


    
   
  </tbody>
</table>
  
  `
}

export default projects