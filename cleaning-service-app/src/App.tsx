import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>
            TopNotch Reinigungsservice - Professionelle Reinigung für Ihr
            Zuhause
          </title>
          <meta
            name="description"
            content="Professioneller Reinigungsservice für Privathaushalte und Unternehmen. Wir bieten maßgeschneiderte Reinigungslösungen mit modernster Technologie und umweltfreundlichen Produkten."
          />
          <meta
            name="keywords"
            content="Reinigungsservice, Hausreinigung, Büroreinigung, professionelle Reinigung, Reinigungsfirma"
          />
          <meta name="author" content="TopNotch Reinigungsservice" />
          <meta property="og:title" content="TopNotch Reinigungsservice" />
          <meta
            property="og:description"
            content="Professioneller Reinigungsservice für Privathaushalte und Unternehmen"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://topnotch-reinigungsservice.de"
          />
          <link rel="canonical" href="https://topnotch-reinigungsservice.de" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
