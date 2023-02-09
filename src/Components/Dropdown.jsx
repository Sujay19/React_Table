import React from 'react'
import Creatable from 'react-select/creatable';
const Dropdown = ({placeholderValue,optionData}) => {
  return (
    <div>
        <div className='flex justify-start items-center bg-white border focus:outline-none text-gray-400 font-medium rounded shadow focus:ring ring-gray-400'>
            <Creatable 
             placeholder= {placeholderValue}
             options={optionData}
             noOptionsMessage={()=>"name not found"}
             />
        </div>
    </div>
  )
}

export default Dropdown