import React from 'react'
import Rating from './rating'

const Skills = () => {
  return (
    <div className='mt-10 w-full'>
        <h2 className='font-medium text-center shadow-md '>Skills</h2>
        <p className='m-6 text-green-600 text-center font-medium color-green '>
            i am an experienced javascript developer, 
            i have been doing javascript programming since the past 4 years,
            i have worked with various javascript libraries, frameworks and runtime,
            such as reactjs, vuejs, nodejs, react native, but to aviod being a jack of all trade,
            i have much delight in server side programming, so i did go for nodejs, and to make it work well(testing purpose), i added reactjs.
        </p>
        <div className='flex flex-col w-fit sm:flex-col'>
            <div className='flex-none m-6 sm:w-1/2 text-center sm:m-[4%] w-1 '>
                <h2 className=' font-semibold uppercase '>Web Development</h2>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>html css</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>react js</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>tailwind css</p><Rating rate={3} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>neumorphism design</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>vue js</p><Rating rate={2} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>redux toolkit</p><Rating rate={3} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>axios</p><Rating rate={5} /></div>
            </div>
            <div className='flex-none m-6 sm:w-1/2 text-center sm:m-[4%] w-1 '>
                <h2 className=' font-semibold uppercase '>Software Development</h2>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>node js</p><Rating rate={5} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>express js</p><Rating rate={5} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>auth(jwt, passportjs, cookie session)</p><Rating rate={5} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>secuirity</p><Rating rate={5} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>mongoose & mongo db</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>postgresql</p><Rating rate={3} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>ci/cd</p><Rating rate={3} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>web socket(socket.io)</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>jest(unit testing and supertest)</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>DevOps(ducker kubernate and ec2)</p><Rating rate={4} /></div>
            </div>
            <div className='flex-none m-6 sm:w-1/2 text-center sm:m-[4%] w-1 '>
                <h2 className=' font-semibold uppercase '>Version Control</h2>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>GitHub and GitHub Actions</p><Rating rate={4} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>DuckerHub</p><Rating rate={4} /></div>
            </div>
            <div className='flex-none m-6 sm:w-1/2 text-center sm:m-[4%] w-1 '>
                <h2 className=' font-semibold uppercase '>Cloud</h2>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '> Amazon Web Service (AWS)</p><Rating rate={3} /></div>
                <div className='flex items-center content-center'><p className='uppercase flex flex-col font-sans m-2 '>Heroku</p><Rating rate={4} /></div>
            </div>

        </div>
    </div>
)
}

export default Skills