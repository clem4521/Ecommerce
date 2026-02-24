import {NavLink} from "react-router";
import axios from "axios";
import "../styles/login.css";
import "../../../shared/style/fonts.css";
function LoginPage(){
  const instance = axios.create({
    baseURL:"http://localhost:8080"
  });
  async function login(){
    let emailField = document.getElementById("emailValue")?.value;
    let passwordField = document.getElementById("passwordValue")?.value;
    console.log(emailField,passwordField);
    try {
      await instance.post("/api/auth/login",{
        email:emailField,
        password:passwordField
      }).then((response)=>{
          console.log(response)
      });
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <div className="outer-container-login">
      <div className="inner-container-login">
        <div className="">
          <h2 className="login-heading font-sans-serif">Login</h2>
        </div>
        <input className="login-inputs" placeholder="Email" id="emailValue"/>
        <input className="login-inputs" placeholder="Password" type="password" id="passwordValue"/>
        <div className="font-sans-serif login-helper">
          <NavLink to="/auth/register" end>
            <p className="login-create">Create a new account</p>
          </NavLink>
          <p className="login-create">Forgot password</p>
        </div>
        <div className="login-btn-2-div">
          <button className="login-btn-2" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
