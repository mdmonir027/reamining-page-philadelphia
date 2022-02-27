import React from 'react';
import HeaderTitle from './HeaderTitle';
import ProjectTable from './ProjectTable';

const Projects = () => {
  return (
    <div>
      <HeaderTitle text={'Invited Projects'} />
      <ProjectTable />
    </div>
  );
};

export default Projects;
