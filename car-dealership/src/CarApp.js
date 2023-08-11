import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarApp() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get('https://api.npoint.io/6b49fadc38eab9e79911');
        setCars(response.data.cars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  const handleContactClick = (contactInfo) => {
    alert(`Contact the dealer:\n${contactInfo}`);
  };

  return (
    <div className="car-app">
      <header className="app-header">
        <h1>Car Dealership</h1>
      </header>
      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-item" key={index}>
            <img src={car.img_url} alt={car.model} />
            <div className="car-details">
              <h3>{car.brand} - {car.model}</h3>
              <p>Price: {car.price}</p>
              <p>Engine: {car.engine_type}</p>
              <p>Acceleration: {car.acceleration}</p>
              <p>Maximum Speed: {car.maximum_speed}</p>
            </div>
            <div className="contact-options">
              <button
                className="contact-button"
                onClick={() => handleContactClick(`Telephone: +254798491946\nGmail: abdulabass1738@gmail.com`)}
              >
                Contact Dealer
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="app-footer">
        <p>&copy; 2023 Car Dealership. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CarApp;
