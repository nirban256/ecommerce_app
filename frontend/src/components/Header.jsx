import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600">
                    Distributed E-Commerce
                </h1>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Cart</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
