import React, {useState} from 'react';
import Button from "../Button/Button"
import './Header.css'
import Basket from '../../assets/icons/Busket.svg'
import Menu from '../../assets/icons/Menu.svg'
const Header = ({cartItems}) => {
    const [isOpen,setOpen] = useState(false);
    return ( <header className = {'header'}>
        <img
        src = {Basket}
        className = {'busket'} />
        {cartItems > 0 && <div className = "badge">{cartItems}</div>}
        <button className = {'menu_btn'} onClick = {()=>setOpen(!isOpen)}>
        <img
        src = {Menu}
        className = {'menu'} />
        <nav className = {`menu_listt ${isOpen ? "active" : ""}`}>
            <ul className = "menu_list_item">
                <li className = "menu_item">Профиль</li>
                <li className = "menu_item">Меню</li>
                <li className = "menu_item">Заказы</li>
                <li className = "menu_item">Настройки</li>
                <li className = "menu_item">Бонусы</li>
                <li className = "menu_item">Выход</li>
            </ul>
        </nav>
        </button>
    </header> );
}
 
export default Header;