import React, { useContext, useEffect } from "react";

// Components
import Post from "./shared/Post";

//API
import { getPosts } from "../services/api";

// Context
import { edContext } from "../context/EDContextProvider";

const Posts = () => {
  const { state, getInitialData } = useContext(edContext);
  console.log({ state });

  useEffect(() => {
    getPosts()
      .then((data) => {
        console.log({ data });
        getInitialData(data);
      })
      .catch((error) => console.error(error));

    // const fetchAPI = async () => {
    //   setPosts(await getPosts());
    // };
      
    // fetchAPI();
  }, []);

  return (
    <div>
      {state?.posts?.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  );
};

export default Posts;
