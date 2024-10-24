import React, {useState,
    useCallback,
    useEffect
} from 'react';
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem';

const products = [
    {id: '1', title: 'Салат', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Курица', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Кетчуп', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Майонез', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Стол', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Помидор', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
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
    return ( <div className = {'list'}>
        {products.map(item =>(
            <ProductItem
                product = {item}
                onAdd = {onAdd}
                className = {'item'}
            />
        ))}

    </div> );
}
 
export default ProductList;