import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Cart1 from "./pages/Cart1";


function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart1" element={<Cart1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
