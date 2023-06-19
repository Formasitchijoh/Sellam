import React, { useState } from 'react';

const TestPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="flex items-center justify-center w-full h-48 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg bg-red-800">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="h-full rounded-lg" />
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
      {selectedImage && (
        <div className="mt-4 bg-red-500">
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="h-24 rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default TestPage;