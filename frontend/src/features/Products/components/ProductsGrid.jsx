import ProductContainer from "./ProductContainer.jsx";
import "../styles/grid.css";
function ProductsGrid(){
  return (
    <div className="">
      <div className="grid">
        <ProductContainer  name="Soccer ball" price="30"/>
        
      </div>
    </div>
  )
}

export default ProductsGrid;
