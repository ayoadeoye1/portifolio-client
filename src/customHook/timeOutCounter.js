import { useEffect, useState } from 'react'

const useTimeout = (targetDate) =>{
    const timeGiven = new Date(targetDate).getTime();
    
    const [count, setCount] = useState(timeGiven - new Date().getTime())
    // console.log(new Date().getTime())
    useEffect(() =>{
        const interval = setInterval(() =>{
            setCount((timeGiven - new Date().getTime())-1)
        }, 1000)
        return () => clearInterval(interval);
    }, [timeGiven])

    return getReturnValues(count)
}

const getReturnValues = (count) =>{
    const days = Math.floor(count / (1000*60*60*24))
    const hours = Math.floor((count % (1000*60*60*24))/(1000*60*60))
    const minutes = Math.floor((count % (1000*60*60)) / (1000*60))
    const seconds = Math.floor((count % (1000*60)) / (1000))

    return [days, hours, minutes, seconds];
}

export { useTimeout };
