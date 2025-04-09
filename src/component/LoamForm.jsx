import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Function to generate a random captcha
const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

// Function to convert number to words
const convertToWords = (num) => {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";
  if (num < 20) return a[num];
  if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
  if (num < 1000) return a[Math.floor(num / 100)] + " Hundred " + (num % 100 ? convertToWords(num % 100) : "");
  if (num < 100000) return convertToWords(Math.floor(num / 1000)) + " Thousand " + (num % 1000 ? convertToWords(num % 1000) : "");
  if (num < 10000000) return convertToWords(Math.floor(num / 100000)) + " Lakh " + (num % 100000 ? convertToWords(num % 100000) : "");
  return convertToWords(Math.floor(num / 10000000)) + " Crore " + (num % 10000000 ? convertToWords(num % 10000000) : "");
};

const LoanForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [loanInWords, setLoanInWords] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-z][a-z\s]*$/i, "Only letters and spaces allowed")
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    pan: Yup.string()
      .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN format (ABCDE1234F)")
      .required("PAN is required"),
    loanAmount: Yup.number()
      .positive("Loan amount must be greater than 0")
      .required("Loan amount is required"),
    captchaInput: Yup.string()
      .required("Captcha is required")
      .test("captcha-match", "Captcha does not match", (value) => value === captcha),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", pan: "", loanAmount: "", captchaInput: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Form submitted successfully!");
        resetForm();
        setCaptcha(generateCaptcha()); // Generate new captcha on submit
        setLoanInWords(""); // Reset loan amount in words
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
          <div className="mb-4">
            <label className="block font-semibold">Name</label>
            <Field type="text" name="name" className="w-full p-2 border rounded-md" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <Field type="email" name="email" className="w-full p-2 border rounded-md" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">PAN</label>
            <Field type="text" name="pan" className="w-full p-2 border rounded-md" />
            <ErrorMessage name="pan" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Loan Amount</label>
            <Field
              type="number"
              name="loanAmount"
              className="w-full p-2 border rounded-md"
              onChange={(e) => {
                const value = e.target.value;
                setFieldValue("loanAmount", value);
                setLoanInWords(value ? convertToWords(parseInt(value, 10)) : "");
              }}
            />
            <ErrorMessage name="loanAmount" component="div" className="text-red-500 text-sm" />
            {values.loanAmount && (
              <div className="mt-2 text-gray-600 font-medium">
               <span className="text-blue-500">{loanInWords}</span>
              </div>
            )}
          </div>

          {/* Captcha Section */}
          <div className="mb-4">
            <label className="block font-semibold">Captcha</label>
            <div className="flex items-center justify-between">
              <span className="font-mono text-lg bg-gray-200 px-4 py-2 rounded-md">{captcha}</span>
              <button
                type="button"
                className="text-blue-500 ml-2"
                onClick={() => setCaptcha(generateCaptcha())}
              >
                Refresh
              </button>
            </div>
            <Field type="text" name="captchaInput" className="w-full p-2 border rounded-md mt-2" />
            <ErrorMessage name="captchaInput" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoanForm;
