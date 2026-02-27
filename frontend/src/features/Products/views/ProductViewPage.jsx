import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import NavBar from "../../../shared/components/NavBar/NavBar.jsx";

function ProductViewPage(){
  let {productId} = useParams();
  const [price,setPrice] = useState(0);
  const [name,setName] = useState("");
  console.log(productId);
  
  const instance = axios.create({
    baseURL:"http://localhost:8080"
  });
  
  useEffect(()=>{
    instance.get(`/api/products/${productId}`)
      .then(function(response){
        console.log(response.data.results[0].price);
        setPrice(response.data.results[0].price);
        setName(response.data.results[0].name);
      })
    .catch((error)=>{
        console.log(error);
      })
  },[])
  
  return(
    <>
      <NavBar/>
      <main className="relative mt-4">
        <img src="" alt="image" className="absolute border-2 w-[45vw] h-[60vh] ml-5"/>
        <div className="absolute right-20 w-[20vw] cursor-default">
          <div className="">
            <h1 className="text-3xl">{name.charAt(0).toUpperCase()+name.slice(1)}</h1>
            <h1 className="text-2xl font-semibold">${price}</h1>
          </div>
          <button className="bg-cyan-500 text-white h-[5vh] w-full rounded-2xl hover:bg-cyan-600">Buy Now</button>
        </div>
      </main>
    </>
  )
}
export default ProductViewPage;
