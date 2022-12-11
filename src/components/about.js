import React from 'react'

const About = () => {
  return (
    <div className='w-[98%]'>
        <h1>About</h1>
        <div className='m-4'>
            <h2 className='text-blue-600 font-semibold underline'>about page</h2>
            <p>
                This web application is created with react js, redux toolkit, tailwind css, 
                axios, node js, express js, passport js, mongoose and mongoDB amidst other minor
                 frameworks/libraries. this is the version 1 of AADY portifolio.
            </p>
        </div>
        <div className='m-6'>
            <h2 className='text-blue-600 font-semibold underline'>Versions and its Features</h2>
            <table>
            <tbody className=' border-2'>
                <tr className=' border-2'>
                    <th className=' border-2'>version</th>
                    <th className=' border-2'>status</th>
                    <th className=' border-2'>features</th>
                </tr>
                <tr className=' border-2'>
                    <td className=' border-2'>1.0.0</td>
                    <td className=' border-2'>released</td>
                    <td className=' border-2'>react js static app with few backend program, quiz app,</td>
                </tr>
                <tr className=' border-2'>
                    <td className=' border-2'>2.0.0</td>
                    <td className=' border-2'>pending...</td>
                    <td className=' border-2'>dynamic web application, all the text and files will be lazyloaded from well documented API, so that it can be easily updated/deleted on admin dashboard.</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className=''>
            <p className='p-6 text-center'>copyright&nbsp;
            &copy;
            &nbsp;
            {
              new Date().getFullYear()
            }&nbsp; 
            ayoadeoye
            </p>
        </div>
    </div>
  )
}

export default About