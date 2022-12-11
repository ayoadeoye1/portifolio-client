import React from 'react'

const Worksample = () => {
  return (
    <div>
        <h2 className='text-center font-md text-xl w-full shadow-md m-4 uppercase leading-10'>Work sample</h2>
        <div className='flex flex-row m-4'>
            <h2 className='m-4 w-3/5 text-lg uppercase font-medium'>about</h2>
            <h2 className='m-4 uppercase text-lg font-medium' >link</h2>
        </div>
        <div className='flex flex-row'>
            <p className='m-4 w-3/5 font-thin font-serif text-lg'>file upload with nodejs, expressjs, cloudinary, mongoDB and reactjs</p>
            <a className='m-4 text-sky-600 ' href='#' ><i>check</i></a>
        </div>
        <p className='m-6'>signup to view all...</p>
    </div>
  )
}

export default Worksample