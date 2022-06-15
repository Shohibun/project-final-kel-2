import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './layouts/Register';
import Login from './layouts/Login';
import LayoutInfoProfile from './layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './layouts/LayoutInfoProductAdd[Seller]';
import LayoutDashboardProductSeller from './layouts/LayoutDashboardProduct[Seller]';
import LayoutDashboardProductBuyer from './layouts/LayoutDashboardProduct[Buyer]';
import NotifikasiHargaTawar from './components/NotifikasiHargaTawar[Buyer]';
import LayoutDashboardProductNotifTawarBuyer from './layouts/LayoutDashboardProductNotifTawar[Buyer]';
import NotifikasiTawarBerhasil from './components/NotifikasiTawarBerhasil[Buyer]';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/info-profile'} element={<LayoutInfoProfile />} />
      <Route path={'/info-product-add'} element={<LayoutInfoProductAdd />} />
      <Route path={'/dashboard-product-seller'} element={<LayoutDashboardProductSeller />} />
      <Route path={'/dashboard-product-buyer'} element={<LayoutDashboardProductBuyer />} />
      <Route path={'/dashboard-product-notif-tawar-buyer'} element={<LayoutDashboardProductNotifTawarBuyer />} />
      <Route path={'/notifikasi-harga-tawar'} element={<NotifikasiHargaTawar />} />
      <Route path={'/notifikasi-tawar-berhasil'} element={<NotifikasiTawarBerhasil />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;