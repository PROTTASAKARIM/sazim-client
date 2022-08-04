import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/DashBoard/AddProducts';
import DashBoard from './Pages/DashBoard/DashBoard';
import EditProducts from './Pages/DashBoard/EditProducts';
import MyProducts from './Pages/DashBoard/MyProducts';
import ProductDetails from './Pages/DashBoard/ProductDetails';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route index element={<AddProducts></AddProducts>}></Route>
          <Route path='/dashboard/editproducts' element={<EditProducts></EditProducts>}></Route>
          <Route path='/dashboard/myproducts' element={<MyProducts></MyProducts>}></Route>
          <Route path='/dashboard/myproducts/:p_id' element={<ProductDetails></ProductDetails>}></Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
