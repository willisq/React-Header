import {Component} from 'react';
class Hamburguer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleToggle = () => {
    this.setState({isActive: !this.state.isActive});
  }

   render(){
    const {isActive} = this.state;
    return (
      <div className = {`topNav ${isActive ? "change": ""}`} onClick = {this.handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
}
export default Hamburguer;