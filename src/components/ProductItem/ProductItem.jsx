import React from 'react';
//import Button from "../Button/Button"
import "./ProductItem.css"

const ProductItem = ({product,className,addToCart,img}) => {
    
    return ( <div className = {'product'}>
        <img src = {product.img} className={'img'}/>
        <div className = {'title'}>{product.title}</div>
        <div className = {'description'}> {product.description}</div>
            <button onClick = {addToCart} className = 'button'><strong>{product.price}</strong></button>
    
        {/* <Button className = {'add-btn'} onClick = {onAddHandler}>
            Добавить в корзину
        </Button> */}
    </div> );
}
 
export default ProductItem;