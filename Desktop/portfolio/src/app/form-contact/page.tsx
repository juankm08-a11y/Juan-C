"use client";

import React, { useState } from "react";

export default function FormContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Mensaje enviado correctamente");
        setFormData({ name: "", surname: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Error de red");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen  p-4 md:p-10 bg-[#BEFC9C]">
      <section className=" w-full bg-white border-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              name="surname"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#65C281] text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
          )}
        </form>
      </section>
    </main>
  );
}
