import React, { useState } from 'react';

const TestPage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = () => {
    // Do something with the selected image, e.g., upload it to a server
    console.log(image);
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="flex items-center justify-center w-full h-48 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Selected Image" className="h-full rounded-lg" />
        ) : (
          <span className="text-gray-500">Select an image</span>
        )}
      </div>
      <div className="mt-4">
        <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" id="image-upload" />
        <label htmlFor="image-upload" className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600 transition duration-200 ease-in-out">
          Select Image
        </label>
      </div>
      {image && (
        <button type="button" onClick={handleImageUpload} className="mt-4 w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          Upload Image
        </button>
      )}
    </div>
  );
};

export default TestPage;