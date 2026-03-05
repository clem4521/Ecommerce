import NavBar from "../../../shared/components/NavBar/NavBar.jsx";
import ProductsGrid from "../../Products/components/ProductsGrid.jsx";
import "../../../app/styles/App.css";
import { Link } from "react-router";

function HomePage(){
  return(
    <div className="relative flex flex-col min-h-screen">  
      <NavBar/>
      <main className="relative">
        <section>
           <h2 className="cursor-default">Discounts</h2>
        </section>
      
        <section>
          <h2 className="text-2xl mb-2 cursor-default">All Products</h2>
          <ProductsGrid/>
        </section>
      </main>
      <footer className="flex-[0_0_50px] bottom-0 w-full bg-black text-white mt-auto">end</footer>
    </div>
  );
}
export default HomePage;