import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import SignInAndSignUp from "./components/sign/sign-in-and-sign-up";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {displayName: "Please Login"}
        }
    }
    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){
            const userRef = await createUserProfileDocument(userAuth)
                console.log(userRef,"user ref from the app js")

                 userRef.onSnapshot(snapshot => {
                     this.setState({
                         currentUser:{
                             id:snapshot.id,
                             ...snapshot.data()
                         }
                     })
                     console.log(this.state)
                 })
            }
            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        //let {displayName}=this.state.currentUser
       // console.log(displayName)
        return (<>


                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/sign-in" component={SignInAndSignUp}/>
                </Switch>
            </>
        )
    }
}
export default App;
