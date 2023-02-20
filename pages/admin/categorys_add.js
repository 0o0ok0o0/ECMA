import { addCategory } from "../../Api/Categorys";

import { router, useEffect, useState } from "../../libs"

const categorys_add = () => {
//     const [data, setdata] = useState([])
//     // const projectList = JSON.parse(localStorage.getItem('categorys')) || [];
//     useEffect(() => {
//     fetch('http://localhost:3000/categorys')
//     .then((res) => res.json())
//     .then((data) =>setdata(data))
//   }, [])
    useEffect(() => {
        const form = document.querySelector('.form');
        const name = document.querySelector('.name');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            //   console.log(name.value); 
            const newCategorys = {
                // id: projectList.length + 1,
                name: name.value
            }
         
            // projectList.push(newProject);
            // localStorage.setItem('categorys', JSON.stringify(projectList));
        //     fetch("http://localhost:3000/categorys",{
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newProject),
            
        //   }).then(()=>router.navigate('/admin/categorys')) 
        if(name.value==""){

            alert('Name không được bỏ trống')
            name.focus();
            }
            else{
                addCategory(newCategorys).then(()=>router.navigate('/admin/categorys'))
            }
        
          
        })

      
        
    })
    return `
   <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" placeholder="Name">
  <button class="bg-danger border-0 p-2 text-ligh bg-red-600 text-cyan-50">ADD</button>
   <a href="/admin/categorys" class=" text-decoration-none bg-primary border-0 p-2 px-4 text-cyan-50  bg-blue-700">Back</a> 
  </form>
  </div>
  `
}

export default categorys_add