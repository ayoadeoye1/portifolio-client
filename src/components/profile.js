import React from 'react'
import ay from '../assets/ay.jpg'

const Profile = () => {
  return (
    <div className='m-5'>
        <h2 className='font-medium text-center shadow-md '>Profile</h2>
        <div className='flex flex-col sm:flex-row'>
            <div className='flex-none m-[10%] sm:w-2/5 sm:m-[4%] '>
                <ul className='text-lg justify-items-start leading-5 '>
                    <li><b className='text-blue-600 leading-10 mb-4'>Names:</b> Ayobami Isaac</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>LastName:</b> Adeoye</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>Gender:</b> Male</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>Religion:</b> Christianity</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>Nationality:</b> Nigerian</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>CurrentCity:</b> ...</li>
                    <li><b className='text-blue-600 leading-10 mb-4'>hobbies:</b> Problem solving, Meditating, Singing</li>
                </ul>
            </div>
            <div className='flex-none sm:w-3/5 sm:ml-[5%] m-6 center '>
                <img src={ay} className='h-[100%] w-[100%] self-center sm:h-[500px] sm:w-fit rounded-lg' alt='Ayobami' />
            </div>
        </div>
    </div>
  )
}

export default Profile