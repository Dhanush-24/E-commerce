import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../actions/wishlistActions';
import { addToCart } from '../actions/cartActions'; // If you have cart support
import Navbar from '../components/Navbar';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    alert("Item added to cart!");
  };

  return (
    <div>
      <Navbar/>
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {wishlistItems.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => handleRemove(item.id)} style={{ marginBottom: '5px' }}>Remove</button>
              <br />
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
