function ProductContainer(props){
  return (
    <div className="border border-green-500 relative w-[20vw] h-[25vh]">
      <div className="">
        <div className="absolute bottom-0 w-[20vw]">
          <h2>{props.name}</h2>
          <h3>${props.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer;
