import React, { useEffect, useState } from 'react'
import CountDown from './countDown'
// import { useTimeout } from '../customHook/timeOutCounter'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addScore, zeroScore } from '../feature/quizSlice'

const Question = ({ data }) => {

    const [current, setCurrent] = useState(0)
    const [last, setLast] = useState(false)

    const dispatch = useDispatch();

    const score = useSelector((state) => state.quiz.score)
    // console.log(data[current].answer);
    // console.log(current, data.length-1);
    
    const ScoreIt = (e, id) =>{
      if(id === data[current].answer){
        dispatch(addScore())
      }else{
        dispatch(zeroScore())
      }  
      
      if(current === data.length-1 ){
        // localStorage.setItem('score', score)
        setLast(true)
      }else {
        setCurrent((prev) => prev +=1)
      }
    }
   
    const perct = score/data.length*100

    const navigate = useNavigate();

    const up = useSelector((state) => state.quiz.time)

    useEffect(() =>{
    if(up) navigate('/signin/timeup')
    });
    
    return (
      <div>
          {
            last?
            <div>
              
              {
                data.map((ele) =>(
                  <div>
                    <span><i>({current+1})</i> <p>{ele.question}</p></span>
              
                    {    
                      Object.entries(ele.option).map(([id, body]) => 
                        <div className='flex flex-row justify-center m-4' key={id}>
                            <button className='flex flex-row py-4 px-2 bg-blue-500 rounded-md text-white' type='button' onClick={e => ScoreIt(e, id)} ><b>({id})</b>&nbsp;&nbsp;<p>{body}</p></button>
                        </div>
                    )
                    }
                  </div>
              ))[current]
              }
            </div>
            :
            <div>
              <h2>Test Completed</h2>
              <p>your score: <b>{score}/{data.length}  {perct}%</b></p>
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
              <button onClick={navigate('/signin/components')}>go back to home page</button>
            </div>
          }
      </div>
    )
}

const Pagination = ({title, data, subject}) => {

  
  return (
    <div className='text-center'>
        <h1 className='m-2'>{title}</h1>
        <h2 className='m-2'>subject: <b>{subject}</b></h2>
        <div className='flex flex-row m-4'>
          <p>Timer: </p>&nbsp;
          {<CountDown targetDate={ (data.length === 40) ? new Date().getTime() + 60*1000 : new Date().getTime() + 12*60*1000 } />}
        </div>
        <div className='m-4 font-light'>
           <Question data={data} />
        </div>
    </div>
  )
}

export default Pagination