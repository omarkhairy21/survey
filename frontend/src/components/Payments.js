import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckOut from 'react-stripe-checkout';

class Payments extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return(
      <StripeCheckOut 
        name="Emaily"
        description="$5 from 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token) }
        stripeKey="pk_test_QXmtd2cacnyvHAUj1NNB1nqh"
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckOut>
    );
  }
}


export default connect(null, actions)(Payments);