import {NavLink} from "react-router";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "../../style/fonts.css";
import "./NavBarStyle.css";


function NavBar(){
  return(
    <nav className="">
      <div className="box">
        <h1 className="font-sans-serif">Eseller</h1>
        <div className="searchbox">
          <SearchBar/>
        </div>
        <div className="auth-box">
          <NavLink to="/auth/login" end>
            <button className="login-btn font-sm">Login</button>
          </NavLink>
            
          <NavLink to="/auth/register" end>
            <button className="register-btn font-sm">Register</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

