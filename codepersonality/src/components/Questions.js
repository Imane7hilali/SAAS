import Layout from './Layout'
import React, {useState , useEffect} from 'react'
import data from '../data'
import {useForm } from 'react-hook-form'
import Question from './Question'
import { useNavigate } from 'react-router-dom';

const Questions = () => {

    const navigate = useNavigate()
    const [buttonEnable,setButtonEnable] = useState(false)

    const { register, handleSubmit } = useForm();
    
    const types = [];
    const [questionIndex, setQuestionIndex] = useState(1)
    const [nextIndex , setNextIndex] = useState(0);

    const nextQuestion = () => {
        if(buttonEnable == true){
                setQuestionIndex(questionIndex + 1)
        if(nextIndex == 0 ) setButtonEnable(false) 
        else if (nextIndex == 0) setNextIndex(nextIndex + 1)

                
        }
        else{
            alert('repondre a la question SVP ')

        }
    }
    const prevQeustion = () => {
        if(questionIndex !== 1){
            setQuestionIndex(questionIndex - 1)
            setButtonEnable(true)
            setNextIndex(nextIndex - 1)



        }
    }
    const handler  = () => {
        setButtonEnable(true)
        console.log(buttonEnable)
    }
    var somme = []; 

    return(

        <div>
            <Layout />
            <div className='grid justify-items-center '>
                <h1 className='my-10 bg-white rounded py-1 px-4 font-semibold'>Question {questionIndex} </h1>
            </div>
            <div className='bg-white'>
                <form onSubmit={handleSubmit(data =>  {if(!buttonEnable) alert('repondre a la question SVP') ;Object.values(data).map(reponse => { let arr=reponse.split(",");let index = Number(arr[1]);let value =Number(arr[0]);console.log(index,value);if(somme[index] == undefined) {somme[index] = value } else { somme[index] += value } ; console.log(somme)})
                
                const max = Math.max(...somme);
                var index2 = 0 ;
                const indexFunction = somme.forEach(value => {
                    if (max == value ) index2 = index2 + 1 ;
                    
                })
                
                if(index2 == 1 ){
                    let index  = somme.indexOf(max)
                    console.log(index)
                    localStorage.setItem('index' , index)
                }
                else localStorage.setItem('index' , 0)
                
                navigate('/result')
            })}>
                    {data.map(question => {
                    return(<Question onClick={handler} key={question.id} setButtonEnable={setButtonEnable} register={register}  style={questionIndex === question.id + 1  ? "active" : "notactive"} question={question.question} input1={question.reponse1} input2={question.reponse2} input3={question.reponse3} id={question.id} type={question.type}/>)
                    })}
                    <div className='text-center '>
                        {questionIndex==data.length  && <button type='submite' className='text-center bg-green-700 text-white rounded px-3 py-1 mb-5'>Valider</button>}
                    </div>

                </form>
            </div>
            <div className=' my-4 text-center'>
                {questionIndex!==1 && <button className='bg-premier text-white rounded px-3 py-1' onClick={prevQeustion}>Précedent</button>}
                {questionIndex!==data.length  && <button className='bg-premier text-white rounded px-3 py-1 ml-4 ' onClick={nextQuestion}>Suivant</button>}
            </div>

        </div>
    )
}

export default Questions;