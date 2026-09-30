import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DemoBanner from "./components/DemoBanner";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DoctorProfile from "./pages/DoctorProfile";
import ClinicProfile from "./pages/ClinicProfile";
import PharmacyProfile from "./pages/PharmacyProfile";
import MedicineDetails from "./pages/MedicineDetails";
import Booking from "./pages/Booking";
import Consultation from "./pages/Consultation";
import Prescription from "./pages/Prescription";
import HealthRecords from "./pages/HealthRecords";
import Orders from "./pages/Orders";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PatientDashboard from "./pages/PatientDashboard";
import ProviderDashboard from "./dashboard/ProviderDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

export default function App() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  const addToCart = (medicine) => {
    setCart((current) => {
      const exists = current.find((item) => item.id === medicine.id);
      if (exists) {
        return current.map((item) =>
          item.id === medicine.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { ...medicine, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) {
      setCart((current) => current.filter((item) => item.id !== id));
      return;
    }
    setCart((current) => current.map((item) => item.id === id ? { ...item, qty } : item));
  };

  const placeOrder = (details) => {
    setOrder({
      id: `SHF-${Math.floor(10000 + Math.random() * 89999)}`,
      status: "Confirmed",
      ...details,
      items: cart,
    });
    setCart([]);
  };

  return (
    <>
      <DemoBanner />
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/clinics/:id" element={<ClinicProfile />} />
        <Route path="/pharmacies/:id" element={<PharmacyProfile />} />
        <Route path="/medicines/:id" element={<MedicineDetails onAdd={addToCart} />} />
        <Route path="/booking/:doctorId" element={<Booking />} />
        <Route path="/consultation/:id" element={<Consultation />} />
        <Route path="/prescription/:id" element={<Prescription />} />
        <Route path="/records" element={<HealthRecords />} />
        <Route path="/orders" element={<Orders order={order} />} />
        <Route path="/orders/:id" element={<OrderTracking order={order} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} />} />
        <Route path="/checkout" element={<Checkout cart={cart} onPlaceOrder={placeOrder} />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
        <Route path="/dashboard/provider" element={<ProviderDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
