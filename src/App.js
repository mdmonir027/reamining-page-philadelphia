import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from '../src/pages/Project';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
