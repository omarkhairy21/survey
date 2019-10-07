import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
        case false:
          return <li><a href="/auth/google">Login With Google</a></li>;
        default:
          return[
            <li key="1"><Payments /></li>,
            <li key="3" style={{margin: '0 10px'}}>
              Credits: {this.props.auth.credits}
            </li>,
            <li key="2"><a href="/api/logout"> Logout</a></li>
          ] 
    }
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
 auth  
})

export default connect(mapStateToProps)(Header);
