import React, { useEffect, useState } from 'react';
import './OrdersPage.css';


function OrdersPage() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('orderDetails'));
    if (savedOrder) {
      setOrderDetails(savedOrder);
    }
  }, []);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orderDetails ? (
        <div className="order-card">
          <h3>Order Details</h3>
          <p><strong>Payment Method:</strong> {orderDetails.method}</p>
          <p><strong>Order Date:</strong> {orderDetails.date}</p>
          <p><strong>Order Time:</strong> {orderDetails.time}</p>

          <div className="items-container">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="item-details">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <span><strong>Item:</strong> {item.name}</span>
                  <span><strong>Price:</strong> ₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No orders placed yet.</p>
      )}
    </div>
  );
}

export default OrdersPage;
