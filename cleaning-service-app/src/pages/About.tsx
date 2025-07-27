import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Award,
  Shield,
  Clock,
  Heart,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="text-primary" size={48} />,
      title: "Qualität",
      description:
        "Wir setzen höchste Qualitätsstandards und verwenden nur die besten Reinigungsmittel und -geräte.",
    },
    {
      icon: <Clock className="text-primary" size={48} />,
      title: "Zuverlässigkeit",
      description:
        "Pünktlichkeit und Zuverlässigkeit sind für uns selbstverständlich. Sie können sich auf uns verlassen.",
    },
    {
      icon: <Heart className="text-primary" size={48} />,
      title: "Nachhaltigkeit",
      description:
        "Wir verwenden umweltfreundliche Reinigungsmittel und achten auf nachhaltige Arbeitsweisen.",
    },
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Kundenservice",
      description:
        "Ihre Zufriedenheit steht an erster Stelle. Wir sind für Sie da und hören Ihnen zu.",
    },
  ];

  const team = [
    {
      name: "Michael Weber",
      position: "Geschäftsführer",
      experience: "15 Jahre Erfahrung",
      description:
        "Gründer und Geschäftsführer mit langjähriger Erfahrung in der Reinigungsbranche.",
    },
    {
      name: "Sarah Müller",
      position: "Qualitätsmanagerin",
      experience: "10 Jahre Erfahrung",
      description:
        "Verantwortlich für die Qualitätskontrolle und Schulung unserer Reinigungskräfte.",
    },
    {
      name: "Thomas Schmidt",
      position: "Kundenbetreuung",
      experience: "8 Jahre Erfahrung",
      description:
        "Ihr direkter Ansprechpartner für alle Fragen und Wünsche rund um die Reinigung.",
    },
  ];

  const achievements = [
    {
      number: "500+",
      label: "Zufriedene Kunden",
      description: "Vertrauen uns seit Jahren",
    },
    {
      number: "5",
      label: "Jahre Erfahrung",
      description: "In der Reinigungsbranche",
    },
    {
      number: "50+",
      label: "Qualifizierte Mitarbeiter",
      description: "Geschulte Reinigungskräfte",
    },
    {
      number: "100%",
      label: "Zufriedenheit",
      description: "Garantie für Qualität",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Über uns - TopNotch Reinigungsservice</title>
        <meta
          name="description"
          content="Lernen Sie TopNotch Reinigungsservice kennen. Wir sind Ihr zuverlässiger Partner für professionelle Reinigung mit über 5 Jahren Erfahrung und 500+ zufriedenen Kunden."
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
                <h1 className="display-4 fw-bold mb-4">Über uns</h1>
                <p className="lead mb-0">
                  Ihr zuverlässiger Partner für professionelle Reinigung - seit
                  über 5 Jahren für Sie da.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
                <h2 className="display-5 fw-bold mb-4">Unsere Geschichte</h2>
                <p className="lead text-muted mb-4">
                  TopNotch Reinigungsservice wurde 2019 mit einer klaren Vision
                  gegründet: Professionelle Reinigung sollte zugänglich,
                  zuverlässig und nachhaltig sein.
                </p>
                <p className="text-muted mb-4">
                  Was als kleines Familienunternehmen begann, ist heute ein
                  etablierter Reinigungsservice mit über 50 qualifizierten
                  Mitarbeitern und mehr als 500 zufriedenen Kunden. Wir sind
                  stolz darauf, dass wir unseren Kunden seit über 5 Jahren
                  erstklassige Reinigungsdienstleistungen anbieten können.
                </p>
                <p className="text-muted">
                  Unser Erfolg basiert auf drei Säulen: Qualität,
                  Zuverlässigkeit und Kundenservice. Wir glauben daran, dass
                  jedes Zuhause und jeder Arbeitsplatz ein Ort der Sauberkeit
                  und des Wohlbefindens sein sollte.
                </p>
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
                <div className="bg-primary bg-opacity-10 rounded-3 p-5">
                  <Sparkles size={120} className="text-primary mb-3" />
                  <h3 className="text-primary">TopNotch Qualität</h3>
                  <p className="text-muted">
                    Seit 2019 Ihr Partner für professionelle Reinigung
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Unsere Werte</h2>
              <p className="lead text-muted">
                Diese Grundsätze leiten unser tägliches Handeln und definieren,
                wer wir sind.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">{value.icon}</div>
                    <h5 className="card-title fw-bold mb-3">{value.title}</h5>
                    <p className="card-text text-muted">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Unser Team</h2>
              <p className="lead text-muted">
                Hinter TopNotch steht ein erfahrenes Team von Profis, die sich
                für Ihre Zufriedenheit einsetzen.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div
                      className="bg-primary rounded-circle mx-auto mb-3"
                      style={{ width: "80px", height: "80px" }}
                    ></div>
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fw-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-muted small mb-3">{member.experience}</p>
                    <p className="text-muted">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Unsere Erfolge</h2>
              <p className="lead text-muted">
                Zahlen, die für sich sprechen - Ihr Vertrauen ist unser größter
                Erfolg.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="display-4 fw-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <h5 className="fw-bold mb-2">{achievement.label}</h5>
                  <p className="text-muted">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="row text-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="d-flex flex-column align-items-center">
                        <MapPin className="text-primary mb-3" size={32} />
                        <h6 className="fw-bold mb-2">Adresse</h6>
                        <p className="text-muted mb-0">
                          Musterstraße 123
                          <br />
                          12345 Musterstadt
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="d-flex flex-column align-items-center">
                        <Phone className="text-primary mb-3" size={32} />
                        <h6 className="fw-bold mb-2">Telefon</h6>
                        <p className="text-muted mb-0">
                          <a
                            href="tel:+49123456789"
                            className="text-decoration-none"
                          >
                            +49 123 456789
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-column align-items-center">
                        <Mail className="text-primary mb-3" size={32} />
                        <h6 className="fw-bold mb-2">E-Mail</h6>
                        <p className="text-muted mb-0">
                          <a
                            href="mailto:info@topnotch-reinigungsservice.de"
                            className="text-decoration-none"
                          >
                            info@topnotch-reinigungsservice.de
                          </a>
                        </p>
                      </div>
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
                Lassen Sie uns zusammenarbeiten
              </h2>
              <p className="lead mb-5">
                Kontaktieren Sie uns für ein persönliches Gespräch und lassen
                Sie uns gemeinsam Ihr Reinigungskonzept entwickeln.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg px-5 py-3">
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
