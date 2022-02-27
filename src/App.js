import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../src/pages/Project';
import AddProject from './pages/Project/AddProject';
import InvitedProject from './pages/Project/InvitedProject';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/projects' element={<Project />} />
        <Route path='/project/add' element={<AddProject />} />
        <Route path='/project/invited' element={<InvitedProject />} />
      </Routes>
    </div>
  );
};

export default App;
