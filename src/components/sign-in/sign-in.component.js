import React, { useState } from "react";
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButtom from './../custon-button/custon-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import "./sign-in.styles.scss";


const SignIn = ( { emailSignInStart, googleSignInStart } ) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ''});
  const { email, password } = userCredentials;
  
  const handleSubmit = e => {
    e.preventDefault();
    emailSignInStart(email, password);    
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({...userCredentials, [name]: value });
  }  
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email"
          name="email" 
          value={email}
          label="Email"
          required 
          handleChange={handleChange}
          />
        <FormInput
          type="password"
          name="password"
          value={password} 
          label="Password"
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButtom type="submit">Sign In</CustomButtom>
          <CustomButtom 
            type="button"
            onClick={googleSignInStart} isGoogleSignIn>
            Sign in with google
          </CustomButtom>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
