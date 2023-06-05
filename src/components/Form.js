import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Redux
import { close } from '../features/formSlice'
import { editUser } from '../features/usersSlice'

const Form = () => {
  const state = useSelector(state => state.form)
  const dispatch = useDispatch()
  const [data, setData] = useState(state)
  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    setData(state)
  }, [state])

  const submit = event => {
    event.preventDefault()
    dispatch(close())
    dispatch(editUser(data))
  }

  return (
    <div className='bg-main rounded-md p-4'>
      <form className='flex items-center justify-center flex-col gap-y-3 '>
        <input
          hidden
          type='text'
          name='id'
          onChange={changeHandler}
          value={data?.id}
          placeholder='User id select'
        />
        <input
          className='p-1 transition-all focus:border-primary focus:text-primary drop-shadow-md bg-transparent border-b border-second outline-none  text-second'
          type='text'
          name='firstname'
          onChange={changeHandler}
          value={data?.firstname}
          placeholder='firstname'
        />
        <input
          className='p-1 transition-all focus:border-primary focus:text-primary drop-shadow-md bg-transparent border-b border-second outline-none  text-second'
          type='text'
          name='lastname'
          onChange={changeHandler}
          value={data?.lastname}
          placeholder='lastname'
        />
        <input
          className='p-1 transition-all focus:border-primary focus:text-primary drop-shadow-md bg-transparent border-b border-second outline-none  text-second'
          type='text'
          name='email'
          onChange={changeHandler}
          value={data?.email}
          placeholder='email'
        />
        <input
          className='p-1 transition-all focus:border-primary focus:text-primary drop-shadow-md bg-transparent border-b border-second outline-none  text-second'
          type='text'
          name='phone'
          onChange={changeHandler}
          value={data?.phone}
          placeholder='phone'
        />
        <button
          onClick={submit}
          className='p-2 transition-all hover:bg-primary w-full bg-third text-second rounded-md shadow-md mt-3'
          type='submit'
        >
          Edit
        </button>
      </form>
    </div>
  )
}

export default Form
