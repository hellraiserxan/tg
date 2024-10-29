import React, {useState,
    useCallback,
    useEffect
} from 'react';
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem';
import img1 from "../../assets/img/74 2.svg";
import img2 from "../../assets/img/74 3.svg";
import img3 from "../../assets/img/74 4.svg";
import img4 from "../../assets/img/74 5.svg";

import new1 from "../../assets/img/Rectangle 15.svg"
import new2 from "../../assets/img/Rectangle 16.svg"
import new3 from "../../assets/img/Rectangle 17.svg"
import Header from '../Header/Header';

const products = [
    {id: '1', title: 'УНАГИ ЧУКА', price: '340 р', description: 'сыр моцарелла, сливки, куриное филе копченое, шампиньоны',img:img1},
    {id: '2', title: 'СЯКЕ УНАГИ МИКС', price:'600 р' , description: 'сыр сливочный, лосось, угорь, огурец, соус спайс, соус терияки',img:img2},
    {id: '3', title: 'КРЕВЕТКА ТИГРОВАЯ', price: '560 р', description: 'лимон, салат айсберг, лимон, соус терияки',img:img3},
    {id: '4', title: 'СУП ТОМ-ЯМ', price: '280 р', description: 'Зкокосовое молоко, куриный бульон, креветки тигровые',img:img4},
    {id: '5', title: 'УНАГИ ЧУКА', price: '340 р', description: 'сыр моцарелла, сливки, куриное филе копченое, шампиньоны',img:img1},
    {id: '6', title: 'СЯКЕ УНАГИ МИКС', price: '600 р', description: 'сыр сливочный, лосось, угорь, огурец, соус спайс, соус терияки',img:img2},
    {id: '7', title: 'КРЕВЕТКА ТИГРОВАЯ', price: '560 р', description: 'лимон, салат айсберг, лимон, соус терияки',img:img3},
    {id: '8', title: 'СУП ТОМ-ЯМ', price: '280 р', description: 'кокосовое молоко, куриный бульон, креветки тигровые',img: img4},
]

const menu = [
    {id:'1', title: 'Японская кухня'},
    {id:'1', title: 'Итальянская кухня'},
    {id:'1', title: 'Закузски'},
    {id:'1', title: 'Десерты'},
    {id:'1', title: 'Напитки'}
]
const newProducts = [
    {id:'1', title: 'Жульен', price: "340 р" , new: new1},
    {id:'1', title: 'Салат с говядиной', price: "469 р", new: new2},
    {id:'1', title: 'Суши с сыром', price: "480 р" , new:new3},
]
const getTotalPrice = (items = []) =>{
    return items.reduce((acc,item) => {
        return acc+=item.price
    },0)
}

const ProductList = () => {
    const [cartItems, setCartItems] = useState(0);
    const addToCart = () =>{
        setCartItems(prevItems => prevItems+1);
        console.log(cartItems)
    }
    const [addedItems, setAddedItems] = useState([]);
    const onSendData = useCallback(()=>{
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            // queryId,
        }
        fetch('#',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },[addedItems])
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id !== product.id);
        let newItems = [];
        if(alreadyAdded){
            newItems = addedItems.filter(item => item.id !== product.id);
        
        }
        else{
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems)
    }
    return (<div> 
         <Header
         cartItems = {cartItems}/>
        <div className = 'text_new'>НОВИНКИ</div>
    <div className = "newprod_list">
        {newProducts.map(newProd=>(<div className = "newProd">
            <img
            src = {newProd.new}
            className = "new_img"
            />
            <div className = "descrip">
            <div>{newProd.title}</div>
            <div>{newProd.price}</div>
            </div>
        </div>))}
    </div>
    <div className = 'text_menu'>МЕНЮ</div>
    <div className = {'menu_list'}>{menu.map(item=>(<div className={'menu_list_item'}><strong>{item.title}</strong></div>))}</div>
    <div className = {'list'}>
        {products.map(item =>(
            <ProductItem
                product = {item}
                addToCart = {addToCart}
                className = {'item'}
            />
        ))}
    </div>
    </div> );
}
 
export default ProductList;