import React,{useContext} from 'react';

//Contexts
import { edContext } from '../../context/EDContextProvider';

//styles
import styles from "./Post.module.css";

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import editIcon from "../../assets/icons/edit.svg";

const Post = ({postData}) => {

    const {dispatch}=useContext(edContext);
    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <button className={styles.btn} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:postData})}><img src={trashIcon} alt='trash'/></button>
                <button className={styles.btn} onClick={()=>dispatch({type:"SELECT_ITEM",payload:postData})}><img src={editIcon} alt='edit'/></button>
            </div>
            <div className={styles.right}>
                <h3>{postData.title}</h3>
                <h4>{postData.body}</h4>
                <h5>{postData.userId}</h5>
            </div>
        </div>
    );
};

export default Post;