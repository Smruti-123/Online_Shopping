import React from 'react'
import firebase from './firebase'


import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { SentimentVerySatisfied } from '@material-ui/icons';
import Book from './Book.jpg'
import { blue } from '@material-ui/core/colors';


class Login extends React.Component {
  
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      window.location.replace("checkout");
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
    
  }
  
  render() {
   
    return (
      
      <div style={{/*marginRight:50,marginLeft:300,marginTop:50,marginBottom:50,*/background:`url(${Book})`,width:10000,height:1000}}>
        <div style={{marginRight:50,marginLeft:300,marginTop:200,marginBottom:50,}}>
        <label style={{fontFamily: "Georgia",fontSize: 50}}><b> User Login</b></label><hr style={{width:250}}/><br/>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <label style={{fontFamily: "Georgia",fontSize: 28}}>Enter Mobile No</label>
          <br></br><br></br>
          <input style={{fontSize: 20 }}type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button style={{fontSize: 20,backgroundColor:'lightblue' }} type="submit">Submit</button>
        </form>
<br></br><br></br><br></br>
        <label  style={{fontFamily: "Georgia",fontSize: 28}}>Enter OTP</label>
        <br></br><br></br>
        <form onSubmit={this.onSubmitOTP}>
          <input style={{fontSize: 20 }} type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button style={{fontSize: 20,backgroundColor:'lightblue' }} type="submit" variant="contained" color='primary' size="50">Submit</button>
        </form>
        </div>
        </div>
    )
  }
}
export default Login;
