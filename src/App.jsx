import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppChat from "./components/WhatsAppChat.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import RouteSeo from "./components/Seo.jsx";
import Home from "./pages/Home.jsx";

// Every page except Home is loaded on demand, so the first visit downloads less code.
const About = lazy(() => import("./pages/About.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Location = lazy(() => import("./pages/Location.jsx"));
const PayOnline = lazy(() => import("./pages/PayOnline.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <RouteSeo />
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/pay-online" element={<PayOnline />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  );
}
