import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import BuyNowButton from '../components/BuyNowButton';
import Navbar from '../components/Navbar';

function CartedItems() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Save the order details in localStorage
    localStorage.setItem('orderDetails', JSON.stringify({
      method: paymentMethod,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      items: cart,
    }));

    // Redirect to OrdersPage
    window.location.href = '/orders'; // Adjust according to your routes
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <Navbar />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
              <h4>{item.title || item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <button onClick={() => handleRemove(item.id)} style={{ backgroundColor: 'crimson', color: '#fff' }}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

          {/* Payment Method Selection */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Select Payment Method</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              {['UPI', 'Credit Card', 'Cash on Delivery'].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    onChange={handlePaymentChange}
                    checked={paymentMethod === method}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleBuyNow}
            style={{
              marginTop: '1rem',
              backgroundColor: 'green',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            <BuyNowButton />
          </button>
        </>
      )}
    </div>
  );
}

export default CartedItems;
