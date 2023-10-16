import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Component
import Layout from './layout';
import HomePage from './components/home/HomePage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
    </Layout>
  );
};

export default App;