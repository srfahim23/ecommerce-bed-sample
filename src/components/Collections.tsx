import React from 'react';

const collections = [
  {
    title: 'Luxury Beds',
    description: 'Handcrafted beds for ultimate comfort',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80'
  },
  {
    title: 'Premium Mattresses',
    description: 'Engineered for perfect sleep',
    image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&q=80'
  }
];

const Collections = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative h-96">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{collection.title}</h3>
                <p className="text-lg">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;