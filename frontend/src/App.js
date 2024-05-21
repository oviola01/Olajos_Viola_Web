import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Szotar from './pages/Szotar';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
      <Route index element={<Szotar />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
