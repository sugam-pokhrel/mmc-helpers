'use client';
import React, { useState ,useEffect} from 'react';
import { BsFileImage } from 'react-icons/bs';
import { FiMoon, FiSun } from "react-icons/fi";
import { storage ,databases} from '../../appwrite';
import { ID } from 'appwrite';
import { Spinner } from 'react-spinners-css';
import Link from 'next/link';

const Form =  () => {
  const [name, setName] = useState('');
  const [idCardNumber, setIdCardNumber] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [submited,setsubmited]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating a delay to show the submission process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Perform form submission logic here, e.g., send data to an API
    console.log('Name:', name);
    console.log('ID Card Number:', idCardNumber);
    console.log('Image:', image);
const promise = storage.createFile(
    '64abd2b94b6ead0fed39',
    ID.unique(),
    image
);

promise.then(function (response) {

    console.log(response);
    const result = storage.getFileView('64abd2b94b6ead0fed39', response.$id)
    // Success
const promise = databases.createDocument(
    '64abfa0ea5c604515aaa',
    '64abfa2c4f461c12f42d',
    ID.unique(),
    {name:name,id:idCardNumber,image:result.href}
);
promise.then(function (response) {
  setIsSubmitting(false);
  resetForm();
  setsubmited(true)
    // Success
}, function (error) {
    alert('form not submitted') 
    setIsSubmitting(false);
    // Failure
});


}, function (error) {
    console.log('error while uploading image'); // Failure
});

   
  };

  const resetForm = () => {
    setName('');
    setIdCardNumber('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setImage(file);
      } else {
        window.alert('Only JPEG and PNG image formats are allowed!');
        setImage(null);
      }
    }
  };

const toggleDarkMode = () => {
    //   const body = document.body;
  //   body.setAttribute("data-theme", theme);
  // }, [theme]
  setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
};
const [theme, setTheme] = useState( "forest");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "forest" ? "light" : "forest");
    setIsDarkMode(!isDarkMode)
  };


  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);

    
  }, [theme]);


  if(submited){
    return (

    <div className={`flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'dark' : ''}`}>
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank you {name} for your response!</h2>
            <p className="text-lg text-gray-600">We appreciate your contribution.</p>
            <p className="text-lg text-gray-600">
            <Link href="/hello"> Click here to check development version</Link>.
            </p>
          </div>
          </div>
    )
  }

  if(isSubmitting){
    return (
  <div className="flex items-center justify-center h-screen">
    <Spinner color="#ffffff" size={16} /> Submitting...
      <div className="text-center">
        {/* Content of the centered component */}
                    
      </div>
    </div>
    ) 

                  
                
  }


  return (
      
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-end mt-4">
          
      <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
        </div>
        <h1 className="text-4xl text-center mb-4">Help Us with Your Data</h1>
        <p className="text-lg text-center text-gray-600">
          We are a community-driven application, and we need your help!
        </p>
        <form
          className={`bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} rounded-md shadow-md p-6`}
          style={{ border: isDarkMode ? '2px solid purple' : '2px solid black' }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name:
            </label>
            <input
            required
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="idCardNumber" className="block text-lg font-medium">
              ID Card Number:
            </label>
            <input
            required
              type="text"
              id="idCardNumber"
              placeholder="Enter your ID card number"
              className={`mt-1 block w-full px-4 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
              value={idCardNumber}
              onChange={(e) => setIdCardNumber(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-medium">
              <BsFileImage className="inline-block mr-2" size={18} />
              Image:
            </label>
            <input
            required
              type="file"
              id="image"
              className="mt-1 block w-full"
              accept=".jpeg, .jpg, .png"
              onChange={handleImageChange}
              disabled={isSubmitting}
            />
            <div className={`text-gray-400 mt-1 ${isDarkMode ? 'text-gray-500' : ''}`}>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="ID Card Photo"
                  className="max-w-full h-40 object-cover rounded-md"
                />
              ) : (
                <span>Insert your ID card photo clearly</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`mt-4 w-full py-2 text-lg font-medium text-white bg-indigo-500 rounded-md ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-600'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;