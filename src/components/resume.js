import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Resume = () => {
  return (
    <div className='w-full flex flex-row shadow-md rounded-lg leading-8 h-16'>
        <p className='m-4 font-medium py-2 px-[20%] w-3/5'>Resume</p>
        <a className='mt-4 pr-0' href='https://drive.google.com/uc?id=m8J2fZJ7feMvbHvjuSAc6cw7kMbxEPfsq&export=download'>
            <FontAwesomeIcon
                icon={faDownload}
                size='2x'
                color='blue'  
            />
        </a>
    </div>
  )
}

export default Resume