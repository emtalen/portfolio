import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { GET_PROJECTS } from "../state/actions/actionTypes";


const Projects = props => {
const dispatch = useDispatch()
  useEffect(() => {
    debugger
    const getProjects = async () => {
      let response = await axios.get("./src/data/projects.json");
      debugger
      dispatch({
        type: GET_PROJECTS,
        payload: { projects: response.data },
      });
    };
    getProjects()
  }, []);
  
  let displayProjects
  debugger
  const projects = useSelector((state) => state.projects);
  if (projects.length > 0) {
  displayProjects = props.projects.map((project) => {
    return (
      <div id={"project-" + project.id} key={project.id}>
        <ProjectCard project={project} />
      </div>
    );
  });
  }
  return <div id="projects">
    <h1>PROJECTS</h1>{displayProjects}</div>;
};


export default Projects;
