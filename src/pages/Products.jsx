import { Search, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/products')
    .then((res) => {
      console.log("Fetched products:", res.data);
      setProducts(res.data);
    })
    .catch((err) => {
      console.error("Failed to fetch products", err);
    });
}, []);

  return (
    <div className="bg-[#eef7f1] min-h-screen py-10 px-4 md:px-16">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="./src/images/pexels-sevenstormphotography-439416 (1).jpg"
          alt="Construction Banner"
          className="w-full max-w-6xl h-56 md:h-72 object-cover rounded-xl shadow-md"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
          Shop All Products
        </h1>

        {/* Search */}
        <div className="relative w-full max-w-2xl mt-6">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products"
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#dff0e3] focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-4">
          {['Category', 'Price', 'Brand', 'Rating'].map((filter) => (
            <button
              key={filter}
              className="flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium shadow hover:bg-gray-100"
            >
              {filter} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-contain rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2">
                {product.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">{product.desc}</p>

              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                {product.highlights?.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-1">✔</span> {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-green-600">{product.price}</span>
                <button className="bg-green-600 text-white px-3 py-1.5 rounded-md text-xs hover:bg-green-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
