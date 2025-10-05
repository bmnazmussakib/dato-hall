import React from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Category from "../pages/Category";
import ResellerPartner from "../pages/ResellerPartner";
import ProductDetails from "../pages/ProductDetails";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Category />} />
          <Route path="/reseller-partner" element={<ResellerPartner />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;