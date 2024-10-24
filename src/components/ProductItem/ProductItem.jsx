import React from 'react';
//import Button from "../Button/Button"
import "./ProductItem.css"
import img from "../../assets/img/74 2.jpg"
const ProductItem = ({product,className,onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    return ( <div className = {'product'}>
        <img src = {img} className={'img'}/>
        <div className = {'title'}>{product.title}</div>
        <div className = {'description'}> {product.description}</div>
        <div>
            <span><strong>{product.price}</strong> рублей</span>
        </div>
        {/* <Button className = {'add-btn'} onClick = {onAddHandler}>
            Добавить в корзину
        </Button> */}
    </div> );
}
 
export default ProductItem;