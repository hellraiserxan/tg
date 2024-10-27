import React from 'react';
import Button from "../Button/Button"
import './Header.css'
import Basket from '../../assets/icons/Busket.svg'
import Menu from '../../assets/icons/Menu.svg'
const Header = () => {
    return ( <header className = {'header'}>
        <img
        src = {Basket}
        className = {'busket'} />
        <img
        src = {Menu}
        className = {'menu'} />
    </header> );
}
 
export default Header;