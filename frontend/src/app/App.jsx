import {BrowserRouter,Routes,Route} from "react-router";
import HomePage from "../features/Home/views/HomePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
