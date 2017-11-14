import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from "../actions/actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name={'Emaily'}
        description={'$5 for 5 email credits'}
        amount={500}
        token={t => this.props.handleToken(t)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className={'btn'} id={'btn-credits'}>Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken })(Payments);
