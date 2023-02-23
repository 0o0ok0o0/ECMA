
import { getCategorys } from "../../Api/Categorys";
import { addProject } from "../../Api/projects";
import { useEffect, router, useState } from "../../libs";
import Header from "../../components/Admin/Header";
import Navbar from "../../components/Admin/Navbar";
import axios from "axios";
const projects_add = () => {
  const [data, setdata] = useState([])
 
  useEffect(() => {
    getCategorys().then(({ data }) => setdata(data))
  }, [])

  useEffect(() => {
    const form = document.querySelector('.form');
    const name = document.querySelector('.name');
    const image = document.querySelector('.image');
    const text = document.querySelector('.text');
    const categoryID = document.querySelector('.select');
   
    form.addEventListener('submit', async(e) => {
      e.preventDefault();
      const listImage = await uploadFilesImage(image.files);
      //   console.log(name.value); 
      const newProjects = {
        // id: projectList.length + 1,
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
       
        alert('Thêm project Thành Công')
        addProject(newProjects).then(() => router.navigate('/admin/projects'))
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
  <h1 class="text-4xl font-bold text-gray-800 mb-4">Thêm Mới Dự Án</h1>
  
  <div class="max-w-md mx-auto">
  <h1 class="text-2xl font-bold mb-4">Thêm mới</h1>
  <form class="form">
    <div class="mb-4">
      <label for="name" class="block font-medium text-gray-700 mb-2 ">Name:</label>
      <input type="text" id="name" name="name" placeholder="" class="w-full border-gray-400 border py-2 px-3 rounded-lg name">
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
        ${data.map((item) => `
    <option value="${item.id}">${item.name}</option>
    `
  ).join(' ')}
      </select>
    </div>

    <div class="text-center">
      <button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-add">Thêm Mới</button>
    </div>
  </form>
</div>
  </div>
  </div>
  </div>
  `
}

export default projects_add