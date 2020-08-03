import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from 'react-redux';
import { startLogin, startGoogleLogin } from "../../actions/auth";
import {setError, removeError} from "../../actions/ui";
import validator from "validator";

const LoginScreen = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.ui)
  const {msgError, loading} = state;
  const [form, setForm] = useForm({
    email:"",
    password:"",
  })
  const {email, password} = form
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(isFormValid()){
      dispatch(startLogin(email, password))
    }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)){
      dispatch(setError("email is not valid"))
      return false
    } else if (password.trim() === ""){
      dispatch(setError("you must put a password"))
      return false
    }
    dispatch(removeError())
    return true
  }

  return (
    <Fragment>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
      {msgError && <div className="auth__alert-error">
          {msgError}
        </div>}
        <input type="text" placeholder="email" name="email" className="auth__input" value={email} onChange={setForm}/>
        <input type="password" placeholder="password" name="password" className="auth__input" value={password} onChange={setForm}/>
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={loading}
        >Login</button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social media</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
            to="/auth/register"
            className="link"
        >Create new account</Link>
      </form>
    </Fragment>
  );
};

export default LoginScreen;
