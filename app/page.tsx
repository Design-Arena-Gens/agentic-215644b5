'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'bangles' | 'earrings';
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Golden Spiral Bangles Set",
    price: 149.99,
    category: "bangles",
    image: "🔶",
    description: "Elegant set of 4 golden spiral bangles with intricate patterns"
  },
  {
    id: 2,
    name: "Diamond Studded Bangles",
    price: 299.99,
    category: "bangles",
    image: "💎",
    description: "Luxurious bangles adorned with premium cubic zirconia"
  },
  {
    id: 3,
    name: "Rose Gold Bangles Pair",
    price: 189.99,
    category: "bangles",
    image: "🌸",
    description: "Beautiful rose gold plated bangles with floral motifs"
  },
  {
    id: 4,
    name: "Traditional Kada Bangles",
    price: 129.99,
    category: "bangles",
    image: "⭐",
    description: "Classic thick kada style bangles with traditional designs"
  },
  {
    id: 5,
    name: "Crystal Drop Earrings",
    price: 79.99,
    category: "earrings",
    image: "💧",
    description: "Stunning crystal drop earrings perfect for evening wear"
  },
  {
    id: 6,
    name: "Pearl Stud Earrings",
    price: 59.99,
    category: "earrings",
    image: "⚪",
    description: "Elegant pearl studs for everyday sophistication"
  },
  {
    id: 7,
    name: "Hoop Earrings Gold",
    price: 99.99,
    category: "earrings",
    image: "⭕",
    description: "Classic gold-plated hoop earrings in medium size"
  },
  {
    id: 8,
    name: "Chandelier Earrings",
    price: 119.99,
    category: "earrings",
    image: "✨",
    description: "Ornate chandelier earrings with dangling crystals"
  },
  {
    id: 9,
    name: "Silver Bangle Stack",
    price: 109.99,
    category: "bangles",
    image: "⚪",
    description: "Set of 6 sleek silver bangles for a modern look"
  },
  {
    id: 10,
    name: "Geometric Stud Earrings",
    price: 69.99,
    category: "earrings",
    image: "🔷",
    description: "Contemporary geometric design studs in rose gold"
  }
];

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'bangles' | 'earrings'>('all');
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                ✨ Bangles & Earrings
              </h1>
              <p className="text-gray-600 mt-1">Elegant Jewelry Collection</p>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
            >
              🛒 Cart ({cart.length})
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-100 to-rose-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Discover Timeless Elegance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted bangles and earrings that complement your unique style
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter('bangles')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              filter === 'bangles'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            🔶 Bangles
          </button>
          <button
            onClick={() => setFilter('earrings')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              filter === 'earrings'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            💎 Earrings
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-amber-100 to-rose-100 p-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-7xl">{product.image}</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">🛒 Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 mt-2">Add some beautiful jewelry!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg"
                    >
                      <span className="text-4xl">{item.image}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-amber-600 font-bold">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition-all"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-3xl font-bold text-amber-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">✨ Bangles & Earrings</h3>
          <p className="text-gray-400 mb-6">
            Crafting elegance, one piece at a time
          </p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Shipping</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Returns</a>
          </div>
          <p className="text-gray-500 mt-8">
            © 2025 Bangles & Earrings. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
