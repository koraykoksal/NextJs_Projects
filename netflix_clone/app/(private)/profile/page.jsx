import { metadata } from '@/app/layout'
import React from 'react'
import CardContainer from './components/CardContainer'

const Profile = () => {

  return (

    <div className='flex items-center justify-center mt-20'>

      <div className='flex flex-col'>

        <h1 className='text-center text-3xl p-10'>Who&#39;s watching ?</h1>

        <CardContainer/>

      </div>

    </div>
  )
}

export default Profile