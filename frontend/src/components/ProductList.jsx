import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products'

const ProductList = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 py-12">
            <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
