import React from 'react';import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetail from './components/PostDetail/PostDetail';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
      <Container maxWidth='xl'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Navigate to={'/posts'} />} />
          <Route path='/posts' exact element={<Home />} />
          <Route path='/posts/search' exact element={<Home />} />
          <Route path='/posts/:id' exact element={<PostDetail />} />
          <Route path='/auth' exact element={!user ? <Auth /> : <Navigate to='/posts' />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
