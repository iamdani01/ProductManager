
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import ProductDetails from './views/ProductDetails';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p>
        <Link to="/product"> Dashboard</Link>|
        <Link to="/product/new"> Create a Product</Link>
      </p>
      <Routes>
        <Route path='/product' element={<DashboardPage/>} />
        <Route path='/product/new' element={<CreatePage/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/product/:id/edit' element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
