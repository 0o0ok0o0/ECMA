import { getCategory, updateCategory } from "../../Api/Categorys";
import Header from "../../components/Admin/Header"
import Navbar from "../../components/Admin/Navbar"
import { router, useEffect, useState } from "../../libs"

import axios from "axios";
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
    const image = document.querySelector('.image');
    console.log(name);
    form.addEventListener('submit',async (e)=>{
        e.preventDefault();
        const listImage = await uploadFilesImage(image.files);
    const newCategory ={
   id: id,
    name: name.value,
    image_category: listImage,
    dateCategory:new Date().toLocaleString()
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
    if(name.value==""){

      alert('Name không được bỏ trống')
      name.focus();
      }
      if(listImage ==""){
          alert('Ảnh không được bỏ trống')
          
          return false
        }
        else{
          alert('Sửa Danh Mục Thành Công')
          updateCategory(newCategory).then(()=>router.navigate('/admin/categorys')) 
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
  <h1 class="text-4xl font-bold text-gray-800 mb-4">Chỉnh Sửa Danh Mục</h1>
  <table class="table table-bordered">
 
  <tr>
  <td>ID</td>
  <td>Name </td>
  <td>Iamge </td>
  </tr>
  <tr>
  <td> ${id}</td>
  <td>
  ${data.name}
  </td>
  <td>
  <img class="w-20" src="${data.image_category}" >
  </td>
  </tr>
 
 
  </table>
  <div class="project-add">
  <form class="form">
 
  <input class="form-control form-control-sm name" type="text" value="${data.name}" placeholder="Name">
  <input class="form-control form-control-sm image" type="file" value="" placeholder="">
  <button class="bg-danger border-0 p-2 btn-add ">Update</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  `
 
}

export default categorys_edit