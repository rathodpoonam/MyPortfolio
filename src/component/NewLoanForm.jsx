import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const convertToWords = (num) => {
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";
  if (num < 20) return a[num];
  if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
  return "";
};

const NewLoanForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [loanInWords, setLoanInWords] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().matches(/^[a-z][a-z\s]*$/i, "Only letters and spaces allowed").min(3, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    pan: Yup.string().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN format (ABCDE1234F)").required("PAN is required"),
    loanAmount: Yup.number().positive("Loan amount must be greater than 0").required("Loan amount is required"),
    captchaInput: Yup.string().required("Captcha is required").test("captcha-match", "Captcha does not match", (value) => value === captcha),
  });

  return (
    <div className="flex justify-center items-center  bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="w-1/2">
          <img src={"/project-img/loan.jpeg"} alt="Loan" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-6">
          <Formik
            initialValues={{ name: "", email: "", pan: "", loanAmount: "", captchaInput: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              alert("Form submitted successfully!");
              resetForm();
              setCaptcha(generateCaptcha());
              setLoanInWords("");
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form>
                <h2 className="text-2xl font-bold text-gray-700 mb-5 text-center">Loan Application Form</h2>

                {[{ label: "Name", name: "name", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "PAN", name: "pan", type: "text" }].map(({ label, name, type }) => (
                  <div key={name} className="mb-4">
                    <label className="block font-medium text-gray-600">{label}</label>
                    <Field type={type} name={name} className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" />
                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                  </div>
                ))}

                <div className="mb-4">
                  <label className="block font-medium text-gray-600">Loan Amount</label>
                  <Field
                    type="number"
                    name="loanAmount"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    onChange={(e) =>  {
                      const value = e.target.value;
                      setFieldValue("loanAmount", value);
                      setLoanInWords(value ? convertToWords(parseInt(value, 10)) : "");
                    }}
                  />
                  <ErrorMessage name="loanAmount" component="div" className="text-red-500 text-sm" />
                  {values.loanAmount && <div className="mt-2 text-gray-700 font-semibold text-blue-600">{loanInWords}</div>}
                </div>

                <div className="mb-4">
                  <label className="block font-medium text-gray-600">Captcha</label>
                  <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md">
                    <span className="font-mono text-lg">{captcha}</span>
                    <button type="button" className="text-blue-500" onClick={() => setCaptcha(generateCaptcha())}>
                      Refresh
                    </button>
                  </div>
                  <Field type="text" name="captchaInput" className="w-full p-2 border border-gray-300 rounded-md mt-2" />
                  <ErrorMessage name="captchaInput" component="div" className="text-red-500 text-sm" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewLoanForm;
