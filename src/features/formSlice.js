import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    fillingInput: (state, action) => {
      state.show = true
      state.id = action.payload.id
      state.firstname = action.payload.name.firstname
      state.lastname = action.payload.name.lastname
      state.email = action.payload.email
      state.phone = action.payload.phone
    },
    close: state => {
      state.show = false
    },
  },
})

export default formSlice.reducer
export const { fillingInput, close } = formSlice.actions
