import {NavLink} from "react-router";
import SearchBar from "../SearchBar/SearchBar.jsx";

function NavBar(){
  return(
    <header className="h-12 relative">
      <nav className="w-full h-10 top-1 absolute">
        <div className="h-8 w-full absolute top-1 p-0 m-0 flex flex-row">
          <h1 className="text-3xl absolute">Eseller</h1>
          <div className="absolute w-full flex justify-center items-center">
            <SearchBar/>
          </div>
          <div className="absolute right-5 flex flex-row gap-2">
            <button className="bg-[#3BBEDB] text-white font-semibold w-18 h-8 rounded-2xl">login</button>
            <button className="bg-[#3BBEDB] text-white font-semibold w-18 h-8 rounded-2xl">register</button>
          </div>
        </div>
      </nav>
    </header>
    
  );
}
export default NavBar;

