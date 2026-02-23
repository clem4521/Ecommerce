import "../styles/HomeStyle.css";
import NavBar from "../../../shared/components/NavBar/NavBar.jsx";
import ProductsGrid from "../../Products/components/ProductsGrid.jsx";
function HomePage(){
  return(
    <>
      <header className="">
        <NavBar/>
      </header>
      <main className="">
        <section>
          <h2 className="font-sans-serif heading ">Discounts</h2>
        </section>
      
        <section>
          <h2 className="font-sans-serif heading ">All Products</h2>
          <ProductsGrid/>
        </section>
      </main>
      <footer>end</footer>
    </>
  );
}
export default HomePage;
