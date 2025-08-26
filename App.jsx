import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-red-700 mb-6 drop-shadow-lg">🥟 Samosa Express</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-96">
        <p className="text-lg font-medium text-gray-700 mb-4">Hot & Crispy Samosas delivered to your door 🚀</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-orange-500 text-white text-lg font-bold rounded-xl hover:bg-orange-600 transition-all"
        >
          Order Samosa ({count})
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <div className="bg-yellow-200 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">🔥 Hot Deal</h2>
          <p>Buy 2 Get 1 Free on all samosas today!</p>
        </div>
        <div className="bg-pink-200 p-4 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">🥟 Fun Fact</h2>
          <p>The word "Samosa" comes from the Persian word *Sanbosag*.</p>
        </div>
      </div>
    </div>
  )
}