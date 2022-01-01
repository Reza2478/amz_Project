import React, { useContext, useEffect } from "react";

// Components
import Post from "./shared/Post";

//API
import { getPosts } from "../services/api";

// Context
import { edContext } from "../context/EDContextProvider";

//styles
import styles from "./Posts.module.css";

const Posts = () => {
  const { state, getInitialData } = useContext(edContext);
  

  useEffect(() => {
    getPosts()
      .then((data) => { 
        getInitialData(data);
      })
      .catch((error) => console.error(error));
  }, []);

 
  return (
    <div className={ styles.container}>
      {state?.posts?.map((post) => (
        <Post key={post.id} postData={post}  />
      ))}
    </div>
  );
};

export default Posts;
