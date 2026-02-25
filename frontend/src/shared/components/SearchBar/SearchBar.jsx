import search from "../../assets/search.svg";
function SearchBar(){
  return(
    <div className="border border-gray-500 h-8 relative w-60 rounded-3xl">
      <button className="absolute top-0.5">
        <img src={search} alt="search"/>
      </button>
      <input className="absolute left-7 focus:outline-hidden top-0.5" placeholder="Search"/>
    </div>
  )
}
export default SearchBar;
