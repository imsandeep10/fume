"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronDown, ChevronUp } from "lucide-react";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
const Enroll = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    course: Yup.string().required("Please select a course"),
    level: Yup.array().min(1, "Please select at least one level"),
    message: Yup.string().required("Message ie required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    course: "",
    level: [],
    message: "",
    showCourseOptions: false,
  };

  const courses = [
    "Barista Training",
    "Sushi Training",
    "Bakery Training",
    "Bartending Training",
  ];

  return (
    <>
      <Head>
        <title>Enroll | Your Coffee School</title>
        <meta
          name="description"
          content="Join our coffee training courses today! Enroll now to learn professional barista skills, latte art, espresso making, and more."
        />
        <meta
          name="keywords"
          content="Coffee Training, Barista Courses, Enroll Coffee School, Coffee Education Nepal, Barista Training Nepal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Toaster position="top-right" reverseOrder={false} />
      <div className="relative">
        <section className="relative py-20 overflow-hidden bg-[#FFFCF9]">
          <div className="absolute bottom-0 left-0 right-0 h-86 overflow-hidden">
            <img
              src="/enrollbg.png"
              alt="Coffee beans decoration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D220F]">
              Enroll in Your Course Today!
            </h2>
            <p className="mt-2 text-[#7D5336]">
              Secure your seat in our professional training programs and start
              your journey as a skilled barista, bartender, or chef
            </p>
          </div>
          <div className="max-w-lg mx-auto relative bg-[#F5EBDD40] backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-20">
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
                  <label>Choose Course</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full border border-gray-300 px-4 py-3 bg-white outline-none flex justify-between items-center"
                      onClick={() =>
                        setFieldValue(
                          "showCourseOptions",
                          !values.showCourseOptions
                        )
                      }
                    >
                      {values.course || "Select Course"}
                      {values.showCourseOptions ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {values.showCourseOptions && (
                      <div className="absolute z-10 w-full  bg-white border  shadow-lg">
                        {courses.map((course) => (
                          <div
                            key={course}
                            onClick={() => {
                              setFieldValue("course", course);
                              setFieldValue("showCourseOptions", false);
                            }}
                            className="px-4 py-3 cursor-pointer border-b last:border-b-0 hover:bg-purple-50"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <Field type="checkbox" name="level" value="Basic" />
                      <span>Basic / Private Class</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Field
                        type="checkbox"
                        name="level"
                        value="Intermediate"
                      />
                      <span>Intermediate / Regular Class</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <Field type="checkbox" name="level" value="Advanced" />
                      <span>Advanced Class</span>
                    </label>
                    <ErrorMessage
                      name="level"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <label>Message</label>
                  <Field
                    as="textarea"
                    placeholder="Message"
                    rows={4}
                    name="message"
                    className="w-full border border-gray-300 px-4 py-3 text-[#4A3F3F] outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-[#3D220F] font-semibold py-3 bg-[#EBA747] rounded-full hover:bg-[#3D220F] transition hover:text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Book Seat"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </>
  );
};

export default Enroll;
