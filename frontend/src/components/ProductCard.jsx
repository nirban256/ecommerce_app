import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-blue-600">₹{product.price}</p>

                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
