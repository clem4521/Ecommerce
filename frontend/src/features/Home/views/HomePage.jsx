import NavBar from "../../../shared/components/NavBar/NavBar.jsx";
import ProductsGrid from "../../Products/components/ProductsGrid.jsx";
import ending from "../../../shared/components/Footer.jsx";
import "../../../app/styles/App.css";
import { Link } from "react-router";
import Footer from "../../../shared/components/Footer.jsx";

function HomePage(){
  return(
    <div className="relative flex flex-col min-h-screen">  
      <NavBar/>
      <main className="relative mb-1.5">
        <section>
           <h2 className="cursor-default">Discounts</h2>
        </section>
      
        <section>
          <h2 className="text-2xl mb-2 cursor-default">All Products</h2>
          <ProductsGrid/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
export default HomePage;