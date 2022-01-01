import React, { useReducer, createContext } from "react";

const edReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return { ...state, posts: action.payload.posts };
    case "ADD_ITEM":
      state.posts.push({
        ...action.payload,
      });
      return {
        ...state,
        posts: [...state.posts],
      };
    case "REMOVE_ITEM":
      const newPostItems = state.posts.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        posts: [...newPostItems],
      };
    case "SELECT_ITEM":
        const temp=state.posts.find(item => item.id === action.payload.id) 
        
        return {
            ...state,
            postEdit:temp,
            EditOrDelete:true,
        }
        case "EDIT_ITEM":
            const list=state.posts;
        const index=state.posts.findIndex(item => item.id === action.payload.id) 
        list[index]=action.payload;
        return {
            ...state,
            posts:list,
            EditOrDelete:false,
            postEdit:{}
        }
    default:
      return state;
  }
};

const getInitialData = (dispatch) => {
  return async (posts) => {
    await dispatch({ type: "SET_INITIAL_DATA", payload: {posts} });
  };
};

export const edContext = createContext();

const EDContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(edReducer, { posts: [],postEdit:{} ,EditOrDelete:false});

  return (
    <edContext.Provider value={{ state, dispatch, getInitialData:getInitialData(dispatch)} }>
      {children}
    </edContext.Provider>
  );
};

export default EDContextProvider;
