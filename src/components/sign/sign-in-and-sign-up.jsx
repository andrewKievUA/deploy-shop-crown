import React from "react"
import "./sign-in-styles.scss"
import SignInComp from "../sign-in-comp/sign-in-comp";
import SignUp from "../sign-up/sign-up";


const SignInAndSignUp = ()=>{

    return(
        <div className="sign-in-and-sign-up">


            <SignInComp/>

            <SignUp/>
        </div>
    )

}

export default SignInAndSignUp


