"use client";
import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Hero from "@/Navigation/Hero";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const heroImages = [
  { src: "/hero1.png", alt: "Coffee 1" },
  { src: "/hero2.png", alt: "Coffee 2" },
  { src: "/hero3.png", alt: "Coffee 3" },
  { src: "/hero4.png", alt: "Coffee 4" },
];

// Yup validation schema
const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactSection = () => {
  return (
    <>
      <Hero images={heroImages} breadcrumbs={breadcrumbs} />

      <section className="min-h-screen bg-[#FFFCFA] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A3F3F] mb-2">
              Get in Touch
            </h1>
            <p className="text-lg text-[#4A3F3F] ">
              Questions? Feedback? Reach out!
            </p>
          </header>

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div className="order-1 lg:order-2">
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Form submitted:", values);
                  alert("form submitted successfully",values);
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form className="bg-[#F5EBDD40] rounded-lg shadow-lg p-8 space-y-6 w-full lg:w-11/12 mx-auto text-[#4A3F3F]">
                    <div>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className={`w-full px-4 py-2 border ${
                          errors.fullName && touched.fullName
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white outline-none text-[#4A3F3F]`}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={`w-full px-4 py-2 border ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white outline-none text-[#4A3F3F]`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className={`w-full px-4 py-2 border ${
                          errors.phone && touched.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white outline-none text-[#4A3F3F]`}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className={`w-full px-4 py-2 border ${
                          errors.subject && touched.subject
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white outline-none text-[#4A3F3F]`}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Message"
                        className={`w-full px-4 py-2 border ${
                          errors.message && touched.message
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white outline-none resize-vertical`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#EBA747]  text-[#4A3F3F] hover:bg-[#3D220F] hover:text-white font-semibold py-3 rounded-full transition duration-300 shadow"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>

              {/* Social Links */}
              <div className="mt-8 flex justify-center space-x-6">
                <a className="w-12 h-12 bg-[#F5EBDD80] rounded-full flex items-center justify-center hover:bg-orange-200">
                  <Facebook className="w-8 h-8 text-[#FFA828]" />
                </a>
                <a className="w-12 h-12 bg-[#F5EBDD80] rounded-full flex items-center justify-center hover:bg-orange-200">
                  <Instagram className="w-8 h-8 text-[#FFA828]" />
                </a>
                <a className="w-12 h-12 bg-[#F5EBDD80] rounded-full flex items-center justify-center hover:bg-orange-200">
                  <svg
                    className="w-8 h-8 text-[#FFA828]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map + Contact Info */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.56993822675!2d83.46232507578047!3d27.699683976187043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968700617e1c89%3A0x6b734339d6ce40b6!2sSynth%20Bit%20Group%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1755597087556!5m2!1sen!2snp"
                className="w-full lg:w-5/6 h-80 md:h-[500px] rounded-lg shadow"
                allowFullScreen
                loading="lazy"
              />
              {/* Contact Info */}
              <div className="mt-8 lg:mt-16 bg-[#F5EBDD40] rounded-lg shadow-lg p-8 w-full lg:w-5/6">
                <h3 className="text-2xl font-bold text-[#4A3F3F] mb-6">
                  Contact Info
                </h3>
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center space-x-3 text-[#4A3F3F]">
                    <MapPin className="w-5 h-5 text-[#FFA828]" />
                    <span>Amarpath, Butwal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#FFA828]" />
                    <span>9857077828, 9762345120</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#FFA828]" />
                    <span>info@fumecoffeetraining.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
