import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import GoodsPage from "./pages/GoodsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<GoodsPage/>}/>
                  <Route path='cart' element={<CartPage/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
