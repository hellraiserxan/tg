import React from 'react';
//import Button from "../Button/Button"
import "./ProductItem.css"

const ProductItem = ({product,className,onAdd,img}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    return ( <div className = {'product'}>
        <img src = {product.img} className={'img'}/>
        <div className = {'title'}>{product.title}</div>
        <div className = {'description'}> {product.description}</div>
        <div>
            <button className = 'button'><strong>{product.price}</strong></button>
        </div>
        {/* <Button className = {'add-btn'} onClick = {onAddHandler}>
            Добавить в корзину
        </Button> */}
    </div> );
}
 
export default ProductItem;