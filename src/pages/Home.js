import React from 'react'
import { useSelector } from 'react-redux'

//Components
import Form from '../components/Form'
import Users from '../components/Users'
import Links from '../components/Links'

const Home = () => {
  const show = useSelector(state => state.form.show)

  return (
    <div className='bg-main h-[100vh] flex flex-col items-center justify-center p-8'>
      {/* <Form /> */}
      {show && (
        <div className='bg-gray-800/[0.6] absolute w-full h-[100vh] z-50 flex items-center justify-center'>
          <Form />
        </div>
      )}
      <Links />
      <Users />
    </div>
  )
}

export default Home
