import React from 'react';
import Button from "../Button/Button"
import './Header.css'
import Basket from '../../assets/icons/Busket.svg'
import Menu from '../../assets/icons/Menu.svg'
const Header = () => {
    return ( <div className = {'header'}>
        <img
        src = {Basket}
        className = {'busket'} />
        <img
        src = {Menu}
        className = {'busket'} />
    </div> );
}
 
export default Header;