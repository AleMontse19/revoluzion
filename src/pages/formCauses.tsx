import React from 'react';
import { Globe, PlusCircle, Calendar, DollarSign, Image, Info, Tag, Text, Search, User } from 'lucide-react';
import Link from 'next/link';

const SocialCausePage = () => {
  return (
    <div className="min-h-screen bg-foreground font-inter text-gray-200 pb-24 md:pb-0">
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


      {/* Form Section */}
      <section className="py-12 md:py-16 bg-foreground mx-4 pt-28 pb-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Create a New Cause
            </h2>
            <p className="text-gray-accent mt-2">
              Describe the details of your cause so the community can learn about it and support it 
            </p>
          </div>

          <form className="bg-accent/20 p-8 rounded-[2.5rem] shadow-2xl">
            {/* Cause Title */}
            <div className="mb-6">
              <label htmlFor="causeTitle" className="block text-accent font-semibold mb-2 flex items-center">
                <Text className="w-5 h-5 mr-2" /> Cause Title <span className="text-danger ml-1">*</span>
              </label>
              <input
                type="text"
                id="causeTitle"
                name="causeTitle"
                placeholder="Ex: Amazon reforestation"
                className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner"
                required
              />
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <label htmlFor="fullDescription" className="block text-accent font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2" /> Description <span className="text-danger ml-1">*</span>
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                placeholder="Describe your cause, your goals, the problems it addresses and how do you plan to solve it."
                className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner resize-y"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-accent font-semibold mb-2 flex items-center">
                <Tag className="w-5 h-5 mr-2" /> Categoría <span className="text-danger ml-1">*</span>
              </label>
              <select
                id="category"
                name="category"
                className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner"
                required
                defaultValue=""
              >
                <option value="" disabled>Choose a Category</option>
                <option value="medio-ambiente">Environment</option>
                <option value="educacion">Education</option>
                <option value="salud">Health</option>
                <option value="comunidad">Community</option>
                <option value="animales">Animals</option>
                <option value="arte-cultura">Art and Culture</option>
                <option value="otros">Others</option>
              </select>
            </div>

            {/* Funding Goal and End Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fundingGoal" className="block text-accent font-semibold mb-2 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" /> Goal (USD) <span className="text-danger ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="fundingGoal"
                  name="fundingGoal"
                  placeholder="Ej: 5000"
                  min="1"
                  className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner"
                  required
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-accent font-semibold mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" /> Deadline <span className="text-danger ml-1">*</span>
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label htmlFor="imageUrl" className="block text-accent font-semibold mb-2 flex items-center">
                <Image className="w-5 h-5 mr-2" /> Image (URL)
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                className="appearance-none bg-foreground/50 border border-secondary rounded-2xl w-full py-3 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 shadow-inner"
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-10">

              <button
                type="submit"
                className="w-full sm:w-auto bg-accent/90 text-danger px-8 py-3 rounded-full font-semibold hover:bg-tertiary transition-all duration-300 shadow-lg hover:shadow-primary/40 flex items-center justify-center"
              >
                <PlusCircle className="w-5 h-5 mr-2" /> Create Cause
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-danger text-white px-8 py-3 rounded-full font-semibold hover:bg-tertiary hover:text-danger transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
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
          <Link href="/" className="flex flex-col items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <Search className="w-7 h-7" />
            <span className="text-xs font-semibold">Explore</span>
          </Link>
          <Link href="/formCauses" className="flex flex-col items-center justify-center text-primary transition-colors">
            <PlusCircle className="w-7 h-7" />
            <span className="text-xs font-medium">Create</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <Info className="w-7 h-7" />
            <span className="text-xs font-medium">About</span>
          </Link>
          <button className="flex flex-col items-center justify-center text-gray-500 hover:text-primary transition-colors">
            <User className="w-7 h-7" />
            <span className="text-xs font-medium">World ID</span>
          </button>
        </nav>
      </div>
    </div>

  );
};


export default SocialCausePage;