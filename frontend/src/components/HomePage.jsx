import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex min-h-[500px] md:min-h-[570px] rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage