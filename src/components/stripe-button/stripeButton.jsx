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
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}

        />

    );
};

export default StripeButton;