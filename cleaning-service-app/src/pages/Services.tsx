import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Building,
  Sparkles,
  Droplets,
  Car,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Star,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="text-primary" size={48} />,
      title: "Hausreinigung",
      description:
        "Regelmäßige und gründliche Reinigung Ihres Zuhauses für ein gesundes und angenehmes Wohnklima.",
      features: [
        "Wohnzimmer, Schlafzimmer & Küche",
        "Badezimmer & WC",
        "Flur & Treppenhaus",
        "Fenster & Spiegel",
        "Möbel & Oberflächen",
      ],
      price: "ab 25€/Stunde",
    },
    {
      icon: <Building className="text-primary" size={48} />,
      title: "Büroreinigung",
      description:
        "Professionelle Reinigung für Büros und Geschäftsräume - für ein sauberes Arbeitsumfeld.",
      features: [
        "Arbeitsplätze & Schreibtische",
        "Besprechungsräume",
        "Empfangsbereiche",
        "Sanitäranlagen",
        "Gemeinschaftsflächen",
      ],
      price: "ab 30€/Stunde",
    },
    {
      icon: <Sparkles className="text-primary" size={48} />,
      title: "Grundreinigung",
      description:
        "Intensive Tiefenreinigung für besonders verschmutzte Bereiche oder nach Renovierungen.",
      features: [
        "Entfernung hartnäckiger Verschmutzungen",
        "Reinigung schwer zugänglicher Stellen",
        "Desinfektion von Oberflächen",
        "Teppich- und Polsterreinigung",
        "Fenster- und Glasreinigung",
      ],
      price: "ab 35€/Stunde",
    },
    {
      icon: <Droplets className="text-primary" size={48} />,
      title: "Fensterreinigung",
      description:
        "Professionelle Fensterreinigung für kristallklare Aussichten und mehr Licht in Ihren Räumen.",
      features: [
        "Innen- und Außenfenster",
        "Glas- und Spiegelreinigung",
        "Fensterrahmen & -bänke",
        "Türen mit Glas",
        "Wintergärten & Veranden",
      ],
      price: "ab 20€/Stunde",
    },
    {
      icon: <Car className="text-primary" size={48} />,
      title: "Teppichreinigung",
      description:
        "Spezialisierte Teppichreinigung mit modernster Technologie für hygienisch saubere Böden.",
      features: [
        "Tiefenreinigung aller Teppicharten",
        "Fleckenentfernung",
        "Geruchsneutralisation",
        "Antiallergische Behandlung",
        "Schnelltrocknung",
      ],
      price: "ab 40€/Stunde",
    },
    {
      icon: <Sparkles className="text-primary" size={48} />,
      title: "Endreinigung nach Umzug",
      description:
        "Komplette Endreinigung nach Auszug für die Rückgabe der Kaution oder neue Mieter.",
      features: [
        "Komplette Wohnungsreinigung",
        "Küchenreinigung inkl. Geräte",
        "Badezimmer-Desinfektion",
        "Fenster- und Spiegelreinigung",
        "Entsorgung von Restmüll",
      ],
      price: "ab 150€/Wohnung",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Flexible Termine",
      description: "Reinigung zu Ihren Wunschzeiten - auch am Wochenende",
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "Versicherte Reinigung",
      description:
        "Vollständig versicherte Reinigungskräfte für Ihre Sicherheit",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Erfahrene Profis",
      description: "Geschulte und zuverlässige Reinigungskräfte",
    },
    {
      icon: <Star className="text-primary" size={32} />,
      title: "100% Zufriedenheit",
      description: "Garantie für Ihre vollständige Zufriedenheit",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen - TopNotch Reinigungsservice</title>
        <meta
          name="description"
          content="Entdecken Sie unser umfassendes Reinigungsangebot: Hausreinigung, Büroreinigung, Grundreinigung, Fensterreinigung, Teppichreinigung und Endreinigung nach Umzug."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">Unsere Leistungen</h1>
                <p className="lead mb-0">
                  Professionelle Reinigungslösungen für jeden Bedarf - von der
                  regelmäßigen Hausreinigung bis zur spezialisierten
                  Büroreinigung.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="col-lg-6 col-xl-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">{service.icon}</div>
                    <h4 className="card-title fw-bold text-center mb-3">
                      {service.title}
                    </h4>
                    <p className="card-text text-muted mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Leistungen:</h6>
                      <ul className="list-unstyled">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="mb-2">
                            <div className="d-flex align-items-center">
                              <CheckCircle
                                className="text-success me-2"
                                size={16}
                              />
                              <span className="small">{feature}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="badge bg-primary fs-6 px-3 py-2 mb-3">
                        {service.price}
                      </div>
                      <br />
                      <Link
                        to="/contact"
                        className="btn btn-outline-primary w-100"
                      >
                        Angebot anfordern
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Warum TopNotch?</h2>
              <p className="lead text-muted">
                Wir bieten mehr als nur Reinigung - wir bieten Ihnen
                Zuverlässigkeit, Qualität und Vertrauen.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="mb-3">{benefit.icon}</div>
                  <h5 className="fw-bold mb-2">{benefit.title}</h5>
                  <p className="text-muted small">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
                Angebot. Wir beraten Sie gerne persönlich!
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-light btn-lg px-5 py-3">
                  Jetzt Angebot anfordern
                </Link>
                <a
                  href="tel:+49123456789"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                >
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

export default Services;
