import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header-styles.scss"
import {auth} from "../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

let z = "asdf"

const Header = ({currentUser}) => {
    if (currentUser !== null){z=currentUser.displayName}
    console.log(currentUser)
    return (
        <>
            <div className="header">
                {z}
                <Link to='/' className='logo-container'>
                    <Logo className="logo"></Logo>
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='option' to='/'>
                        {} HOMEPAGE
                    </Link>

                    {currentUser ?
                        <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div> :
                        <Link className='option' to='/sign-in'>SIGN-IN</Link>
                    }
                    <CartIcon/>
                </div>
                <CartDropdown/>
            </div>
        </>
    )
}

const mapStateToProps= state=>({
    currentUser: state.user.currentUser

})

const mapDispatchToProps= ()=>({})
export default connect(mapStateToProps,mapDispatchToProps)(Header)