import React from 'react';

import StripeCheckout from "react-stripe-checkout"
const  onToken = token=>{
    console.log(token)


}

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51JtqQVBiTyDDsdg7FLsDGoCfpvlkYx0Xpm6CHI4pknMnDou9HYw17m5SfHkMId6niCHbud212PjrehIrehaA2zpF00DXLBFDql"
    return (
        <StripeCheckout
        label="Pay Now with card"
        name="Crown clothing Ltd."
        billingAddress
        shippingAddress
        image="https://assets.bigcartel.com/account_images/2590826/Krown+Logo+Circle+Black.png?auto=format&fit=max&h=1200&w=1200"  
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}

        />

    );
};

export default StripeButton;