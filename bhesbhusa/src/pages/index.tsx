"use client"
import React from 'react';

function Header() {
  return (
    <div
      className="ml-8 bg-gray-800 text-white p-4 shadow-lg"
      style={{ borderTopRightRadius: '60px', borderBottomRightRadius: '60px', width: '90%' }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="logo-container flex items-center">
          <img
            src="/image.png"
            alt="Nepali people in traditional dress doing namaste"
            className="logo-image w-12 h-12 rounded-full object-cover shadow-md hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in-out animate-pulse mr-3"
          />
          <span className="logo-text text-xl font-bold text-white">BhesBhusa</span>
        </div>
        <nav className="flex items-center space-x-8 ml-auto">
          <a
            href="/"
            className="relative text-white hover:text-gray-300 transition-all duration-300 font-medium hover:scale-105 transform group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/tryon"
            className="relative text-white hover:text-gray-300 transition-all duration-300 font-medium hover:scale-105 transform group"
          >
            Try-On
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/about"
            className="relative text-white hover:text-gray-300 transition-all duration-300 font-medium hover:scale-105 transform group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/login"
            className="relative text-white hover:text-gray-300 transition-all duration-300 font-medium hover:scale-105 transform group bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 hover:shadow-lg"
          >
            Login
            <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-8"></span>
          </a>
        </nav>
      </div>
    </div>
  );
}

function TopBox() {
  const sections = [
    {
      title: "Virtual TryOns",
      description: "Nepali Authentic dresses",
      image: "/dress.png",
      buttonText: "Try Now",
      link: "/tryon",
      fullWidth: true,
    },
    {
      title: "Festives Session",
      description: "Explore cultural celebrations",
      image: "/culture.png",
      buttonText: "Visit",
      link: "/festives",
    },
    {
      title: "Artifacts",
      description: "Crafted by Women of Nepal",
      image: "/articrafts.png",
      buttonText: "Explore",
      link: "/artifacts",
    },
  ];

  return (
    <div className="pt-6 px-6 space-y-12">
      {/* Main Feature Box */}
      <div
        className="relative bg-gray-800 text-white max-w-6xl w-full rounded-xl mx-auto shadow-lg p-6 hover:shadow-2xl transition-all duration-500 border-2 border-blue-700 group overflow-hidden hover:scale-102 flex flex-col md:flex-row items-center gap-6"
      >
        <img
          src={sections[0].image}
          alt={sections[0].title}
          className="w-44 h-44 object-cover rounded-3xl shadow-md"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 group-hover:text-pink-200 transition-colors duration-300">
            {sections[0].title}
          </h2>
          <p className="text-white/90 mb-6">{sections[0].description}</p>
          <a href={sections[0].link} className="inline-block w-full md:w-auto group">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium transform group-hover:scale-x-105 shadow-md w-full md:w-48">
              {sections[0].buttonText}
            </button>
          </a>
        </div>
      </div>

      {/* Two Sub Boxes in Same Row */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {sections.slice(1).map((section, index) => (
          <div
            key={index}
            className="relative flex-1 bg-gray-800 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 border-2 border-blue-700 group overflow-hidden hover:scale-105 flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-40 h-40 object-cover rounded-3xl shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-pink-200 transition-colors duration-300">
                {section.title}
              </h2>
              <p className="text-white/90 mb-6">{section.description}</p>
              <a href={section.link} className="inline-block w-full md:w-auto group">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium transform group-hover:scale-x-105 shadow-md w-full md:w-48">
                  {section.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="pt-6 pb-8">
        <Header />
      </div>
      <div className="text-center mb-8">
        <h4 className="text-3xl font-bold text-red-600 mb-2">
          Created and Crafted by Women
        </h4>
        <div className="w-32 h-1 bg-red-500 mx-auto rounded-full"></div>
      </div>
      <TopBox />
    </div>
  );
}