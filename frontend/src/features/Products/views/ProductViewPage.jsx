import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import instance from "../../../utils/axiosConfig.js";
import Layout from "../../../shared/components/Layout.jsx";
import NavBar from "../../../shared/components/NavBar/NavBar.jsx";
import Footer from "../../../shared/components/Footer.jsx";


function ProductViewPage(){
  let {productId} = useParams();
  const [price,setPrice] = useState(0);
  const [name,setName] = useState("");
  const [auth,setAuth] = useState(false);
  const [status,setStatus] = useState(true);
  const [user,SetUser] = useState(0);
  //console.log(productId);
  
  
  
  useEffect(()=>{
    instance.get(`/api/products/${productId}`)
      .then(function(response){
        //console.log(response.data.results[0].price);
        setPrice(response.data.results[0].price);
        setName(response.data.results[0].name);
      })
    .catch((error)=>{
        console.log(error);
      })
  },[]);

  useEffect(()=>{
    instance.get("/api/auth/authenticate")
      .then((response)=>{
        if(response.data.message == "authorize"){
          setAuth(true)
          SetUser(response.data.info.id)
        }
      });
  },[])

  const buyProduct = () =>{
    if(auth){
        try {
        instance.post("/api/carts",{
          userID:`${user}`,
          productID:`${productId}`
        }).then((res)=>{
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  
  return(
    <div>
      <NavBar/>
      
      <main className="right-20 w-full cursor-default border h-screen">
        <img alt="image" className="border-2 w-[45vw] h-[60vh] ml-5"/>
        <div className="relative left-230 bottom-90 w-[20vw] cursor-default">
          <div className="">
            <h1 className="text-3xl">{name.charAt(0).toUpperCase()+name.slice(1)}</h1>
            <h1 className="text-2xl font-semibold">${price}</h1>
          </div>
          <button className="bg-cyan-500 text-white h-[5vh] w-full rounded-2xl hover:bg-cyan-600" onClick={buyProduct}>Buy Now</button>
          <div className={`${status?'hidden':'block'}`}>You are not sign in</div>
        </div>
       
      </main>
      <Footer/>
    </div>
  )
}
export default ProductViewPage;