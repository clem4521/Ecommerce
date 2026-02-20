import {BrowserRouter,Routes,Route} from "react-router";
import HomePage from "../features/Home/views/HomePage.jsx";
import LoginPage from "../features/Auth/views/LoginPage.jsx";
import RegisterPage from "../features/Auth/views/RegisterPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
