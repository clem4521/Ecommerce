import "../styles/container.css";

function ProductContainer(props){
  return (
    <div className="contain">
      <div className="">
        <div className="text font-sans-serif">
          <h2>{props.name}</h2>
          <h3>${props.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer;
