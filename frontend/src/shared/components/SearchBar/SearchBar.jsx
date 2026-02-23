import "./SearchBarStyle.css";
import search from "../../assets/search.svg";
function SearchBar(){
  return(
    <div className="search-container">
      <button className="search-button">
        <img src={search} alt="search"/>
      </button>
      <input className="search-input" placeholder="Search"/>
    </div>
  )
}
export default SearchBar;
