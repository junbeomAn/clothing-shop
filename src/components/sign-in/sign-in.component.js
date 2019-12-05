import React, { Component } from "react";

import FormInput from './../form-input/form-input.component';
import CustomButtom from './../custon-button/custon-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });  
    } catch (error) {
      console.error(error);
    }

    
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email"
            name="email" 
            value={this.state.email}
            label="Email"
            required 
            handleChange={this.handleChange}
            />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButtom type="submit">Sign In</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
