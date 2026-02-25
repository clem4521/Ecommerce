import {useEffect,useState} from "react";
import {Link} from "react-router";
import axios from "axios";
import ProductContainer from "./ProductContainer.jsx";
function ProductsGrid(){

  const [products,setProducts] = useState([]);
  
  const instance = axios.create({
    baseURL:"http://localhost:8080"
  });
  
  useEffect(()=>{
    instance.get("/api/products")
      .then((response)=>{
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  },[]);

  return (
    <div className="grid">
      
      {products.map((product)=>(
        <Link to={`/products/${product.id}`}>
          <div className="">
            <ProductContainer name={product.name} price={product.price}/>
          </div>
        </Link>
      ))}
      
    </div>
  )
}

export default ProductsGrid;
