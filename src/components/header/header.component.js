import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from './../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink  } from './header.styles';
import CartDropdownContainer from './../cart-dropdown/cart-dropdown.container';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
  
    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer >
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {
            currentUser ? 
            <OptionLink as='div' to='/' onClick={() => signOutStart()}>SIGN OUT</OptionLink> : 
            <OptionLink to="/signin">SIGN IN</OptionLink>
          }
          <CartIcon />
             
        </OptionsContainer>
        {
          hidden ? null : <CartDropdownContainer />
        }
      </HeaderContainer>
    )  
}
// state in here means root reducer
// passes top level state to each selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
