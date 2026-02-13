import "../../style/fonts.css";
import "./NavBarStyle.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

function NavBar(){
  return(
    <nav className="">
      <div className="flex-container">
        <h1 className="font-lg font-sans-serif ">Eseller</h1>
        <div className="center">
          <SearchBar/>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

