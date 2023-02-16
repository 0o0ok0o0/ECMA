import { projectList } from "../data/data"

const ProjectList = ({projects}) => {
  return `
  ${
    projects.map((item)=>{
        return `
            <div>
                
                <h2 > <a class="text-decoration-none text-dark"  href="/project/${item.id}">  Project Name: ${item.name} </a></h2>

            </div>
        `
    }).join("")
}
  `
}

export default ProjectList