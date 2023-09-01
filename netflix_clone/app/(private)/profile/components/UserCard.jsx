import { useRouter } from 'next/navigation'
import React from 'react'

const UserCard = ({image,name}) => {

    const router=useRouter()

  return (
    
    <div
        className="w-44 mx-auto cursor-pointer"
        onClick={() => router.push("/movies")}
    >
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <img
            draggable={false}
            className="w-max h-max object-contain"
            src={image}
            alt=""
        />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
        </div>
    </div>

  )
}

export default UserCard