import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Component
import Layout from './layout';
import HomePage from './components/home/HomePage';
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/blog/BlogPage';

const App = () => {

  useEffect( () => {
    setTimeout(() => {
         toast("ممنون بچه ها از حمایتتون")
     }, 2000)
} ,[])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/authors/:slug' element={ <AuthorPage /> } />
        <Route path='/blogs/:slug' element={ <BlogPage /> } />
        <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
      <ToastContainer style={{
            textAlign: "center",
            top: ".6rem",
            right:"0",
            fontWeight: "700",
            padding: "0 8px",
            fontFamily:"YekabBakh"
        }} />
    </Layout>
  );
};

export default App;