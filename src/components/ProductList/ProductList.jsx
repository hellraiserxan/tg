import React, {useState,
    useCallback,
    useEffect
} from 'react';
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem';
import img1 from "../../assets/img/74 2.jpg";
import img2 from "../../assets/img/74 2.png";
import img3 from "../../assets/img/74 3.png";
import img4 from "../../assets/img/74 4.png";

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
const getTotalPrice = (items = []) =>{
    return items.reduce((acc,item) => {
        return acc+=item.price
    },0)
}

const ProductList = () => {
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
    <div className = 'text_menu'>МЕНЮ</div>
    <div className = {'menu_list'}>{menu.map(item=>(<span className={'menu_list_item'}>{item.title}</span>))}</div>
    <div className = {'list'}>
        {products.map(item =>(
            <ProductItem
                product = {item}
                onAdd = {onAdd}
                className = {'item'}
            />
        ))}
    </div>
    </div> );
}
 
export default ProductList;