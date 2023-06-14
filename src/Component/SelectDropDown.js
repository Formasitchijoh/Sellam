import React from 'react'
import { useState } from 'react'
import Select from 'react-select';

const SelectDropDown = ({selectItems}) => {
    const [selectedOption, setselectedOption] = useState(null)
    const filterOptions = (option, inputValue) => {
        return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
    }
    const handleChange = e => {
        setselectedOption(e);
    }


  return (
    <div style={{marginTop:'3em', width:'95%', marginLeft:'0.5em'}}> 
      <Select
      placeholder="Select Option"
      isClearable={true}
      value={selectedOption}
      options={selectItems}
      onChange={handleChange}
      getOptionLabel={e => (
        <div
        
        style={{display:'flex',alignItems:'center',width:'2em',lineHeight:'2em'}}
        >
            {e.icon}
            <span style={{marginLeft:5}}>{e.text}</span>
        </div>
      )} 

      filterOption={filterOptions}
      />
      {selectedOption && <div style={{marginTop:20,lineHeight:'25px'}}>
        <b>Selected Option:</b>{selectedOption.value}
        </div>}
    </div>
  )
}

export default SelectDropDown