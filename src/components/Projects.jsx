import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Projects = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    getProjects = async () => {
      response = await axios.get('./src/data/projects.json')
      dispatch({
        type: GET_PROJECTS
      })
    }
  })
  return (
    <div id='projects'>
      
    </div>
  )
}

export default Projects
