import React from 'react'
import { useDispatch } from 'react-redux'

//Redux
import {
  addToTeams,
  removeFromTeams,
  deleteUser,
} from '../../features/usersSlice'
import { fillingInput } from '../../features/formSlice'

//Svg
import Svg from './Svg'

const User = ({ userInfo, avatar }) => {
  const { name, phone, email } = userInfo
  const dispatch = useDispatch()

  return (
    <div className='flex  bg-primary p-2 shadow-md rounded-md h-fit relative'>
      <div className='bg-second p-2 w-1/3 rounded-lg flex items-center justify-center'>
        <img className='w-32 ' src={avatar} alt='avatar' />
      </div>
      <div className='flex flex-col ml-3 gap-y-1 w-2/3'>
        <h1 className='text-second font-bold text-lg'>
          {name.firstname + ' ' + name.lastname}
        </h1>
        <div className='flex items-center '>
          <Svg type='email' />
          <h2 className='text-second mb-'>{email}</h2>
        </div>
        <div className='flex items-center'>
          <Svg type='phone' />
          <h4 className='text-second'>{phone}</h4>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-full flex items-center justify-between  mt-4'>
            {userInfo.added ? (
              <button
                onClick={() => dispatch(removeFromTeams(userInfo))}
                className='flex px-2 py-1 bg-transparent w-fit text-second border border-second text-xs rounded-sm '
              >
                Remove from teams
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToTeams(userInfo))}
                className='flex px-2 py-1 bg-second w-fit border border-second text-primary text-xs rounded-sm'
              >
                Add to teams
              </button>
            )}
            <div className='flex items-center'>
              <button onClick={() => dispatch(fillingInput(userInfo))}>
                <Svg type='edit' />
              </button>
              <button
                onClick={() => dispatch(deleteUser(userInfo))}
                className=' ml-1'
              >
                <Svg type='trash' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
