import React from "react"
import "./sign-in-styles.scss"
import SignInComp from "../sign-in-comp/sign-in-comp";
import SignUp from "../sign-up/sign-up";



const SignIn = ()=>{

    return(
        <div className="sign-in">


            <SignInComp/>

            <SignUp/>
        </div>
    )

}

export default SignIn


