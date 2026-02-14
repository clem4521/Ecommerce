import "../../style/fonts.css";
import "./NavBarStyle.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

function NavBar(){
  return(
    <nav className="">
      <div class="box">
        <h1 className="font-sans-serif">Eseller</h1>
        <div className="searchbox">
          <SearchBar/>
        </div>
        <div class="auth-box">
          <button class="login-btn font-sm">Login</button>
          <button class="register-btn font-sm">Register</button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

