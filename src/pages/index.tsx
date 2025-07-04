import React from 'react';
import { Handshake, Globe, DollarSign, Eye, PlusCircle, Search, Info, User } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-foreground font-inter text-gray-800 pb-24 md:pb-0">
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
      <section className="bg-primary/80 pt-28 pb-20 md:py-28 text-center shadow-2xl mx-0 md:mx-4 md:mt-4 md:rounded-[2.5rem]">
        <div className="container mx-auto px-4">
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

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-transparent mx-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-white">
            Why Revoluzion?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-secondary/40 rounded-2xl inline-block mb-4">
                <Handshake className="w-10 h-10 text-danger" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Secure Identitiy</h4>
              <p className="text-gray-600">
                World ID Verification for authentic and secure participation.
              </p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-tertiary/50 rounded-2xl inline-block mb-4">
                <DollarSign className="w-10 h-10 text-section" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Tokenized Economy</h4>
              <p className="text-gray-600">
                Incentives and rewards for supporting and contributing to causes.
                Incentivos y recompensas para apoyar y contribuir a las causas.
              </p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-secondary/40 rounded-2xl inline-block mb-4">
                <Eye className="w-10 h-10 text-danger/80" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Total Transparency</h4>
              <p className="text-gray-600">
                All transactions and case progress are visible on the blockchain.
              </p>
            </div>
            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-tertiary/50 rounded-2xl inline-block mb-4">
                <Globe className="w-10 h-10 text-section" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Descentralized</h4>
              <p className="text-gray-600">
                Without intermediaries, the community has the control and the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section 
      <section className="py-20 md:py-28 bg-transparent text-center my-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-6xl mx-auto px-4">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 text-gray-200">
            How Does It Work?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/80 text-section rounded-full flex items-center justify-center text-3xl font-bold mb-5 shadow-lg">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Connect your World ID</h4>
              <p className="text-gray-300 text-center">
                Verify your identity securely to participate.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/80 text-section rounded-full flex items-center justify-center text-3xl font-bold mb-5 shadow-lg">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Explore or Create Causes</h4>
              <p className="text-gray-300 text-center">
                Discover projects or launch your own initiative.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-accent/80 text-section rounded-full flex items-center justify-center text-3xl font-bold mb-5 shadow-lg">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white">Support and Participate</h4>
              <p className="text-gray-300 text-center">
                Contribute to causes and follow their progress in real time.
              </p>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Call to Action Section 
      <section className="py-20 md:py-28 bg-accent/5 text-center my-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-6xl mx-auto px-4">
        <div className="text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Join to the Social Impact Revolution!
          </h3>
          <p className="text-md md:text-lg mb-10 max-w-3xl mx-auto opacity-90">
            Your support makes the difference. Start searching or create causes today.
          </p>
          <button className="bg-tertiary/70 text-white px-10 py-4 rounded-full font-bold text-xl hover:opacity-90 transition-all duration-300 shadow-2xl hover:scale-105 transform">
            Start Now
          </button>
        </div>
      </section>
*/}
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