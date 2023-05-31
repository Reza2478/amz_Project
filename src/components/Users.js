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

const Users = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const cluster = useSelector((state) => state.filter.cluster);
  const teams = useSelector((state) => state.teams.teams);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="overflow-auto grid grid-cols-2 gap-2 h-72 ">
      {state.loading ? <img src={Spinner} alt="loading" /> : null}
      {state.users.length
        ? cluster === "all"
          ? state.users.map((item) => (
              <User
                userInfo={item}
                key={item.id}
                avatar={item.id % 2 === 0 ? Woman : Man}
              />
            ))
          : teams.map((item) => (
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
