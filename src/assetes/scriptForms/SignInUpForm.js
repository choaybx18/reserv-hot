import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function SignInUpForm() {
  const navigate = useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };
//-------------------------------------------------------------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    // Retrieve the form input values
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
  
    // Perform your login logic here
    if (email && password) {
      try {
        // Make an API request to authenticate the user
        const response = await fetch('YOUR_LOGIN_API_ENDPOINT', { // Replace with your login API endpoint URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // Assuming the login is successful, you can redirect to the welcome page
          navigate('/welcome');
        } else {
          // Handle the API response for login error
          const errorData = await response.json();
          alert(`Login failed: ${errorData.message}`);
        }
      } catch (error) {
        // Handle any network or server errors
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    } else {
      alert('Please fill in all the required fields');
    }
  };
  //------------------------------------------------------------------------------------
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // Retrieve the form input values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
  
    // Perform your sign-up logic here
    if (name && email && password) {
      try {
        // API request to create a new user
        const response = await fetch('https://example.com/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
  
        if (response.ok) {
          // Assuming the sign-up is successful, you can redirect to the welcome page
          navigate('/welcome');
        } else {
          // Handle the API response for sign-up error
          const errorData = await response.json();
          alert(`Sign-up failed: ${errorData.message}`);
        }
      } catch (error) {
        // Handle any network or server errors
        console.error('Error creating user:', error);
        alert('An error occurred during sign-up. Please try again later.');
      }
    } else {
      alert('Please fill in all the required fields');
    }
  };

  // ---------------------------- Facebook--------------------------------
  useState(() => {
    // Load the Facebook SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // Initialize the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1393634898159776', // Replace with your actual App ID
        cookie: true, // Enable cookies to allow the server to access the session
        xfbml: true, // Parse social plugins on this page
        version: 'v15.0', // Specify the version of the Facebook Graph API
      });
    };
  }, []);
  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.status === 'connected') {
          // User is logged in with Facebook and authorized your app
          const accessToken = response.authResponse.accessToken;
          // You can now make API requests using the accessToken

          // Example: Redirect to the welcome page
          navigate('/welcome');
        } else {
          // User cancelled the Facebook login or didn't authorize your app
          alert('Facebook login was not successful. Please try again.');
        }
      },
      { scope: 'email' } // Specify the required permissions
    );
  };
  const handleFacebookSignUp = () => {
    window.FB.login(
      (response) => {
        if (response.status === 'connected') {
          // User is logged in with Facebook and authorized your app
          const accessToken = response.authResponse.accessToken;
          // You can now make API requests using the accessToken
  
          // Example: Redirect to the welcome page
          navigate('/welcome');
        } else {
          // User cancelled the Facebook login or didn't authorize your app
          alert('Facebook sign-up was not successful. Please try again.');
        }
      },
      { scope: 'email' } // Specify the required permissions
    );
  };
  //-----------------------------------------------------------------------------------------------
  return (
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
      <form onSubmit={handleSignUp}>
       
          <h1><i className="col" >Create Account</i></h1>
          <br></br>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="btnsin" >Sign Up </button>
         
          <br></br>
          <span>or use social media for registration</span>
          <div className="social-container">
            <a href="#" onClick={handleFacebookSignUp} className="social" style={{ backgroundColor: '#3b5998 ' }}><i className="fab fa-facebook-f" style={{ color: 'white' }}></i></a>
            <a href="#" className="social" style={{ backgroundColor: '#db4a39' }}><i className="fab fa-google-plus-g" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"style={{ backgroundColor: '#00acee' }}><i className="fab fa-twitter" style={{ color: 'white' }}></i></a>
          </div>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1><i className="col2" >Log in</i></h1>
          <br></br>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="btnlog" >Log in</button>
          <br></br>
          <span>or use social media for login</span>
          <div className="social-container">
            <a href="#" onClick={handleFacebookLogin} className="social" style={{ backgroundColor: '#3b5998 ' }}><i className="fab fa-facebook-f" style={{ color: 'white' }}></i></a>
            <a href="#" className="social" style={{ backgroundColor: '#db4a39' }}><i className="fab fa-google-plus-g" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"style={{ backgroundColor: '#00acee' }}><i className="fab fa-twitter" style={{ color: 'white' }}></i></a>
          </div>
        
        </form>
         
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="btnghost" onClick={handleSignInClick}>Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <br></br>
            <button className="btnghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInUpForm;
