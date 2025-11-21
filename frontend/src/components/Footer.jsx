import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto text-center">
                <p>© {new Date().getFullYear()} Distributed E-Commerce System</p>
                <p className="text-sm opacity-70 mt-2">Scalable · Reliable · Fast</p>
            </div>
        </footer>
    );
};

export default Footer;
