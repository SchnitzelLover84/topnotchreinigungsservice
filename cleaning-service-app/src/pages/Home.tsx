import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="text-primary" size={48} />,
      title: "100% Sicherheit",
      description:
        "Versicherte Reinigungskräfte und umfassender Schutz für Ihr Eigentum",
    },
    {
      icon: <Clock className="text-primary" size={48} />,
      title: "Flexible Termine",
      description:
        "Reinigung zu Ihren Wunschzeiten - auch am Wochenende und Feiertagen",
    },
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Erfahrene Profis",
      description: "Geschulte Reinigungskräfte mit jahrelanger Erfahrung",
    },
  ];

  const services = [
    "Regelmäßige Hausreinigung",
    "Büroreinigung",
    "Grundreinigung",
    "Fensterreinigung",
    "Teppichreinigung",
    "Endreinigung nach Umzug",
  ];

  return (
    <>
      <Helmet>
        <title>
          TopNotch Reinigungsservice - Professionelle Reinigung für Ihr Zuhause
        </title>
        <meta
          name="description"
          content="Professioneller Reinigungsservice für Privathaushalte und Unternehmen. Wir bieten maßgeschneiderte Reinigungslösungen mit modernster Technologie und umweltfreundlichen Produkten."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-bg position-absolute w-100 h-100"></div>
        <div className="container position-relative">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold text-white mb-4">
                  Professionelle Reinigung für Ihr Zuhause
                </h1>
                <p className="lead text-white-50 mb-5">
                  Entdecken Sie unseren erstklassigen Reinigungsservice mit
                  modernster Technologie und umweltfreundlichen Produkten. Wir
                  machen Ihr Zuhause zum Wohlfühlort.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link
                    to="/contact"
                    className="btn btn-primary btn-lg px-5 py-3"
                  >
                    Kostenloses Angebot
                  </Link>
                  <Link
                    to="/services"
                    className="btn btn-outline-light btn-lg px-5 py-3"
                  >
                    Unsere Leistungen
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="hero-image-placeholder bg-white bg-opacity-10 rounded-3 p-5">
                  <Sparkles size={120} className="text-white mb-3" />
                  <h3 className="text-white">TopNotch Qualität</h3>
                  <p className="text-white-50">
                    Ihr Partner für professionelle Reinigung
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Warum TopNotch?</h2>
              <p className="lead text-muted">
                Wir bieten mehr als nur Reinigung - wir bieten Ihnen ein
                sauberes, gesundes und angenehmes Zuhause.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">{feature.icon}</div>
                    <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                    <p className="card-text text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold mb-4">Unsere Leistungen</h2>
                <p className="lead text-muted mb-4">
                  Von der regelmäßigen Hausreinigung bis zur spezialisierten
                  Büroreinigung - wir haben die passende Lösung für Ihre
                  Bedürfnisse.
                </p>
                <div className="row g-3">
                  {services.map((service, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center">
                        <CheckCircle className="text-success me-2" size={20} />
                        <span>{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="btn btn-primary btn-lg mt-4">
                  Alle Leistungen ansehen
                </Link>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="service-image-placeholder bg-primary bg-opacity-10 rounded-3 p-5">
                  <Sparkles size={100} className="text-primary mb-3" />
                  <h3 className="text-primary">Maßgeschneiderte Lösungen</h3>
                  <p className="text-muted">
                    Für jeden Bedarf die richtige Reinigung
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">
                Das sagen unsere Kunden
              </h2>
              <p className="lead text-muted">
                Über 500 zufriedene Kunden vertrauen auf unsere Qualität
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-warning"
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "TopNotch hat unsere Erwartungen übertroffen. Die
                    Reinigungskräfte sind professionell und zuverlässig. Sehr
                    empfehlenswert!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-primary rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    ></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Maria Schmidt</h6>
                      <small className="text-muted">Privathaushalt</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-warning"
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "Seit 2 Jahren nutzen wir TopNotch für unsere Büroreinigung.
                    Immer pünktlich und sauber. Perfekt!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-primary rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    ></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Thomas Weber</h6>
                      <small className="text-muted">Geschäftsführer</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-warning"
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="card-text mb-3">
                    "Die Endreinigung nach unserem Umzug war fantastisch. Alles
                    blitzblank und bereit für die neuen Mieter."
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-primary rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    ></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Lisa Müller</h6>
                      <small className="text-muted">Immobilienbesitzerin</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4">
                Bereit für ein sauberes Zuhause?
              </h2>
              <p className="lead mb-5">
                Kontaktieren Sie uns für ein kostenloses und unverbindliches
                Angebot. Wir freuen uns darauf, von Ihnen zu hören!
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-light btn-lg px-5 py-3">
                  Jetzt Angebot anfordern
                </Link>
                <a
                  href="tel:+49123456789"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                >
                  <Phone className="me-2" size={20} />
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
