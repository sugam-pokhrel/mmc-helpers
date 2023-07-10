// import { useState  } from 'react';
// import 'tailwindcss/tailwind.css';
// import 'daisyui/dist/full.css';
import Form from './Form'
export default function Home() {  
  
  // const [name, setName] = useState('');
  // const [idCardNumber, setIdCardNumber] = useState('');
  // const [image, setImage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic here, e.g., send data to an API
  //   console.log('Name:', name);
  //   console.log('ID Card Number:', idCardNumber);
  //   console.log('Image:', image);
  // };

  // return (
  //   <div className="flex flex-col items-center justify-center h-screen">
  //     <h1 className="text-4xl mb-8">Submit Data</h1>
  //     <form className="w-64 p-4 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
  //       <div className="mb-4">
  //         <label htmlFor="name" className="text-lg font-medium text-gray-800">
  //           Name:
  //         </label>
  //         <input
  //           type="text"
  //           id="name"
  //           className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label htmlFor="idCardNumber" className="text-lg font-medium text-gray-800">
  //           ID Card Number:
  //         </label>
  //         <input
  //           type="text"
  //           id="idCardNumber"
  //           className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
  //           value={idCardNumber}
  //           onChange={(e) => setIdCardNumber(e.target.value)}
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label htmlFor="image" className="text-lg font-medium text-gray-800">
  //           Image:
  //         </label>
  //         <input
  //           type="file"
  //           id="image"
  //           className="w-full mt-2"
  //           onChange={(e) => setImage(e.target.files[0])}
  //         />
  //       </div>
  //       <button
  //         type="submit"
  //         className="w-full py-2 mt-4 text-lg font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
  //       >
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  // );


  return (
    <>
    <Form />
    </>
  )
};