import React, { useState } from 'react'
import axios from 'axios'
import Pagination from './pagination';
import { useNavigate } from 'react-router-dom';
import spinner from '../assets/spinner.gif'
import { useSelector } from 'react-redux';

const Land = () => {
    const [question, setQuestion] = useState([]);
    const [subject, setSubject] = useState('');
    const [lazy, setLazy] = useState(false);
    
    const navigate = useNavigate()

    const ChemFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=chemistry&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    // const Chem = () =>{
    //     axios.get('https://questions.aloc.com.ng/api/v2/20?subject=chemistry&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
    //     .then((response) =>{
    //         setQuestion(response.data.data)
    //         setSubject(response.data.subject)
    //     })
    //     .catch (error =>{
    //         console.log('error occured =>',error);
    //     }) 
    // }

    const EnglishFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=english&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    // const English = () =>{
    //     axios.get('https://questions.aloc.com.ng/api/v2/20?subject=english&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
    //     .then((response) =>{
    //         setQuestion(response.data.data)
    //         setSubject(response.data.subject)
    //     })
    //     .catch (error =>{
    //         console.log('error occured =>',error);
    //     }) 
    // }

    const BioFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=biology&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    // const Mathi = () =>{
    //     axios.get('https://questions.aloc.com.ng/api/v2/20?subject=mathematics&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
    //     .then((response) =>{
    //         setQuestion(response.data.data)
    //         setSubject(response.data.subject)
    //     })
    //     .catch (error =>{
    //         console.log('error occured =>',error);
    //     }) 
    // }

    const GeoFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=geography&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    const CivicFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=civiledu&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    const MathiFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=mathematics&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    const CurrentFull = () =>{
        setLazy(true)
        const Laz = () =>{
            axios.get('https://questions.aloc.com.ng/api/v2/m?subject=currentaffairs&type=utme', {headers:{'AccessToken': 'QB-9b9792f9b25fbbaa567f', 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) =>{
                setLazy(false)
                setQuestion(response.data.data)
                setSubject(response.data.subject)
            })
            .catch (error =>{
                setLazy(false)
                alert(error.message)
                console.log('error occured =>',error.response);
            })
        }
        Laz();
    }

    const GoBack = () =>{
        navigate('/dashboard')
    }

    const up = useSelector((state) => state.quiz.time)

  return (
    <div className='top-0 left-0 right-0  w-full fixed bg-slate-300  mr-4 mb-4 overflow-scroll rounded-2xl h-full shadow-md'>
        {
            question.length > 0 ?
            <div>
                <Pagination
                    title={'Nigeria UTME random past questions'}
                    data={question}
                    pageLim={1}
                    subject={subject}
                    dataLim={question.length}
                />
            </div>
            :
            <div>
                <button className='m-3 bg-blue-600 py-2 px-2 rounded-lg' onClick={() => GoBack()}>back</button>
                <h1 className='text-center leading-5 text-md m-4'>AADY Quiz App, Random Questions from Nigeria UTME PQ(s)</h1>
                <p className='text-center m-2'>select subject</p>
                <div>
                   {
                    lazy ?
                    <div className = 'top-0 left-0 right-0  w-full fixed bg-slate-500 bg-opacity-50 rounded-2xl h-full shadow-md'>
                        <div className='mt-[40%]'>
                            {/* <p>loading</p> */}
                            <center><img className='h-20 w-20 rounded-xl bg-slate-400 outline-slate-600' src={spinner} alt='spinner' /></center>
                        </div>
                    </div>
                    :
                    <div>
                         <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => ChemFull()}>Chemistry 40 Questions</button>
                            {/* <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Chem()}>chemistry 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => EnglishFull()}>English 40 Questions</button>
                            {/* <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => English()}>English 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => MathiFull()}>Mathematics 40 Questions</button>
                            {/* <button disabled={true} className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Mathi()}>Mathematics 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => GeoFull()}>Geography 40 Questions</button>
                            {/* <button disabled={true} className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Mathi()}>Mathematics 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => CivicFull()}>Civic Edu 40 Questions</button>
                            {/* <button disabled={true} className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Mathi()}>Mathematics 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => BioFull()}>Biology 40 Questions</button>
                            {/* <button disabled={true} className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Mathi()}>Mathematics 20 Questions</button> */}
                        </div>
                        <div className='text-center m-2'>
                            <button className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => CurrentFull()}>Current Affairs 40 Questions</button>
                            {/* <button disabled={true} className=' border-solid bg-blue-500 text-yellow-50 m-2 py-4 px-2 rounded-md' onClick={() => Mathi()}>Mathematics 20 Questions</button> */}
                        </div>
                    </div>
                   }
                </div>
                <p className='text-center font-thin mt-10'>each button fetch question from paginated API dynamically, But must have the right schema structure</p>
            </div>
        }
    </div>
  )
}

export default Land

