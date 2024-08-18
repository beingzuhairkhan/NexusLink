import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import photo from '../src/assets/clips2.jpeg';
import Link from './component/Link';
import Card from './component/Card';
import { PiLinktreeLogoBold } from "react-icons/pi";


function App() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Linktree',
        text: 'Check out these amazing projects!',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Sharing not supported on this browser.');
    }
  };

  return (
    <div className="relative mt-10 px-4 sm:px-6 md:px-8 lg:px-10 ">
      <div className="relative flex items-center justify-center">
        <img
          className="w-[90px] h-[90px] rounded-full border-2 border-gray-500"
          src={photo}
          alt="description"
        />
        <FiShare2
          onClick={handleShare}
          className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200 absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-6 lg:right-[380px]"
          size={24}
        />
      </div>

      <center>
      <p className="mt-2 text-md sm:text-2xl font-light bg-gradient-to-r text-gray-900 font-dancing-script">
  @Zuhair_Khan
</p>





        <div className="flex items-center justify-center mt-5 gap-2 sm:gap-3 text-lg sm:text-2xl  tracking-wide">
          <h1>Web Dev</h1>
          <h1>▪ Programmer</h1>
          <h1>▪ Web3</h1>
          <h1>▪ GenAI</h1>
        </div>

        <div className="flex justify-center items-center mt-4">
          <p className="text-base sm:text-lg text-gray-700 font-medium tracking-wide">
            3rd Year B.E. Computer Science Student @mhssce
          </p>
        </div>

        <Link />
        <Card />


        <a
          href="https://github.com/beingzuhairkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center mt-8 text-gray-800 hover:text-gray-500 transition-colors duration-200"
        >
          <PiLinktreeLogoBold  className="text-4xl mr-2 mt-4 mb-4" />
          <h1 className="text-2xl font-semibold">NexusLink</h1>
        </a>

  
        <hr className="w-3/4 border-gray-300 mt-4" />

  
        <p className="text-sm text-gray-600 mt-3 mb-3">
          Built and designed by Zuhair Khan
        </p>
      </center>
    </div>
  );
}

export default App;
