import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import editIcon from "../../assets/icons/edit.svg";

//Redux
import { addToTeams, removeFromTeams } from "../../features/teamsSlice";

const ifExist = (teams, user) => {
  const index = teams.findIndex((item) => item.id === user.id);
  if (index === -1) return false;
  else return true;
};

const User = ({ userInfo, avatar }) => {
  const { name, phone, email } = userInfo;
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);

  return (
    <div className="flex  bg-primary p-2 shadow-md rounded-md h-fit">
      <div className="bg-second p-2 rounded-lg flex items-center justify-center">
        <img className="w-20 " src={avatar} alt="avatar" />
      </div>
      <div className="flex flex-col ml-6 gap-y-1">
        <h1 className="text-second font-bold text-lg">
          {name.firstname + name.lastname}
        </h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-second mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <h2 className="text-second mb-">{email}</h2>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-second mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <h4 className="text-second">{phone}</h4>
        </div>
        {ifExist(teams, userInfo) ? (
          <button
            onClick={() => dispatch(removeFromTeams(userInfo))}
            className="flex px-2 py-1 bg-transparent w-fit text-second border border-second text-xs rounded-sm mt-2"
          >
            remove
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToTeams(userInfo))}
            className="flex px-2 py-1 bg-second w-fit border border-second text-primary text-xs rounded-sm mt-2"
          >
            Add to teams
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
