import React from 'react'
import IconList from './IconList'

let WomensItems=({product})=>{
    return(
    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div className="product"> 
            <img src={product.image} alt={product.name}/>
            <IconList product={product}/>
        </div>
        <div className="tag bg-red">sale</div>
        <div className="title pt-4 pb-1">{product.name}</div>
        <div className="d-flex align-content-center justify-content-center"> 
            <span className="fas fa-star"></span> 
            <span className="fas fa-star"></span> 
            <span className="fas fa-star"> </span> 
            <span className="fas fa-star"></span> 
            <span className="fas fa-star"></span> 
        </div>
        <div className="price">{product.price}</div>
                
 
    </div>
    )
}


export default WomensItems