import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import SignIn from "./components/sign/sign-in";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {auth} from "./components/firebase/firebase.utils";


class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser:{displayName:"Please Login"}
        }
    }
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user=>{
            this.setState({currentUser: user})
             console.log(user)
             console.log(this.state)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }


    render() {
        return (<>

                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/sign-in" component={SignIn}/>
                </Switch>
            </>
        )
    }
}
export default App;
