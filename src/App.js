import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import InventoryUpdate from './Components/Inventory/InventoryUpdate';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import Home from './Components/Pages/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />
        <Route path="/updateInventory" element={
           <RequireAuth>
           <InventoryUpdate></InventoryUpdate>
         </RequireAuth>


        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </div>
  );
}

export default App;
