export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Journals</h1>
          <p className="text-xl text-center text-gray-300 mt-4">Choose your path to greatness</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Burgundy Edition */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700">
              <div className="h-64 bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold">Burgundy Edition</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Burgundy Edition</h3>
                <p className="text-gray-300 mb-6">
                  Classic burgundy vegan leather with gold foil embossing. Perfect for the traditionalist who appreciates timeless elegance.
                </p>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li>✓ 160 GSM premium paper</li>
                  <li>✓ Lay-flat binding</li>
                  <li>✓ Gold foil embossing</li>
                  <li>✓ Caravaggio bookmark</li>
                  <li>✓ Elegant gift box</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-amber-400">$49</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Limited White Edition */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <div className="text-6xl mb-4">👑</div>
                  <h3 className="text-2xl font-bold">Limited White Edition</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold">Limited White Edition</h3>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">LIMITED</span>
                </div>
                <p className="text-gray-300 mb-6">
                  Exclusive white vegan leather with gold foil embossing. Only 100 pieces available worldwide.
                </p>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li>✓ 160 GSM premium paper</li>
                  <li>✓ Lay-flat binding</li>
                  <li>✓ Gold foil embossing</li>
                  <li>✓ Caravaggio bookmark</li>
                  <li>✓ Elegant gift box</li>
                  <li>✓ Limited edition numbering</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-amber-400">$79</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Sets */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Gift Sets</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Starter Set</h3>
                <p className="text-gray-300 mb-4">Perfect for beginners</p>
                <span className="text-2xl font-bold text-amber-400">$59</span>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">Premium Set</h3>
                <p className="text-gray-300 mb-4">For serious journalers</p>
                <span className="text-2xl font-bold text-amber-400">$89</span>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold mb-2">Collector's Set</h3>
                <p className="text-gray-300 mb-4">Ultimate experience</p>
                <span className="text-2xl font-bold text-amber-400">$129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
