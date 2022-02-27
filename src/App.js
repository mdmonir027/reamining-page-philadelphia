import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../src/pages/Project';
import AddProject from './pages/Project/AddProject';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/projects' element={<Project />} />
        <Route path='/project/add' element={<AddProject />} />
      </Routes>
    </div>
  );
};

export default App;
