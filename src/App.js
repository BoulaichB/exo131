import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Produit from "./components/produit";
import Panier from "./components/panier";

function App() {
  let [money, setMoney] = useState(20);

  let [stockCoca, setStockCoca] = useState(5);
  let [stockFanta, setStockFanta] = useState(5);
  let [stockSprite, setStockSprite] = useState(5);

  let stocks = [stockCoca, stockFanta, stockSprite];
  let setStocks = [setStockCoca, setStockFanta, setStockSprite];

  let [products, setProducts] = useState([{name: 'Coca Cola', unity: 0, price: 1, stock: stockCoca, setStock: setStockCoca}, {name: 'Fanta', unity: 0, price: 1.5, stock: stockFanta, setStock: setStockFanta}, {name: 'Sprite', unity: 0, price: 2, stock: stockSprite, setStock: setStockSprite}]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<Home money={money}/>}/>
        <Route path='/produit' element={<Produit stocks={stocks} setStocks={setStocks} money={money} setMoney={setMoney} products={products} setProducts={setProducts}/>}/>

        <Route path='/panier' element={<Panier money={money} setMoney={setMoney} stocks={stocks} products={products} setProducts={setProducts}/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
