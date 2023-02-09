import React,{useState} from 'react'
import Input from './Input'
import TableComp from './TableComp';


const FilterComponent = () => {
  const [collumn, setCollumn] = useState("");
  const handleCollumnChange=(e)=>{
    setCollumn(e.target.value);
  }

  return (
    <div name="Filter" className='h-screen w-full bg-gradient-to-b to-black from-gray-800'>
        <div className='flex flex-col w-full  h-full items-start ml-10'>
          <h1 className='text-3xl text-gray-400 font-bold border-b-4 border-gray-600'>Add Filter</h1>
          <div className='flex flex-row w-full h-full justify-start items-start'>
               <div className='w-full flex  flex-col justify-start items-center'>
                 <div className='flex justify-start flex-row items-center '>
                   <p className=' text-gray-400 font-medium '>Collumn</p>
                   <Input placeholder="Add Collumn" name="addressTo" type="text" handleChange={handleCollumnChange}/>
                 </div>
                 <div className='flex justify-start flex-row items-center'>
                   <p className=' text-gray-400 font-medium'>Collumn</p>
                   <Input placeholder="Add Collumn" name="addressTo" type="text" handleChange={handleCollumnChange}/>
                 </div>
               </div>
               <div className='w-full flex  flex-col justify-start items-center'>
                 <div className='flex justify-start flex-row items-center'>
                   <p className=' text-gray-400 font-medium'>Collumn</p>
                   <Input placeholder="Add Collumn" name="addressTo" type="text" handleChange={handleCollumnChange}/>
                 </div>
                 <div className='flex justify-start flex-row items-center'>
                   <p className=' text-gray-400 font-medium'>Collumn</p>
                   <Input placeholder="Add Collumn" name="addressTo" type="text" handleChange={handleCollumnChange}/>
                 </div>
               </div>
          </div>
        </div>  
    </div>
  )
}

export default FilterComponent