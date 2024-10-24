import React from 'react';
import Button from "../Button/Button"
import './Header.css'

const Header = () => {
    return ( <div className = {'header'}>
        <Button>Закрыть</Button>
        <span> className = {'username'}</span>
    </div> );
}
 
export default Header;