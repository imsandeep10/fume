"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./data/Registervalidation";
import { ChevronDown, ChevronUp } from "lucide-react";
import Head from "next/head";
import Hero from "../../Navigation/Hero";
import toast, { Toaster } from "react-hot-toast";
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
const Page = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    event: "",
    participants: "",
    showEventOptions: false,
  };

  return (
    <>
      <Head>
        <title>Register | Your Coffee School</title>
        <meta
          name="description"
          content="Sign up for our coffee training courses in Nepal. Become a professional barista and learn espresso making, latte art, and coffee brewing techniques."
        />
        <meta
          name="keywords"
          content="Register Coffee School, Coffee Training Nepal, Barista Courses, Coffee Education, Barista Training Nepal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-right" reverseOrder={false}/>
      <Hero images={heroImages} breadcrumbs={breadcrumbs} />
      <section className="relative py-20 overflow-hidden bg-[#FFFCF9]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D220F]">
            Join Our Upcoming Events!
          </h2>
          <p className="mt-2 text-[#7D5336]">
            Don’t miss out! Reserve your spot in our workshops and masterclasses
            today.
          </p>
        </div>
        <div className="max-w-lg mx-auto relative bg-[#F5EBDD40] backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 z-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Form Submitted:", values);
              toast.success("Form Submitted Successfully!");
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form className="flex flex-col gap-4 text-[#3D220F]">
                <label>Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  className="w-full border border-gray-300 px-4 text-[#4A3F3F] py-3 bg-white outline-none"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                <label>Email Address</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 px-4 text-[#4A3F3F] py-3 bg-white outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                <label>Phone Number</label>
                <Field
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 px-4 py-3 text-[#4A3F3F] bg-white outline-none"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                <label>Select Event</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full border border-gray-300 px-4 py-3 bg-white outline-none flex justify-between items-center"
                    onClick={() =>
                      setFieldValue(
                        "showEventOptions",
                        !values.showEventOptions
                      )
                    }
                  >
                    {values.event || "Select Event"}
                    {values.showEventOptions ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  {values.showEventOptions && (
                    <div className="absolute z-10 w-full bg-white border shadow-lg">
                      {[
                        { label: "Coffee Tasting", date: "Sept 20" },
                        { label: "Sushi Workshop", date: "Oct 20" },
                        { label: "Bakery Masterclass", date: "Sept 29" },
                        { label: "Cocktail Mixing", date: "Sept 20" },
                      ].map((opt) => (
                        <div
                          key={opt.label}
                          onClick={() => {
                            setFieldValue(
                              "event",
                              `${opt.label} – ${opt.date}`
                            );
                            setFieldValue("showEventOptions", false);
                          }}
                          className="px-4 py-3 cursor-pointer border border-dotted m-2 rounded hover:bg-gray-50"
                        >
                          <span className="font-medium">{opt.label}</span>
                          <span className="italic"> – {opt.date}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <ErrorMessage
                  name="event"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                <label>Number of Participants</label>
                <Field
                  type="number"
                  name="participants"
                  min="1"
                  className="w-full border border-gray-300 px-4 py-3 text-[#4A3F3F] bg-white outline-none"
                />
                <ErrorMessage
                  name="participants"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-[#3D220F] font-semibold py-3 bg-[#EBA747] rounded-full hover:bg-[#3D220F] transition hover:text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Join Event"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Page;
