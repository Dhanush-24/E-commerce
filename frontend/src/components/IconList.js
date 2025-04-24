import React from 'react'
import { Link } from 'react-router-dom';
import  setCurrentProduct from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../actions/wishlistActions'
import { addToCart } from '../actions/cartActions'; 

function IconList({product}) {
 let dispatch=useDispatch()


let handleCurrentProduct=()=>{
  dispatch(setCurrentProduct(product))
}

const handleAddToWishlist = () => {
  dispatch(addToWishlist(product));
  alert(`${product.name || 'Product'} added to wishlist!`);
  // You might want to provide better visual feedback instead of an alert
};

const handleAddToCart = () => {
  dispatch(addToCart(product));
  alert(`${product.name || 'Product'} added to cart!`);
};

  return (
    <div>
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">

        <Link onClick={handleCurrentProduct} to={{pathname:'/details/'}}>

            <li className="icon">
              <span className="fas fa-expand-arrows-alt"></span>
            </li>
        </Link>

        <li className="icon mx-3" onClick={handleAddToWishlist}> {/* Use onClick to dispatch the action */}
          <span className="far fa-heart" style={{ cursor: 'pointer' }}></span> {/* Make it look clickable */}
        </li>

        <li className="icon" onClick={handleAddToCart} style={{ cursor: 'pointer' }}>
          <span className="fas fa-shopping-bag"></span>
        </li>


        </ul>
    </div>
  )
}

export default IconList