import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import SignInAndSignUp from "./components/sign/sign-in-and-sign-up";
import {Route, Switch,Redirect} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";


class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser}=this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth){
            const userRef = await createUserProfileDocument(userAuth)


                 userRef.onSnapshot(snapshot => {
                     setCurrentUser({
                         currentUser:{
                             id:snapshot.id,
                             ...snapshot.data()
                         }
                     })

                 })
            }
            setCurrentUser( userAuth)


        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {


        return (<>


                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/sign-in"  render={()=>this.props.currentUser?(<Redirect to="/" />):(<SignInAndSignUp />)}  />
                </Switch>
            </>
        )
    }
}
const mapDispatchToProps =dispatch=>({
    setCurrentUser:user => dispatch(setCurrentUser(user))
})

const mapStateToProps= ({user})=>({
    currentUser: user.currentUser

})
export default connect(mapStateToProps,mapDispatchToProps) (App);

