import NavBar from "../../../shared/components/NavBar/NavBar";
import Footer from "../../../shared/components/Footer";
import Layout from "../../../shared/components/Layout";
import CartListContainer from "../componnets/CartListContainer";

function CartPage(){
    return(
        <div>
            <NavBar/>
            <main className="w-full h-screen">
                <CartListContainer/>
            </main>
            <Footer/>
        </div>
    );
}

export default CartPage;