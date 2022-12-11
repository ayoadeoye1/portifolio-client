import { useEffect, useState } from 'react';
import './index.css';
// import axios from 'axios';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
// import Cookie from 'js-cookie';
// import CountDown from './QAtest/countDown';

import Sign from "./components/sign";
import Dashboard from './components/dashboard';
import Nav from './components/nav';
import Land from './QAtest/land';
import CompRender from './components/compRender';
import Timeupredir from './QAtest/timeupredir';
import Signin from './components/signin';
import CompDash from './components/compDash';

import { useSelector } from 'react-redux';
import About from './components/about';
// import Main from './QAtest/main';

function App() {
  
  const isLogged= useSelector((state)=> state.quiz.loggedIn)

  // Cookie.get('id') ? setIsLogged(true) : setIsLogged(false) TODO dispatch
 
  // console.error('cookie:', Cookie.get('id'))

  const navigate = useNavigate()

  useEffect(() =>{
    isLogged ?
    navigate('/dashboard')
    :
    navigate('/sign')
  }, [])
    
  return (
    <div className='bg-white'>
      <Nav /><br />
      <Routes>
        <Route path='/' element={<Navigate to = '/sign' />} />
        
        {/* {
          isLogged && <Route path='/sign' element={<Navigate to = '/dashboard' />} />
        } 
        {
          !isLogged && <Route path='/dashboard' element={<Navigate to = '/sign' />} />
        } */}
        <Route path='/dashboard' element={<Navigate to = '/dashboard/components' />} />
        <Route path='/sign' element={<Navigate to = '/sign/components' />} />
        
        <Route path='/dashboard/*' element={ <Dashboard out={<Outlet />} /> }>
          <Route path='components' element={<CompDash />} />
          <Route path='test' element={<Land />} />
          <Route path='timeup' element={<Timeupredir />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/sign/*' element={ <Sign out={<Outlet />} /> } >
          <Route path='components' element={<CompRender />} />
          <Route path='signin' element={<Signin />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
