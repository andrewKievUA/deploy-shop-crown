import React, {Component} from 'react';
import "./sign-in-styles.scss"
import CustomButton from "../custom-button/custom-button";
import {sighInWithGoogle,auth} from "../../firebase/firebase.utils";


class SignInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            text: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {email,password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '', password: ""})

        }catch (error){console.log(error)}




        console.log(this.state)
    }

    changeHandler = (event) => {
        const {value, name} = event.target
        console.log(value)
        //   this.setState({...this.state,[name]: value})
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className="sign-in2">
                <h2> I already Have an account</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label className="labels"> Email<br/>
                        <input className="inputs"
                               name="email"
                               type="email"
                               value={this.state.email}
                               onChange={this.changeHandler}
                               required
                               label="email"
                        />
                    </label>
                    <br/>
                    <label className="labels"> Password <br/>
                        <input className="inputs"
                               name="password"
                               type="password"
                               value={this.state.password}
                               onChange={this.changeHandler}
                               label="password"
                               required/>
                    </label>
                    <br/>
                    <br/>
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <br/>
                        <br/>
                        <CustomButton isGoogleSignIn onClick={() => sighInWithGoogle()}>Google Auth </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInComp;
