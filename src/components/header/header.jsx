import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header-styles.scss"
import {auth} from "../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";



const Header = ({currentUser,hidden}) => {

    return (
        <>
            <div className="header">
              
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
                {hidden?
                null:
                    <CartDropdown/>
                }

            </div>
        </>
    )
}

const mapStateToProps= ({user:{currentUser},cartReducer:{hidden}})=>({
    currentUser,
    hidden

})

const mapDispatchToProps= ()=>({})
export default connect(mapStateToProps,mapDispatchToProps)(Header)