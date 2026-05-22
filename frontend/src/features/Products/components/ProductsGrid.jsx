import {useEffect,useState} from "react";
import {Link} from "react-router";
import axios from "axios";
import ProductContainer from "./ProductContainer.jsx";
import instance from "../../../utils/axiosConfig.js";
function ProductsGrid(){

  const [products,setProducts] = useState([]);
  
  useEffect(()=>{
    instance.get("/api/products")
      .then((response)=>{
        setProducts(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  },[]);

  return (
    <div className="flex flex-row flex-wrap gap-5 pl-24">
      {products==0?(<span className="absolute left-2 text-[24px]">No Products</span>):
      (products.map((product)=>(
        <Link to={`/products/${product.id}`}>
          <div className="">
            <ProductContainer name={product.name.charAt(0).toUpperCase()+product.name.slice(1)} price={product.price}/>
          </div>
        </Link>
      )))}
      
    </div>
  )
}

export default ProductsGrid;
