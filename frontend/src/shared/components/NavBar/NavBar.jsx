import { useEffect,useState } from "react";
import {Link, NavLink} from "react-router";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar.jsx";
import shopping_cart from "../../assets/shopping_cart.svg";
import person from "../../assets/person.svg";
import setting from "../../assets/settings.svg";
import instance from "../../../utils/axiosConfig.js";

function NavBar(){
  const [auth, setAuth] = useState(false);
  
  useEffect(()=>{
    instance.get("/api/auth/authenticate")
      .then((response)=>{
        if(response.data.message == "authorize"){
          setAuth(true)
        }
        //console.log(response)
      });
  },[])

  return(
    <header className="h-12 relative">
      <nav className="w-full h-10 top-1 absolute">
        <Link to={"/"} className="absolute w-[80px] h-[36px] text-[24px] z-1">Eseller</Link>
        <div className="h-8 w-full absolute top-1 p-0 m-0 flex flex-row">
          <div className="absolute w-full flex justify-center items-center">
            <SearchBar/>
          </div>
          <div className={`absolute right-5 flex flex-row gap-2 ${auth?'hidden':'block'}`}>
            <Link to={"/auth/login"}>
               <button className="bg-[#3BBEDB] text-white font-semibold w-18 h-8 rounded-2xl">login</button>
            </Link>
            <Link to={"/auth/register"}>
              <button className="bg-[#3BBEDB] text-white font-semibold w-18 h-8 rounded-2xl">register</button>
            </Link>
          </div>
          <div className={`${auth?'block':'hidden'} absolute right-5 flex flex-row gap-5`}>
            
            <div>
              <img src={person}/>
              <p></p>
            </div>
            <Link to={"/cart"}>
              <button>
                <img src={shopping_cart} alt="shopping cart"/>
              </button>
            </Link>
            
            <Link to={"/setting"}>
              <img src={setting} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
    
  );
}
export default NavBar;

