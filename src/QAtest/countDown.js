import { useTimeout } from "../customHook/timeOutCounter"
import { submitUser } from '../feature/quizSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"

const CountDown = (props) => {
    const [ days, hours, minutes, seconds ] = useTimeout(props.targetDate)
    
    const dispatch = useDispatch();

    const left =days+hours+minutes+seconds

    useEffect(() =>{
    if(left <= 0) dispatch({type: submitUser});
    }, [left, dispatch])
 
    return(
    <div className="flex flex-row font-medium rounded-sm shadow-lg w-max">
        {/* <p>{days} dys </p>:
        <p>{hours} hrs </p>: */}
        <p>{minutes}min</p>:
        <p>{seconds}sec</p>
    </div>
  )
}

export default CountDown