import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={32} />,
      title: "Telefon",
      content: "+49 123 456789",
      link: "tel:+49123456789",
    },
    {
      icon: <Mail className="text-primary" size={32} />,
      title: "E-Mail",
      content: "info@topnotch-reinigungsservice.de",
      link: "mailto:info@topnotch-reinigungsservice.de",
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: "Adresse",
      content: "Musterstraße 123, 12345 Musterstadt",
      link: "#",
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 8:00-18:00 Uhr",
      link: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt - TopNotch Reinigungsservice</title>
        <meta
          name="description"
          content="Kontaktieren Sie TopNotch Reinigungsservice für ein kostenloses Angebot. Wir sind für Sie da und beraten Sie gerne persönlich."
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
                <h1 className="display-4 fw-bold mb-4">Kontakt</h1>
                <p className="lead mb-0">
                  Lassen Sie uns gemeinsam Ihr Reinigungskonzept entwickeln. Wir
                  freuen uns darauf, von Ihnen zu hören!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h2 className="fw-bold mb-4">
                      Kostenloses Angebot anfordern
                    </h2>

                    {submitStatus === "success" && (
                      <div className="alert alert-success d-flex align-items-center mb-4">
                        <CheckCircle className="me-2" size={20} />
                        Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                        Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="alert alert-danger d-flex align-items-center mb-4">
                        <AlertCircle className="me-2" size={20} />
                        Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte
                        versuchen Sie es erneut.
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label
                            htmlFor="name"
                            className="form-label fw-semibold"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="email"
                            className="form-label fw-semibold"
                          >
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="phone"
                            className="form-label fw-semibold"
                          >
                            Telefon
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="service"
                            className="form-label fw-semibold"
                          >
                            Gewünschte Leistung
                          </label>
                          <select
                            className="form-select"
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                          >
                            <option value="">
                              Bitte wählen Sie eine Leistung
                            </option>
                            <option value="hausreinigung">Hausreinigung</option>
                            <option value="bueroeinigung">Büroreinigung</option>
                            <option value="grundreinigung">
                              Grundreinigung
                            </option>
                            <option value="fensterreinigung">
                              Fensterreinigung
                            </option>
                            <option value="teppichreinigung">
                              Teppichreinigung
                            </option>
                            <option value="endreinigung">
                              Endreinigung nach Umzug
                            </option>
                            <option value="sonstiges">Sonstiges</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="message"
                            className="form-label fw-semibold"
                          >
                            Ihre Nachricht *
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Beschreiben Sie Ihre Reinigungsanforderungen, die Größe der Räumlichkeiten und gewünschte Termine..."
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg px-5 py-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Wird gesendet...
                              </>
                            ) : (
                              <>
                                <Send className="me-2" size={20} />
                                Nachricht senden
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">Kontaktinformationen</h3>

                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-start mb-4"
                      >
                        <div className="me-3 mt-1">{info.icon}</div>
                        <div>
                          <h6 className="fw-bold mb-1">{info.title}</h6>
                          {info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-decoration-none text-muted"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted mb-0">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    <hr className="my-4" />

                    <h5 className="fw-bold mb-3">Warum TopNotch?</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <CheckCircle className="text-success me-2" size={16} />
                        Kostenloses Angebot
                      </li>
                      <li className="mb-2">
                        <CheckCircle className="text-success me-2" size={16} />
                        Flexible Termine
                      </li>
                      <li className="mb-2">
                        <CheckCircle className="text-success me-2" size={16} />
                        Versicherte Reinigungskräfte
                      </li>
                      <li className="mb-2">
                        <CheckCircle className="text-success me-2" size={16} />
                        100% Zufriedenheitsgarantie
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">
                Häufig gestellte Fragen
              </h2>
              <p className="lead text-muted">
                Antworten auf die wichtigsten Fragen rund um unsere
                Reinigungsdienstleistungen.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    Wie schnell bekomme ich ein Angebot?
                  </h5>
                  <p className="text-muted mb-0">
                    Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage und
                    erstellen ein individuelles Angebot für Sie.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    Sind Ihre Reinigungskräfte versichert?
                  </h5>
                  <p className="text-muted mb-0">
                    Ja, alle unsere Reinigungskräfte sind vollständig versichert
                    und geschult. Ihre Sicherheit steht an erster Stelle.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    Welche Reinigungsmittel verwenden Sie?
                  </h5>
                  <p className="text-muted mb-0">
                    Wir verwenden umweltfreundliche und hautschonende
                    Reinigungsmittel, die sowohl effektiv als auch nachhaltig
                    sind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    Kann ich Termine am Wochenende buchen?
                  </h5>
                  <p className="text-muted mb-0">
                    Ja, wir bieten flexible Termine an, auch am Wochenende und
                    Feiertagen, um Ihnen maximale Flexibilität zu bieten.
                  </p>
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
                Kontaktieren Sie uns noch heute für ein kostenloses und
                unverbindliches Angebot. Wir freuen uns darauf, von Ihnen zu
                hören!
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="tel:+49123456789"
                  className="btn btn-light btn-lg px-5 py-3"
                >
                  <Phone className="me-2" size={20} />
                  Jetzt anrufen
                </a>
                <a
                  href="mailto:info@topnotch-reinigungsservice.de"
                  className="btn btn-outline-light btn-lg px-5 py-3"
                >
                  <Mail className="me-2" size={20} />
                  E-Mail senden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
