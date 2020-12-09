import {Component} from 'react';
import Links from './Links';

class LinkList extends Component{
  render(){
    return(
      <div className = "rightSection">
        <Links value = "Home" href = "#"></Links>
        <Links value = "About us" href = "#"></Links>
        <Links value = "Products" href = "#"></Links>
        <Links value = "Contact Us" href = "#"></Links>
      </div>
    )
  }
}

export default LinkList;