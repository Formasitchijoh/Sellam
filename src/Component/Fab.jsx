import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Fab() {
  return (
    <button className="fixed bottom-4 right-4 rounded-full bg-blue-500 text-white p-4 shadow-lg hover:shadow-xl">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Fab />
    </div>
  );
}

export default App;