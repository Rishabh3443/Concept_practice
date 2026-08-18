import React from 'react'

const Filter = () => {
    
  return (
     <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50">
        
        {/* Discount */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage}%
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock */}
        <span className="absolute right-3 top-3 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">

        {/* Brand + Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {product.brand}
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>

          <span className="text-sm text-gray-400">
            ({product.reviews.length} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            $
            {(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
          Add to Cart
        </button>

      </div>
    </div>
  )
}

export default Filter
