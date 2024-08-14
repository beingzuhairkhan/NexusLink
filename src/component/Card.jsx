import React from 'react';
import { FiCopy } from 'react-icons/fi';
import photo from '../assets/clips2.jpeg';
import lms from '../assets/lms.png';
import healthcare from '../assets/healthcare.png';
import wanderlust from '../assets/wanderlust.jpg';
import weather from '../assets/weather.png';

const links = [
    { href: "https://zuhairfolio.netlify.app/", image: photo, title: "Portfolio" },
    { href: "https://garudainstitute-edu.netlify.app/", image: lms, title: "Garuda Institute" },
    { href: "https://ai-healthcare-6n8s.vercel.app/", image: healthcare, title: "AI Healthcare" },
    { href: "https://wanderlusts-xbjo.onrender.com/listings", image: wanderlust, title: "Wanderlust" },
    { href: "https://bucolic-hamster-8a0a67.netlify.app/", image: weather, title: "Weather App" }
];

const Card = () => {
    const handleCopy = (link) => {
        navigator.clipboard.writeText(link);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 px-4">
            <div className="space-y-4 w-full max-w-2xl text-white hover:text-black ">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" flex items-center justify-between bg-gray-900 rounded-lg p-2 shadow-md w-full h-16 hover:bg-gray-100 transition-all duration-300"
                    >
                        <img src={link.image} alt={link.title} className="w-12 h-12 rounded-md" />
                        <span className="text-sm font-medium text-white text-center flex-grow px-2 hover:text-black">{link.title}</span>
                        <FiCopy
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleCopy(link.href);
                            }}
                            className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Card;
