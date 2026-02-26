import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
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
      <main>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </main>
    </>
  )
}
export default ProductViewPage;
