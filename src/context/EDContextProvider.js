import React, { useReducer, createContext } from "react";

const edReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
        console.log(action.payload);
      return { ...state, posts: action.payload.posts };
    case "ADD_ITEM":
      state.postItems.push({
        ...action.payload,
      });
      return {
        ...state,
        postItems: [...state.postItems],
      };
    case "REMOVE_ITEM":
      const newPostItems = state.posts.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        posts: [...newPostItems],
      };
    // case "EDIT_ITEM":

    default:
      return state;
  }
};

const getInitialData = (dispatch) => {
  return async (posts) => {
    console.log({ posts });
    await dispatch({ type: "SET_INITIAL_DATA", payload: {posts} });
  };
};

export const edContext = createContext();

const EDContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(edReducer, { posts: [] });

  return (
    <edContext.Provider value={{ state, dispatch, getInitialData:getInitialData(dispatch)} }>
      {children}
    </edContext.Provider>
  );
};

export default EDContextProvider;
