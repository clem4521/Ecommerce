import "../styles/login.css";
import "../../../shared/style/fonts.css";
import {NavLink} from "react-router";
function LoginPage(){
  return(
    <div className="outer-container-login">
      <div className="inner-container-login">
        <div className="">
          <h2 className="login-heading font-sans-serif">Login</h2>
        </div>
        <input className="login-inputs" placeholder="Email"/>
        <input className="login-inputs" placeholder="Password"/>
        <div className="font-sans-serif login-helper">
          <NavLink to="/auth/register" end>
            <p className="login-create">Create a new account</p>
          </NavLink>
          <p className="login-create">Forgot password</p>
        </div>
        <div className="login-btn-2-div">
          <button className="login-btn-2">Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
