import { getProject, updateProject } from "../../Api/projects"
import { router, useEffect, useState } from "../../libs"
import Header from "../../components/Admin/Header"
import Navbar from "../../components/Admin/Navbar"
import { getCategorys } from "../../Api/Categorys"
import axios from "axios"
const projects_edit = ({data:{id}}) => {

  const [data, setproject] = useState([])
  const [dataCategorys, setCategorys] = useState([])
  // const projectList = JSON.parse(localStorage.getItem('categorys')) || [];
  useEffect(() => {
  // fetch(`http://localhost:3000/categorys/${id}`)
  // .then((res) => res.json())
  // .then((data) =>setdata(data))
  getProject(id).then(({data}) =>setproject(data))
// console.log(getProject());
}, [])
useEffect(() => {
  // fetch(`http://localhost:3000/categorys/${id}`)
  // .then((res) => res.json())
  // .then((data) =>setdata(data))
  getCategorys().then(({data}) =>setCategorys(data))
// console.log(getProject());
}, [])


// console.log({projectList:{id}});
useEffect(()=>{
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const image = document.querySelector('.image');
const text = document.querySelector('.text');
const categoryID = document.querySelector('.select');
console.log(name);
form.addEventListener('submit', async(e)=>{
  e.preventDefault();
  const listImage = await uploadFilesImage(image.files);
const newProject ={
id: id,
name: name.value,
image: listImage,
text: text.value,
categoryID: categoryID.value,
date:new Date().toLocaleString()
}
if (name.value == "") {

  alert('Name không được bỏ trống')
  name.focus();
  return false
}
if (text.value == "") {

  alert('Mô tả không được bỏ trống')
  text.focus();
  return false
}
if (categoryID.value == "") {

  alert('Danh mục không được bỏ trống')
  categoryID.focus();
  return false
}
if(listImage ==""){
  alert('Ảnh không được bỏ trống')
  
  return false
}
else {
  alert('Sửa Project Thành Công')
  updateProject(newProject).then(()=>router.navigate('/admin/projects')) 
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
  <h1 class="text-4xl font-bold text-gray-800 mb-4">Sửa Đổi Dự Án</h1>
  <table class="table table-bordered">
 
  <tr>
  <td>ID</td>
  <td>Name </td>
  <td>Images</td>
  
  <td>Describe</td>
  <td>Categorys</td>
  </tr>
  <tr>
  <td> ${id}</td>
  <td>
  ${data.name}
  </td>
  <td><img class="w-36" src="${data.image}"></td>
  <td>${data.text}</td>
  <td>${dataCategorys.map((cate)=>
    cate.id == data.categoryID ?`<span>${cate.name}</span> `:""
    ).join(" ")}</td>
  </tr>
 
 
  </table>




  <div class="max-w-md mx-auto">
  
  <form class="form">
    <div class="mb-4">
      <label for="name" class="block font-medium text-gray-700 mb-2 ">Name:</label>
      <input type="text" id="name" name="name" placeholder="${data.name}" class="w-full border-gray-400 border py-2 px-3 rounded-lg name">
    </div>

    <div class="mb-4">
      <label for="image" class="block font-medium text-gray-700 mb-2">Image:</label>
      <input type="file" id="image" name="image" class="w-full border-gray-400 border py-2 px-3 rounded-lg image">
    </div>

    <div class="mb-4">
      <label for="text" class="block font-medium text-gray-700 mb-2">Text:</label>
      <textarea id="text" name="text" class="w-full border-gray-400 border py-2 px-3 rounded-lg text"></textarea>
    </div>

    <div class="mb-4">
      <label for="select" class="block font-medium text-gray-700 mb-2">Select:</label>
      <select id="select" name="select" class="w-full border-gray-400 border py-2 px-3 rounded-lg select">
        <option value="">-- Chọn một mục --</option>
        ${dataCategorys.map((item)=>`
    <option value="${item.id}">${item.name}</option>
    `
  ).join(' ')}
      </select>
    </div>

    <div class="text-center">
      <button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-add">Update</button>
    </div>
  </form>
</div>


  
  </div>
  </div>
  </div>
  `
}

export default projects_edit