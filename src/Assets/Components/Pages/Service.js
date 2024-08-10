import React from 'react';
import '../../CSS/Service.css';

const services = [
  { title: 'Service One', description: 'Description for service one.' },
  { title: 'Service Two', description: 'Description for service two.' },
  { title: 'Service Three', description: 'Description for service three.' },
  { title: 'Service Four', description: 'Description for service four.' },
  { title: 'Service Five', description: 'Description for service five.' },
  { title: 'Service Six', description: 'Description for service six.' },
];

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);


function Service() {
  return (
    <div className="service-page">
    <h1>Our Services</h1>
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  </div>
  )
}

export default Service
