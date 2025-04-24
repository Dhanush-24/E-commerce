import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Men from './screens/Men';
import Women from './screens/Women';
import Beauty from './screens/Beauty';
import Living from './screens/Living';
import Details from './screens/Details';
import WishlistPage from './screens/wishlistPage';
import CartedItems from './screens/cartedItems';
import KidsPage from './screens/KidsPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'; 
import ProfilePage from './screens/ProfilePage';
import PrivateRoute from './components/PrivateRoute'; // 
import OrdersPage from './screens/OrdersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KidsPage" element={<KidsPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/details" element={<Details />} />
        <Route path="/wishlistPage" element={<WishlistPage />} />
        <Route path="/cartedItems" element={<CartedItems />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
