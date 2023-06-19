import React, { useState, useEffect } from 'react';

const HandleShow = (props) => {
    return(
        <div className='bg-red-500'>
            <ul>
        {props.newArray.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
        </div>
    )
}
function TestPage() {
  // Initialize the array state with a default array
  const [values, setValues] = useState(['apple', 'banana', 'orange']);

  // useEffect hook to load the saved data from localStorage
  useEffect(() => {
    const savedValues = localStorage.getItem('values');
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = event.target.elements.input.value;
    setValues([...values, newValue]);
    event.target.elements.input.value = '';
  };

  // useEffect hook to save the data to localStorage whenever the values state changes
  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" name="input" />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <HandleShow newArray={values} />
      
    </div>
  );
}

export default TestPage;