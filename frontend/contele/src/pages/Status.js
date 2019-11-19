import React,{ useEffect, useState } from 'react';
import api from '../services/api'


export default function Status() {

    const [completeForm,setCompleteForm] = useState();
    const [emptyFields,setEmptyFields] = useState([]);

    useEffect(()=>{
        async function loadOrder(){
            const response = await api.get('/status')
            console.log(`response
                ${response}
            `)
            setCompleteForm(response.data.complete)

        }
        loadOrder();
    },[])

    console.log(completeForm)
    
    return(
    <>
        <h1>hello</h1>
    </>
    )
}
