import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Leistungen" },
    { path: "/about", label: "Über uns" },
    { path: "/contact", label: "Kontakt" },
  ];

  const services = [
    { path: "/services", label: "Hausreinigung" },
    { path: "/services", label: "Büroreinigung" },
    { path: "/services", label: "Grundreinigung" },
    { path: "/services", label: "Fensterreinigung" },
    { path: "/services", label: "Teppichreinigung" },
    { path: "/services", label: "Endreinigung nach Umzug" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <Sparkles className="text-primary me-2" size={24} />
              <span className="fw-bold fs-4">TopNotch</span>
              <span className="text-muted ms-1">Reinigungsservice</span>
            </div>
            <p className="text-muted mb-4">
              Ihr zuverlässiger Partner für professionelle Reinigung. Wir bieten
              maßgeschneiderte Reinigungslösungen mit modernster Technologie und
              umweltfreundlichen Produkten.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white text-decoration-none"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Schnellzugriff</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-muted text-decoration-none hover-text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Leistungen</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={service.path}
                    className="text-muted text-decoration-none hover-text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Kontakt</h5>
            <div className="mb-3">
              <div className="d-flex align-items-start mb-2">
                <MapPin className="text-primary me-2 mt-1" size={16} />
                <span className="text-muted">
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </span>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <Phone className="text-primary me-2" size={16} />
                <a
                  href="tel:+49123456789"
                  className="text-muted text-decoration-none hover-text-white"
                >
                  +49 123 456789
                </a>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <Mail className="text-primary me-2" size={16} />
                <a
                  href="mailto:info@topnotch-reinigungsservice.de"
                  className="text-muted text-decoration-none hover-text-white"
                >
                  info@topnotch-reinigungsservice.de
                </a>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <Clock className="text-primary me-2" size={16} />
                <span className="text-muted">Mo-Fr: 8:00-18:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0 small">
                © {currentYear} TopNotch Reinigungsservice. Alle Rechte
                vorbehalten.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                <Link
                  to="/privacy"
                  className="text-muted text-decoration-none small hover-text-white"
                >
                  Datenschutz
                </Link>
                <Link
                  to="/imprint"
                  className="text-muted text-decoration-none small hover-text-white"
                >
                  Impressum
                </Link>
                <Link
                  to="/terms"
                  className="text-muted text-decoration-none small hover-text-white"
                >
                  AGB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
