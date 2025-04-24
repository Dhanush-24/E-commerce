import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuyNowButton() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    setShowPaymentOptions(true);
    setOrderPlaced(false); // reset in case of multiple clicks
  };

  const handlePlaceOrder = () => {
    if (selectedMethod) {
      const orderDetails = {
        method: selectedMethod,
        date: new Date().toLocaleString(),
      };
      
      // Save order details in localStorage
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      setOrderPlaced(true);
      setShowPaymentOptions(false);

      // Redirect to Orders page after placing the order
      navigate('/orders');
    }
  };

  const handleCancel = () => {
    setShowPaymentOptions(false);
    setSelectedMethod(''); // clear selection
    setOrderPlaced(false); // ensure no thank you message
  };

  return (
    <div>
      <button onClick={handleBuyNow} disabled={showPaymentOptions} style={btnStyle}>
        Buy Now
      </button>

      {showPaymentOptions && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <h4>Select Payment Method</h4>
            <div style={radioContainerStyle}>
              {['UPI', 'Credit Card', 'Cash on Delivery'].map((method) => (
                <label key={method} style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedMethod === method}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    style={radioInputStyle}
                  />{' '}
                  {method}
                </label>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <button onClick={handlePlaceOrder} disabled={!selectedMethod} style={confirmStyle}>
                Place Order
              </button>{' '}
              <button onClick={handleCancel} style={cancelStyle}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div style={{ marginTop: '1rem', color: 'white' }}>
          🎉 Order placed successfully via <strong>{selectedMethod}</strong>!
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  backgroundColor: 'green',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
};

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  minWidth: '300px',
};

const radioContainerStyle = {
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
};

const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  fontSize: '1rem',
};

const radioInputStyle = {
  marginRight: '10px',
};

const confirmStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',
};

const cancelStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',
};

export default BuyNowButton;
