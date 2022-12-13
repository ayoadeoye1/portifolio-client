import { useEffect } from 'react';
import './index.css';
// import axios from 'axios';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

import Sign from "./components/sign";
import Dashboard from './components/dashboard';
import Nav from './components/nav';
import Land from './QAtest/land';
import CompRender from './components/compRender';
import Timeupredir from './QAtest/timeupredir';
import Signin from './components/signin';
import CompDash from './components/compDash';

import { useSelector, useDispatch } from 'react-redux';
import { isLog, notLog } from './feature/quizSlice'

import About from './components/about';

function App() {
  
  const isLogged= useSelector((state)=> state.quiz.loggedIn)

  const dispatch = useDispatch()

  Cookie.get('id') ? dispatch({type: isLog}) : dispatch({type: notLog}) //TODO dispatch
 
  console.error('cookie:', Cookie.get('id'));

  const navigate = useNavigate()

  useEffect(() =>{
    isLogged ?
    navigate('/dashboard')
    :
    navigate('/sign')
  // eslint-disable-next-line
  }, [])
    
  return (
    <div className='bg-white'>
      <Nav /><br />
      <Routes>
        <Route path='/' element={<Navigate to = '/sign' />} />
        
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
