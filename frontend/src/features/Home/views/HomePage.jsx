import "../styles/HomeStyle.css";
import NavBar from "../../../shared/components/NavBar/NavBar.jsx";
import ProductsGrid from "../../Products/components/ProductsGrid.jsx";
function HomePage(){
  return(
    <>
      <header className="">
        <NavBar/>
      </header>
      <main className="red">
        <div className="container">
          <ProductsGrid/>
        </div>
        <footer>end</footer>
      </main>
    </>
  );
}
export default HomePage;
