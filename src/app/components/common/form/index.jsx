"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { BsArrowRight, BsArrowRepeat } from "react-icons/bs";
import emailjs from "emailjs-com";

const UploadFormikForm = ({ btnLabel, placeholderText, options }) => {
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
      file: null,
      option: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);

      // Upload file to Cloudinary
      const data = new FormData();
      data.append("file", values.file);
      data.append("upload_preset", "oxoHub");
      data.append("name", values.name);
      data.append("email", values.email);
      data.append("logo", values.option);
      data.append("description", values.description);

      try {
        const cloudinaryResponse = await fetch(
          `https://api.cloudinary.com/v1_1/daffsbhax/image/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        if (cloudinaryResponse.ok) {
          const cloudinaryResult = await cloudinaryResponse.json();
          console.log("Upload successful:", cloudinaryResult);

          // Send email using EmailJS
          await emailjs.send(
            "service_7ii6dcg", // Replace with your EmailJS service ID
            "template_u315m92", // Replace with your EmailJS template ID
            {
              name: values.name,
              email: values.email,
              description: values.description,
              file_url: cloudinaryResult.secure_url, // Include the Cloudinary URL in the email
              logo: values.option, // Include the selected option in the email
            },
            "__nHbPsErxW9PNH-W" // Replace with your EmailJS user ID
          );

          console.log("Email sent successfully!");
          resetForm(); // Reset form fields after successful submission
          formik.setFieldValue("file", null);
        } else {
          console.error("Upload to Cloudinary failed");
        }
      } catch (error) {
        console.error("An error occurred while uploading:", error);
      } finally {
        setIsLoading(false); // Set loading to false after submission is completed
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[100%] mx-5 md:mx-0 bg-white shadow-lg p-6 md:py-8 md:px-12 rounded-lg"
    >
      <div className="mb-4">
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter your name"
          className="block w-full p-2 border-b-2 border-orange-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter your email"
          className="block w-full p-2 border-b-2 border-orange-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <select
          name="option"
          onChange={formik.handleChange}
          value={formik.values.option}
          className="block w-full p-2 border-b-2 border-orange-500 focus:outline-none"
          required
        >
          <option value="" disabled>
            Logo
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <textarea
          name="description"
          rows={2}
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder={placeholderText}
          className="block w-full p-2 pb-12 border-b-2 border-orange-500 focus:outline-none placeholder:text-gray-400"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Upload Document</label>
        <input
          type="file"
          name="file"
          onChange={(event) =>
            formik.setFieldValue("file", event.target.files[0])
          }
          className="block w-full text-sm text-white-500 file:mr-4 file:py-2 file:px-4 file:border file:border-orange-300 file:rounded-md file:text-sm file:font-semibold file:bg-white file:text-orange-500 hover:file:bg-orange-500 hover:file:text-white focus:outline-none"
          required
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={isLoading} // Disable button while loading
          className={`text-orange-500 border-2 border-orange-500 font-bold py-2 px-4 rounded flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300 ease-in-out ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center">
              <BsArrowRepeat className="animate-spin mr-2" size={24} />{" "}
              {/* Spinner icon */}
              Booking...
            </div>
          ) : (
            <>
              {btnLabel}
              <BsArrowRight size={30} className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default UploadFormikForm;
