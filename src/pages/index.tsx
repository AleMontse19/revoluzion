import React from 'react';
import { Handshake, Globe, DollarSign, Eye, PlusCircle, Search, Info, User } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-foreground font-inter text-gray-800 pb-24 md:pb-0 bg-dot-pattern bg-dot-pattern-size animate-pulseBg">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header for Mobile */}
      <header className="md:hidden bg-background/80 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="text-accent w-7 h-7" />
            <h1 className="text-xl font-bold text-accent">Revoluzion</h1>
          </div>
        </div>
      </header>

      {/* Header/Navigation Bar (Desktop) */}
      <header className="hidden md:block bg-background shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="text-accent w-8 h-8" />
            <h1 className="text-2xl font-bold text-accent">Revoluzion</h1>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 rounded-2xl text-accent font-medium hover:bg-secondary/10 hover:text-secondary transition-all duration-300">
              Search Causes
            </button>
            <button className="px-4 py-2 rounded-2xl text-accent font-medium hover:bg-secondary/10 hover:text-secondary transition-all duration-300">
              About
            </button>
            <button className="px-5 py-2 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/30">
              Connect World ID
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/80 pt-28 pb-20 md:py-28 text-center shadow-2xl mx-0 md:mx-4 md:mt-4 md:rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 animate-shimmer"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            Stand up for a better world, Together.
          </h2>
          <p className="text-md md:text-lg mb-10 max-w-3xl mx-auto text-blue-100">
            A descentralized platform to impulse social, collective and individual causes with transparency and security. 
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 px-4">
            <button className="w-full sm:w-auto bg-accent text-danger px-8 py-4 rounded-full font-bold text-lg over:bg-danger hover:text-accent transition-all duration-300 shadow-2xl hover:scale-105 transform flex items-center justify-center">
              <Search className="mr-3 w-6 h-6" /> Explore Causes
            </button>
            <Link href="/formCauses" className="w-full sm:w-auto">
              <button className="w-full bg-danger text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-danger transition-all duration-300 shadow-2xl hover:scale-105 transform flex items-center justify-center">
                <PlusCircle className="mr-3 w-6 h-6" /> Create a Cause
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Available Causes Section */}
      <section className="py-16 md:py-24 bg-transparent mx-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white">
            Explora Causas Disponibles
          </h3>
          {/* Placeholder for causes list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 animate-shimmer"></div>
              <h4 className="text-lg font-semibold mb-2 text-primary relative z-10">Causa #1</h4>
              <p className="text-gray-600 relative z-10">Breve descripción de la causa.</p>
              <Link href="/cause/1" className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-danger transition-colors relative z-10">
                Ver Detalles
              </Link>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 animate-shimmer"></div>
              <h4 className="text-lg font-semibold mb-2 text-primary relative z-10">Causa #2</h4>
              <p className="text-gray-600 relative z-10">Breve descripción de la causa.</p>
              <Link href="/cause/2" className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-danger transition-colors relative z-10">
                Ver Detalles
              </Link>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 animate-shimmer"></div>
              <h4 className="text-lg font-semibold mb-2 text-primary relative z-10">Causa #3</h4>
              <p className="text-gray-600 relative z-10">Breve descripción de la causa.</p>
              <Link href="/cause/3" className="mt-4 inline-block bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-danger transition-colors relative z-10">
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RVL Management Section */}
      <section className="py-16 md:py-24 bg-transparent mx-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white">
            Tu Revoluzion (RVL)
          </h3>
          <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 max-w-lg mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-secondary/10 opacity-50 animate-shimmer"></div>
            <h4 className="text-xl font-semibold mb-4 text-primary relative z-10">RVL Disponibles: <span className="text-accent">0.00</span></h4>
            <p className="text-gray-600 mb-6 relative z-10">
              Reclama tu AirDrop inicial de RVL y únete a la economía descentralizada.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/30 relative z-10">
              Reclamar AirDrop Inicial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/70 text-white py-8 mt-8 bottom-0">
        <div className="container mx-auto px-4 text-center text-sm bottom-0">
          <p>&copy; 2025 Revoluzion. All Copyrigth Reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-white hover:text-tertiary">Privacy Policy</a> |
            <a href="#" className="text-white hover:text-tertiary ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm shadow-[0_-5px_15px_rgba(0,0,0,0.08)] rounded-t-3xl">
        <nav className="flex justify-around items-center p-3">
          <Link href="/" className="flex flex-col items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <Search className="w-7 h-7" />
            <span className="text-xs font-semibold">Explore</span>
          </Link>
          <Link href="/formCauses" className="flex flex-col items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <PlusCircle className="w-7 h-7" />
            <span className="text-xs font-medium">Create</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <Info className="w-7 h-7" />
            <span className="text-xs font-medium">About</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <User className="w-7 h-7" />
            <span className="text-xs font-medium">World ID</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;