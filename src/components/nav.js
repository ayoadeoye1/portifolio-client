import React, { useState } from 'react'
import pic from '../assets/aady1.jpg';
import menu1 from '../assets/menu.png';
import menu2 from '../assets/close.png';
import { Link } from 'react-router-dom';
import { useSelector, useDisaptch } from 'react-redux';

const Nav = () => {

  const [resp, setResp] = useState(false)

  const Don = () =>{
    setResp((prev)=> !prev)
  }

  const isLogged= useSelector((state)=> state.quiz.loggedIn)

  // Cookie.get('id') ? setIsLogged(true) : setIsLogged(false)
 
  // console.error('cookie:', Cookie.get('id'))

  return (
    <div className='flex shadow-xl w-full'>
        <div className='p-4 '>
            <img src={pic} alt='logo' className='shadow-lg h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] rounded-full' />
        </div>
        <div className='pt-10 justify-center'>
          <h1 className='font-italic text-lg font-semibold sm:text-2xl text-center'>Awesome Portfolio</h1>
        </div>
        <div className='absolute top-4 right-1 sm:flex hidden pt-5'>
            {
              isLogged ? 
              <>
                <a className='p-3'>logout</a>
                <Link to='dashboard/components' className='p-3'>components</Link>
                <Link to='dashboard/test' className='p-3'>Quiz App</Link>
                <Link to='dashboard/about' className='p-3'>about</Link>
              </>
              :
              <>
                <Link to='sign/components' className='p-3'>components</Link>
                <Link to='sign/signin' className='p-3'>sign-in</Link>
                <Link to='sign/about' className='p-3'>about</Link>
              </>
            }
        </div>
        <div className='sm:hidden shadow-lg absolute top-10 right-8'>
          <img onClick={() => Don()} src={ resp ? menu2 : menu1 } className='font-bold' />
        </div>
        {
          resp 
          &&
          <div className='fixed top-0 right-0 left-0 bottom-0 rounded-xl  pt-5 opacity-80 bg-slate-900'>
            <div  className='sm:hidden shadow-lg absolute top-10 right-8'><img onClick={() => Don()} src={menu2} className='font-bold' /></div>
            <div className='m-4 flex flex-col text-center text-2xl font-sans text-white '>
              {
                isLogged ? 
                <>
                  <a onClick={() => Don()} className='p-3'>logout</a>
                  <Link onClick={() => Don()} to='dashboard/components' className='p-3'>components</Link>
                  <Link onClick={() => Don()} to='dashboard/test' className='p-3'>Quiz App</Link>
                  <Link onClick={() => Don()} to='dashboard/about' className='p-3'>about</Link>
                </>
                :
                <>
                  <Link onClick={() => Don()} to='sign/components' className='p-3'>components</Link>
                  <Link onClick={() => Don()} to='sign/signin' className='p-3'>sign-in</Link>
                  <Link onClick={() => Don()} to='sign/about' className='p-3'>about</Link>
                </>
              }
            </div>
          </div>
        }
    </div>
  )
}

export default Nav