import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

function Layout(props){
    return (
        <div className="border-2 border-green-600 relative flex flex-col min-h-screen">
            <NavBar/>
            <main className="border-2 h-[92vh] border-amber-900 block">
                {props.main}
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;