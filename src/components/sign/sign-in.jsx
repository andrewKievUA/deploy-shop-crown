import React from "react"
import "./sign-in-styles.scss"
import SignInComp from "../sign-in-comp/sign-in-comp";
import FormInput from "../form-input/form-input";


const SignIn = ()=>{

    return(
        <div className="sign-in">


            <SignInComp/>
            {/*{" "}*/}
            {/*<FormInput/>*/}
        </div>
    )

}

export default SignIn


