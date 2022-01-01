import React,{useContext} from 'react';

//Contexts
import { edContext } from '../../context/EDContextProvider';

const Post = ({postData}) => {

    const {dispatch}=useContext(edContext);
    
    return (
        <div>
            <h1>{postData.title}</h1>
            <h6>{postData.body}</h6>
            <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:postData})}>Delete</button>
            <button onClick={()=>dispatch({type:"EDIT_ITEM",payload:postData})}>Edit</button>
        </div>
    );
};

export default Post;