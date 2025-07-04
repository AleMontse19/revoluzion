import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeftCircle, DollarSign, Handshake } from 'lucide-react';

const CauseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Placeholder for cause data - in a real app, you'd fetch this using `id`
  const cause = {
    id: id,
    name: `Causa Ejemplo ${id}`,
    description: `Esta es una descripción detallada de la Causa Ejemplo ${id}. Aquí se explicarán los objetivos, el impacto esperado y cómo tu contribución puede marcar la diferencia.`, 
    image: 'https://via.placeholder.com/600x400?text=Imagen+de+la+Causa',
    currentFunds: 7500,
    goal: 15000,
    supporters: 120,
  };

  if (!id) {
    return <div className="min-h-screen bg-foreground flex items-center justify-center text-white">Cargando detalles de la causa...</div>;
  }

  return (
    <div className="min-h-screen bg-foreground font-inter text-gray-800 pb-24 md:pb-0 bg-dot-pattern bg-dot-pattern-size animate-pulseBg">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm p-4 sticky top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-accent hover:text-primary transition-colors">
            <ArrowLeftCircle className="w-7 h-7" />
            <span className="text-xl font-bold">Volver a Causas</span>
          </Link>
          <h1 className="text-2xl font-bold text-accent">Revoluzion</h1>
        </div>
      </header>

      {/* Cause Detail Section */}
      <section className="py-16 md:py-24 mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01]">
          <img src={cause.image} alt={cause.name} className="w-full h-80 object-cover" />
          <div className="p-8">
            <h2 className="text-4xl font-extrabold mb-4 text-primary">{cause.name}</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{cause.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-primary mb-2">Fondo Recaudado</h3>
                <p className="text-3xl font-bold text-accent">${cause.currentFunds.toLocaleString()}</p>
                <p className="text-gray-600">de ${cause.goal.toLocaleString()} objetivo</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-secondary h-2.5 rounded-full"
                    style={{ width: `${(cause.currentFunds / cause.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-primary/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-primary mb-2">Apoyadores</h3>
                <p className="text-3xl font-bold text-accent">{cause.supporters}</p>
                <p className="text-gray-600">personas han apoyado esta causa</p>
              </div>
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-accent text-danger px-8 py-4 rounded-full font-bold text-lg hover:bg-danger hover:text-accent transition-all duration-300 shadow-xl hover:scale-105 transform flex items-center justify-center">
                <Handshake className="mr-3 w-6 h-6" /> Apoyar Causa
              </button>
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-xl hover:scale-105 transform flex items-center justify-center">
                <DollarSign className="mr-3 w-6 h-6" /> Donar RVL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/70 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; 2025 Revoluzion. All Copyright Reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-white hover:text-tertiary">Privacy Policy</a> |
            <a href="#" className="text-white hover:text-tertiary ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CauseDetailPage;
