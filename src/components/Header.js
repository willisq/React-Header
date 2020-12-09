import {Component} from 'react';
import LinkList from './LinkList';
import logo from '../images/logo.svg';
import '../stylesheets/header.css';
import Logo from './Logo';
import Hamburguer from './Hamburger';
class Header extends Component {
  render(){
    return (
    <nav className = "nav">
      <Logo src = {logo} href = "#"></Logo>
        <LinkList></LinkList>
        <Hamburguer></Hamburguer>
    </nav>
  )
  }
}

export default Header;