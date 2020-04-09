import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Content header={project.title} />
      <Card.Content description={project.description} />
      <Card.Content extra>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" size="large" />
        </a>
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="large" />
        </a>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard
