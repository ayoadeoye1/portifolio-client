import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Timeupredir = () => {

    const score = useSelector((state) => state.quiz.score)
    const perct = score/40*100
    
  return (
    <div className='p-6 text-center top-0 left-0 right-0  w-full fixed bg-slate-50 opacity-95 mr-4 mb-4 overflow-scroll rounded-2xl h-full shadow-md'>
        <h2>Time Up Test Completed</h2>
        <p>your score: <b>{score}/40 |===| {perct}%</b></p>
        {
        (perct >= 70) && <p className='bg-green-500 p-4 m-6 rounded-md text-white'>Good performance!</p>
        }
        {
        (perct >= 60 && perct < 70) && <p className='bg-green-200 p-4 m-6 rounded-md text-white'>Good, you can do better!</p>
        }
        {
        (perct >= 50 && perct < 60) && <p className='bg-yellow-300 p-4 m-6 rounded-md text-white'>Average performance!</p>
        }
        {
        (perct >= 40 && perct < 50) && <p className='bg-pink-300 p-4 m-6 rounded-md text-white'>Fair performance!</p>
        }
        {
        (perct < 40) && <p className='bg-red-500 p-4 rounded-md  text-white m-6' >Lol, a very poor performance!</p>
        }
        <Link className='bg-blue-500 w-max rounded-md' to='/signin/components'>go back to home page</Link>
    </div>
  )
}

export default Timeupredir