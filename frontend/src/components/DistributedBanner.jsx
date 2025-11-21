import React from 'react'

const DistributedBanner = () => {
    return (
        <section className="bg-blue-600 text-white py-14">
            <div className="max-w-6xl mx-auto px-5 text-center">
                <h2 className="text-4xl font-bold">
                    Distributed Services Powered E-Commerce
                </h2>
                <p className="text-lg mt-4 opacity-90">
                    Our architecture uses microservices for payments, inventory,
                    authentication, and recommendation services — ensuring reliability,
                    scalability, and lightning-fast performance.
                </p>
            </div>
        </section>
    );
};

export default DistributedBanner;
