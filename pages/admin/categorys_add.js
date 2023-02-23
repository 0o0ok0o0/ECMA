import { addCategory } from "../../Api/Categorys";
import Header from "../../components/Admin/Header"
import Navbar from "../../components/Admin/Navbar"
import { router, useEffect, useState } from "../../libs"
import axios from "axios";
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
        const image = document.querySelector('.image');
        form.addEventListener('submit', async(e) => {
            e.preventDefault();
            const listImage = await uploadFilesImage(image.files);
            //   console.log(name.value); 
            const newCategorys = {
                // id: projectList.length + 1,
                name: name.value,
                image_category: listImage,
                dateCategory:new Date().toLocaleString()
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
            if(listImage ==""){
                alert('Ảnh không được bỏ trống')
                
                return false
              }
            else{
                alert('Thêm Danh Mục Thành Công')
                addCategory(newCategorys).then(()=>router.navigate('/admin/categorys'))
            }
        
          
        })

      
        
    })
    const uploadFilesImage = async (files) => {
        if (files) {
          const CLOUD_NAME = "damrw5zmv";
          const PRESET_NAME = "Demo_upload";
          const FOLDER_NAME = "ECMA";
          const urls = [];
          const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
          const formData = new FormData(); // key và value
          formData.append("upload_preset", PRESET_NAME);
          formData.append("folder", FOLDER_NAME);
          for (const file of files) {
            formData.append("file", file);
            const response = await axios.post(api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            urls.push(response.data.secure_url);
            // console.log(urls);
          }
          return urls;
        }
      };
    return /*html*/ `
    <div class="flex flex-col h-screen">
  ${Header()}
  <div class="flex-1 flex flex-row">
  ${Navbar()}
  <div class="flex-1 bg-gray-100 p-4">
   <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" placeholder="Name">
  <input class="form-control form-control-sm image" type="file" placeholder="">
  <button class="bg-danger border-0 p-2 text-ligh bg-red-600 text-cyan-50">ADD</button>
   <a href="/admin/categorys" class=" text-decoration-none bg-primary border-0 p-2 px-4 text-cyan-50  bg-blue-700">Back</a> 
  </form>
  </div>
  </div>
  </div>
  </div>
  `
}

export default categorys_add