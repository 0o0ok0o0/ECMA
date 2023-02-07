import Header from "../components/Header";
import { projectList } from "../data/data"
import { router } from "../libs";

const projectDetail= ({data:{id}}) => {
console.log(id);
const project = projectList.find(function(project){
    return project.id == id
})
    if(!project) {
    return router.navigate('/project')
    }
  return `
  ${Header()}
  <h1>${project.name} </h1>
  `
}

export default projectDetail