import { getProject } from "../Api/projects";
import container from "../components/container";
import { projectList } from "../data/data"
import { router, useEffect, useState } from "../libs";

const projectDetail= ({data:{id}}) => {

  useEffect(()=>{
  const [data, setproject]= useState([]);

  getProject(id).then((data)=>setproject(data))
  })
console.log(id);
const project = projectList.filter(function(project){
    return project.id == id
})

// const filteredProducts = products.filter(product => product.category_id === categoryId){


    if(!project) {
    return router.navigate('/project')
    }
  return `
  ${container()}
  <h1>${project.name} </h1>
  `
}

export default projectDetail