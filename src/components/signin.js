import React from 'react'

const Signin = () => {

    const Exec = () =>{
        window.open('http://localhost:8000/v1/goauth', '_self');
    }

  return (
    <div className='text-center m-4 w-[98%]'>
        <h5><i className='font-light italic text-2'>quickly signin with Google OAuth 2.0 below</i><br /></h5>
        <button className="mt-4 shadow-lg text-blue-600 cursor-pointer rounded-md" onClick={ ()=> Exec() }>Sign-In with Google</button>
    </div>
  )
}

export default Signin