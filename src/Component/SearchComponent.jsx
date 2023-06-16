import React,{useState} from 'react'
import Select from 'react-select';
const listArray = [
    {
        name:'Cash Crops',
        price:2000
    },
    {
        name:'Vegetables',
        price:2000
    },
    {
        name:'Cereals',
        price:2000
    },
]
const SearchComponent = () => {
    const [selectedOption, setselectedOption] = useState(null)
    const filterOptions = (option, inputValue) => {
        return option.data.name.toLowerCase().includes(inputValue.toLowerCase());
    }
    const handleChange = e => {
        setselectedOption(e.name);
    }
  return (
    <div className='w-full mb-10 mr-10 '> 
    <Select
    placeholder="Select Option"
    isClearable={true}
    value={selectedOption}
    options={listArray}
    onChange={handleChange}
    getOptionLabel={e => (
      <div>
          {e.icon}
          <span className='ml-5'>{e.name}</span>
      </div>
    )} 

    filterOption={filterOptions}
    />
    {selectedOption && <div style={{marginTop:20,lineHeight:'25px'}}>
      <b>Selected Option:</b>{selectedOption}
      </div>}
  </div>
  )
}

export default SearchComponent