import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addToTeams: (state, action) => {
      state.teams.push({
        ...action.payload,
        add: true,
      });
    },
    removeFromTeams: (state, action) => {
      const newTeams = state.teams.filter(
        (item) => item.id !== action.payload.id
      );
      state.teams = newTeams;
    },
  },
});

export default teamsSlice.reducer;
export const { addToTeams, removeFromTeams } = teamsSlice.actions;
