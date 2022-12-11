import React from 'react'

const Certification = () => {
  return (
    <div className='w-full'>
        <h2 className='text-center font-md text-xl shadow-md m-4 uppercase leading-10'>education and certification</h2>
        <table className='w-full leading-8 text-justify m-4 sm:text-xl'>
           <tbody className=' border-2'>
            <tr className=' sm:p-2 sm:border-2 h-14 leading-5'>
                <th className=' border-4'>institution</th>
                <th className=' border-4'>certificate</th>
                <th className=' border-4'>year</th>
            </tr>
            <tr className=' sm:p-2 sm:border-2 h-14 leading-5'>
                <td className=' border-2'>university of ilorin</td>
                <td className=' border-2'>BSc. Geo&Min Sci</td>
                <td className=' border-2'>2023</td>
            </tr>
            <tr className=' sm:p-2 sm:selection:border-2 h-14 leading-5'>
                <td className=' border-2'>ZTM udemy</td>
                <td className=' border-2'>zero to mastery nodejs</td>
                <td className=' border-2'>2021</td>
            </tr>
            <tr className=' sm:p-2 sm:border-2 h-14 leading-5'>
                <td className=' border-2'>code acedemy</td>
                <td className=' border-2'>javascript developer</td>
                <td className=' border-2'>2019</td>
            </tr>
            <tr className=' sm:p-2 sm:border-2 sm:leading-8 h-14 leading-5'>
                <td className=' border-2'>hackerrank & codewar</td>
                <td className=' border-2'>problem solving</td>
                <td className=' border-2'>2019till date</td>
            </tr>
            </tbody> 
        </table>
    </div>
  )
}

export default Certification