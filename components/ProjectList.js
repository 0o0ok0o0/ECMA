import { projectList } from "../data/data"

const ProjectList = ({projects}) => {
  return `
  ${
    projects.map((item)=>{
        return `
            <div>
                <p>Project Id: ${item.id}</p>
                <h2 > <a href="/project/${item.id}">  Project Name: ${item.name} </a></h2>
            </div>
        `
    }).join("")
}
  `
}

export default ProjectList