import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header-styles.scss"
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import {createStructuredSelector} from 'reselect'
import {selectCardHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selectors"




const Header = ({currentUser,hidden}) => {
 //   console.log(hidden,"hidden")

    return (
        <>
            <div className="header">
              
                <Link to='/' className='logo-container'>
                    <Logo className="logo"></Logo>
                </Link>
                <div className='options'>

                    <Link className='option' to='/'>
                        {} HOMEPAGE
                    </Link>

                    <Link className='option' to='/shop'>
                        SHOP
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

const mapStateToProps= createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCardHidden
})

const mapDispatchToProps= ()=>({})
export default connect(mapStateToProps,mapDispatchToProps)(Header)