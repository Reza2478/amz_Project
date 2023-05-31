import React, { useState,useContext,useEffect }from 'react';

//Context
import { edContext } from '../context/EDContextProvider';


const initialState=
    {
        userId:"",
        body:"",
        title:"",
        id:""
    }

const Add = () => {
    const {state,dispatch}=useContext(edContext);

    const [data,setData]=useState(initialState)
    console.log(state.postEdit)

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setData(state.postEdit)
    },[state.postEdit])

    const submit =(event) => {
        if(state.EditOrDelete===false)
        {
            event.preventDefault()
        data.id=Math.random()*100000
        dispatch({type:"ADD_ITEM",payload:data})
        setData(initialState)
        }
        else{
            event.preventDefault()
        
        dispatch({type:"EDIT_ITEM",payload:data})
        setData(initialState)
        }
        
    }

    return (
        
        <div className='bg-primary'>
                <div >
                    <form >
                        <input  type="text" name="userId" onChange={changeHandler} value={data?.userId} placeholder="User id select"/>
                        <input  type="text" name="title" onChange={changeHandler} value={data?.title} placeholder="title input"/>   
                        <input  type="text" name="body" onChange={changeHandler} value={data?.body} placeholder="Body input"/>                 
                        <button onClick={submit} type="submit">{state.EditOrDelete?"Edit Post":"Add Post"}</button>     
                    </form>
            </div>
        </div>
    );
};

export default Add;