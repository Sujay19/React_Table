import React from 'react'
const listItems=[
    {
        name:"Project",
        id:1
    },
    {
        name:"Filter",
        id:2
    }
]

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 w-full h-20 fixed bg-black text-white'>
    <div>
    <h1 className='text-2xl mt-2'>Data Quality Check</h1>
    </div>
    <ul className='flex'>
    {
        listItems.map(({name,id})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200'>{name}</li>
        ))
    }
    
    </ul>
    </div>
  )
}

export default Navbar