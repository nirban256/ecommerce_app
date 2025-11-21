import React from 'react'

const services = [
    { name: "Auth Service", status: "Healthy" },
    { name: "Inventory Service", status: "Healthy" },
    { name: "Payment Service", status: "Degraded" },
    { name: "Recommendations", status: "Healthy" },
    { name: "Notifications", status: "Down" },
]

const statusColors = {
    Healthy: "text-green-600 bg-green-100",
    Degraded: "text-yellow-600 bg-yellow-100",
    Down: "text-red-600 bg-red-100"
}

const ServiceStatus = () => {
    return (
        <section className="max-w-6xl mx-auto py-12 px-5">
            <h3 className="text-2xl font-semibold mb-6">Service Status</h3>

            <div className="grid md:grid-cols-3 gap-4">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg p-5 bg-white shadow-sm"
                    >
                        <h4 className="text-lg font-bold mb-3">{service.name}</h4>
                        <p
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[service.status]}`}
                        >
                            {service.status}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceStatus;
