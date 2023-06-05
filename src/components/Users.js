import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import User from "./shared/User";

//API
import { fetchUsers } from "../features/usersSlice";

//Images
import Spinner from "../assets/spinner.gif";
import Man from "../assets/avatar/man.png";
import Woman from "../assets/avatar/woman.png";
import { useState } from "react";

const Users = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const cluster = useSelector((state) => state.filter.cluster);
  const [data, setData] = useState([]);
  
  const filteredUsers = async (users) => {
    if (cluster === "all") {
      await setData(users);
      return data;
    } else {
      await setData(users.filter((item) => item.added));
      return data;
    }
  };

  useEffect(() => {
    filteredUsers(state.users);
  }, [state,cluster]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="overflow-auto grid md:grid-cols-2 gap-2 h-96">
      {state.loading ? (
        <div className="col-span-2 flex items-center justify-center">
          <img src={Spinner} alt="loading" />
        </div>
      ) : null}
      {state.users.length
        ? data.map((item) => (
            <User
              userInfo={item}
              key={item.id}
              avatar={item.id % 2 === 0 ? Woman : Man}
            />
          ))
        : null}
      {state.error ? <p>{state.error}</p> : null}
    </div>
  );
};

export default Users;
