import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../src/pages/Project';
import Group from './pages/Group';
import AddGroup from './pages/Group/AddGroup';
import AddProject from './pages/Project/AddProject';
import InvitedProject from './pages/Project/InvitedProject';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/projects' element={<Project />} />
        <Route path='/project/add' element={<AddProject />} />
        <Route path='/project/invited' element={<InvitedProject />} />
        <Route path='/groups' element={<Group />} />
        <Route path='/group/add' element={<AddGroup />} />
      </Routes>
    </div>
  );
};

export default App;
