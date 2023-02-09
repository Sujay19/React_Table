import React,{useState,useEffect} from 'react'
import Dropdown from './Dropdown'
import axios from "axios";

const Project = () => {
    const [projectdata, setProjectdata] = useState([]);

    useEffect(()=>{
        const arr=[]
        const getProjectdata=async()=>{
           const response= await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
           const data=await response.data;
           data.map((item)=>{
            return arr.push({value: item.name, label: item.name});
           })
            setProjectdata(arr)
        }
        getProjectdata();
    },[]);

 

  return (
    <div name="Project" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='flex flex-col w-full pt-20 h-full items-start ml-10 mx-auto'>
          <h1 className='text-3xl text-gray-400 font-bold border-b-4 border-gray-600'>Project Details</h1>
           <div className='w-full flex justify-center items-center'>
             <div className='flex flex-col w-180 justify-start items-center'>
                 <div className='flex flex-row px-4  justify-between mx-10 w-full'>
                      <div className='flex justify-center items-center w-90 '>
                       <p className=' text-gray-400 font-medium'>Project name</p>
                      </div>
                  
                     <div className='flex justify-center items-center w-90'>
                      <Dropdown placeholderValue="Select Project" optionData={projectdata}/>
                      </div>
                   </div>    
                   <div className='flex flex-row px-4  justify-between mx-10 w-full mt-8'>
                      <div className='flex justify-center items-center w-90 '>
                       <p className=' text-gray-400 font-medium'>Region</p>
                      </div>
                  
                     <div className='flex justify-center items-center w-90'>
                     <Dropdown placeholderValue="Select Region" optionData={projectdata}/>
                      </div>
                   </div>    
                   <div className='flex flex-row px-4  justify-between mx-10 w-full mt-8'>
                      <div className='flex justify-center items-center w-90 '>
                       <p className=' text-gray-400 font-medium'>Dataset</p>
                      </div>
                  
                     <div className='flex justify-center items-center w-90'>
                     <Dropdown placeholderValue="Select Dataset" optionData={projectdata}/>
                      </div>
                   </div>  
                   <div className='flex flex-row px-4  justify-between mx-10 w-full mt-8'>
                      <div className='flex justify-center items-center w-90 '>
                       <p className=' text-gray-400 font-medium'>Table</p>
                      </div>
                  
                     <div className='flex justify-center items-center w-90'>
                     <Dropdown placeholderValue="Select Table" optionData={projectdata}/>
                      </div>
                   </div>   
                   
               </div>  
           </div>
        </div>
    </div>
  )
}

export default Project