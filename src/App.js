import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../src/pages/Project';
import Analysis from './pages/Analysis';
import AddAnalysis from './pages/Analysis/AddAnalysis';
import Group from './pages/Group';
import AddGroup from './pages/Group/AddGroup';
import AddProject from './pages/Project/AddProject';
import InvitedProject from './pages/Project/InvitedProject';
import Task from './pages/Task';
import AddTask from './pages/Task/AddTask';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/projects' element={<Project />} />
        <Route path='/project/add' element={<AddProject />} />
        <Route path='/project/invited' element={<InvitedProject />} />
        <Route path='/groups' element={<Group />} />
        <Route path='/group/add' element={<AddGroup />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/analysis/add' element={<AddAnalysis />} />
        <Route path='/task' element={<Task />} />
        <Route path='/task/add' element={<AddTask />} />
      </Routes>
    </div>
  );
};

export default App;
