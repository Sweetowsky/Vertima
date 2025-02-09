import React, { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Pasek kontaktowy */}
      <div className="bg-[#352e4f] text-white text-center py-2 text-sm">
        <p>
          📞 <a href="tel:535969625" className="underline">535 969 625</a> | ✉️ <a href="mailto:vertima.ogrodzenia@gmail.com" className="underline">vertima.ogrodzenia@gmail.com</a>
        </p>
      </div>

      {/* Nagłówek z hamburger menu */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center space-x-4">
          <img src="logo.jpg" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-[#352e4f] hidden md:block">Vertima Ogrodzenia Systemowe</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="hover:text-green-500 text-lg">O nas</a>
          <a href="#services" className="hover:text-green-500 text-lg">Oferta</a>
          <a href="#projects" className="hover:text-green-500 text-lg">Realizacje</a>
          <a href="#contact" className="hover:text-green-500 text-lg">Kontakt</a>
        </nav>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 top-[100%] w-48 bg-white shadow-lg py-2 z-50">
            <a href="#about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>O nas</a>
            <a href="#services" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Oferta</a>
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Realizacje</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </div>
        )}
      </header>

      {/* Sekcja Hero */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-end justify-center text-white pb-12" style={{ backgroundImage: 'url(1.jpg)' }}>
        <div className="p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Solidne i Estetyczne Ogrodzenia</h2>
          <p className="mb-6 text-lg">Zapewniamy jakość, na której możesz polegać!</p>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition duration-300">Skontaktuj się z nami</a>
        </div>
      </section>

      {/* Sekcja O nas */}
      <section id="about" className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">O nas</h2>
        <p className="mt-4 text-gray-600">
          Specjalizujemy się w montażu ogrodzeń dla domów i firm. Gwarantujemy solidność i estetykę.
        </p>
      </section>

      {/* Sekcja Oferta */}
      <section id="services" className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Nasza oferta</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow text-lg">Montaż ogrodzeń</div>
          <div className="p-6 bg-white rounded shadow text-lg">Bramy i furtki</div>
          <div className="p-6 bg-white rounded shadow text-lg">Serwis i konserwacja</div>
        </div>
      </section>

      {/* Sekcja Realizacje */}
      <section id="projects" className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Nasze realizacje</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <img src="1.jpg" alt="Realizacja Bełchów" className="w-full h-60 object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray bg-opacity-50 text-white text-center py-2 rounded-b">Realizacja Bełchów</div>
          </div>
          <div className="relative">
            <img src="2.jpg" alt="Realizacja Łyszkowice" className="w-full h-60 object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray bg-opacity-50 text-black text-center py-2 rounded-b">Realizacja Łyszkowice</div>
          </div>
          <div className="relative">
            <img src="3.jpg" alt="Realizacja Maków" className="w-full h-60 object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray bg-opacity-50 text-white text-center py-2 rounded-b">Realizacja Maków</div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="flex justify-center space-x-4">
          <img src="facebook.png" alt="Facebook" className="h-6" />
          <img src="instagram.png" alt="Instagram" className="h-6" />
          <img src="tik-tok.png" alt="TikTok" className="h-6" />
        </div>
        <p className="mt-4">📞 535 969 625 | ✉️ vertima.ogrodzenia@gmail.com</p>
        <p>📍 Bełchów, ul. Ruciana 8</p>
        <p><a href="#" className="underline">Polityka prywatności</a> | <a href="#" className="underline">Cookies</a></p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Vertima Ogrodzenia Systemowe. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
