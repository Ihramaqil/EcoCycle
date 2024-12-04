import React from "react";
import bgHero from "../../assets/Dash.png"; // Gambar latar belakang

const NavbarItem = ({ href, text }) => (
  <li className="group relative">
    <a href={href} className="px-4 py-2 inline-block relative group transition-all duration-300 ease-in-out">
      <span className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:w-full transition-all duration-300 ease-in-out rounded-md"></span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{text}</span>
    </a>
  </li>
);

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header dengan posisi fixed */}
      <header className="bg-green-700 text-white py-6 shadow-lg fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">ECOCYCLE</div>

          {/* Navbar */}
          <nav className="flex-1 text-center">
            <ul className="flex justify-center space-x-8 text-xl font-medium">
              <NavbarItem href="#how-it-works" text="How It Works" />
              <NavbarItem href="#for-business" text="For Business" />
              <NavbarItem href="#about-us" text="About Us" />
              <NavbarItem href="#contact-us" text="Contact Us" />
              <NavbarItem href="#blog" text="Blog" />
            </ul>
          </nav>

          {/* Login */}
          <div className="ml-auto">
            <ul className="space-x-8 text-xl font-bold">
              <a href="#Login" className="px-4 py-2 inline-block relative group transition-all duration-300 ease-in-out">
                <span className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:w-full transition-all duration-300 ease-in-out rounded-md"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Login</span>
              </a>
            </ul>
          </div>
        </div>
      </header>

      {/* Konten utama dengan jarak di bawah header */}
      <div className="pt-24"> {/* Jarak untuk menghindari tumpang tindih dengan header */}
        {/* Hero Section */}
        <section
          className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
          style={{
            backgroundImage: `url(${bgHero})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ECOCYCLE</h1>
            <p className="text-lg md:text-xl mb-6">Transforming the way we think about sustainability.</p>
            <a href="#learn-more" className="px-6 py-3 bg-green-700 text-white rounded-full text-lg hover:bg-green-800 transition">
              Learn More
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2024 ECOCYCLE | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
