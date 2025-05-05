"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import FormContactPage from "./form-contact/page";

export default function Home() {
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showContact) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContact]);

  const handleAbout = () => router.push("/about");

  const handleProyect = () => router.push("/proyects");

  const handleContactMe = () => setShowContact(true);

  const handleCV = () => {
    const link = document.createElement("a");
    link.href = "/My_CV.pdf";
    link.download = "MY_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttons = [
    { onClick: handleAbout, label: "About me" },
    { onClick: handleProyect, label: "View Proyects" },
    { onClick: handleCV, label: "Download CV" },
    { onClick: handleContactMe, label: "Contact Me" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/testimonies", label: "Testimonies" },
    { href: "/experiences", label: "Experiences" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-2 sm:p-4 md:p-10 bg-white transition-all duration-500 ease-in-out">
      <section className="border-2 rounded-lg bg-[#90EAE9] w-full max-w-sm md:max-w-4xl p-4 md:p-0 space-y-4 md:space-y-6">
        <header className="text-center space-y-1 ">
          <h1 className="text-lg md:text-xl font-semibold text-[#CE5D5D] transition-colors duration-300 hover:text-red-600">
            PORTFOLIO
          </h1>
          <h2 className="text-sm md:text-lg font-semibold text-[#CE5D5D]">
            Juan Carlos Muñoz Pabon
          </h2>
        </header>
        <nav className="relative border-2 bg-[#9CFA8D] p-2 rounded-md">
          <button
            className="sm:hidden absolute top-2 right-2 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className="block w-6 h-0 5 bg-black mb-1 transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0 5 bg-black mb-1 opacity-75 transition-transform duration-300"
              style={{
                opacity: isMenuOpen ? "0" : "0.75",
              }}
            />
            <span
              className="block w-6 h-0 5 bg-black transition-transform duration-300"
              style={{
                transform: isMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
          <h1>PORTFOLIO</h1>
          <ul
            className={`flex flex-wrap justify-center gap-4 md:gap-12 py-2 ${
              isMenuOpen ? "block" : "hidden"
            }sm:flex transition-all duration-300 ease-in-out`}
          >
            {navLinks.map((link, idx) => (
              <li key={`${link.label}-${idx}`}>
                <Link
                  href={link.href}
                  className="hover:underline transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <div className="bg-[#40B9B9] rounded-md p-4 max-w-md border-2 transition-transform duration-300 hover:scale-105">
              <p>
                Im a frontend and backend developer (full-stack) and a software
                engineer
              </p>
            </div>
            <div className="bg-[#DFB06E] rounded-md p-4 max-w-md border-2 transition-opacity duration-500">
              <h3 className="font-medium text-[#482A9B]">Welcome</h3>
              <p className="text-[#482A9B]">
                Welcome Im Juan Muñoz Youll discover how I turn problems into
                experiences, in this space of creativity and code
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* <Image
              src="/image.png"
              alt="image profile"
              width={254}
              height={24}
              className="rounded-full border-2"
            />
            <Image
              src="/image.png"
              alt="image profile"
              className="rounded-full border-2"
            /> */}
          </div>
        </section>

        <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {buttons.map((btn, idx) => (
            <button
              key={`${btn.label}-${idx}`}
              onClick={btn.onClick}
              className="bg-[#51FE99] px-4 py-2 rounded border-2 w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
            >
              {btn.label}
            </button>
          ))}
        </section>
        <footer className="bg-[#FFDE83] rounded-md p-4 text-center break-words text-sm transition-opacity duration-500">
          © Juan Carlos Muñoz 22-04-2025 <br />
          Contact:juancarlospabon01@gmail.com
        </footer>
        {showContact && (
          <section
            ref={formRef}
            className="w-full max-w-xl mt-8 animate-fadeIn"
          >
            <FormContactPage />
          </section>
        )}
      </section>
    </main>
  );
}
