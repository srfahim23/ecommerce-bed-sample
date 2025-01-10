import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80"
          alt="Luxury Bedroom"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Luxury Sleep Experience
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover our collection of handcrafted luxury beds and mattresses,
          designed for the perfect night's sleep.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;