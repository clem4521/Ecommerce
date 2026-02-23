import {BrowserRouter,Routes,Route} from "react-router";
import HomePage from "../features/Home/views/HomePage.jsx";
import LoginPage from "../features/Auth/views/LoginPage.jsx";
import RegisterPage from "../features/Auth/views/RegisterPage.jsx";
import ProductViewPage from "../features/Products/views/ProductViewPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/products/:productId" element={<ProductViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
