import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le Délice | Restaurant à Cotonou',
  description: "Restaurant haut de gamme à Cotonou - Petit déjeuner, déjeuner, dîner. Excellente ambiance, cocktails, desserts et plus. Réservez dès maintenant."
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="bg-black/60 p-6 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Le Délice</h1>
          <p className="mt-4 text-lg md:text-2xl">Lexpérience culinaire décontractée & savoureuse à Cotonou</p>
          <div className="mt-6 space-x-4">
            <a href="#menu" className="bg-white text-black px-4 py-2 rounded-xl font-semibold">Voir le menu</a>
            <a href="#reservation" className="border border-white px-4 py-2 rounded-xl font-semibold">Réserver</a>
          </div>
        </div>
      </section>

      {/* A propos */}
      <section id="a-propos" className="px-6 py-20 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">À propos</h2>
          <p className="text-lg leading-relaxed">Chez Le Délice, nous combinons passion culinaire et hospitalité béninoise. Notre chef revisite des classiques africains & européens avec des produits frais et locaux. Depuis 2015, notre mission est de créer une atmosphère chaleureuse et un goût inoubliable.</p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Entrées</h3>
              <ul className="space-y-2">
                <li>Salade fraîche - 3 000 F</li>
                <li>Soupe du jour - 2 500 F</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Plats principaux</h3>
              <ul className="space-y-2">
                <li>Poisson braisé & attiéké - 6 500 F</li>
                <li>Burger maison - 5 000 F</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Desserts</h3>
              <ul className="space-y-2">
                <li>Fondant au chocolat - 3 500 F</li>
                <li>Tiramisu - 3 000 F</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Boissons</h3>
              <ul className="space-y-2">
                <li>Cocktail maison - 2 500 F</li>
                <li>Bière locale - 2 000 F</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services et Ambiance */}
      <section className="px-6 py-20 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nous offrons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="list-disc ml-5">
                <li>Livraison</li>
                <li>Vente à emporter</li>
                <li>Sur place</li>
                <li>Réservations acceptées</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ambiance</h3>
              <ul className="list-disc ml-5">
                <li>Romantique & haut de gamme</li>
                <li>Décontractée & branchée</li>
                <li>Convient aux groupes et touristes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Accessibilité</h3>
              <ul className="list-disc ml-5">
                <li>Toilettes accessibles</li>
                <li>Chaises hautes pour enfants</li>
                <li>Parking gratuit disponible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="reservation" className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Réservez une table</h2>
        <p className="mb-8 text-gray-700">Planifiez votre prochaine visite en quelques clics</p>
        <div className="mx-auto max-w-2xl">
          <iframe
            src="https://calendly.com/tonresto/reservation"
            width="100%"
            height="500"
            frameBorder="0"
            className="rounded-xl shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-700 mb-4">📍 Fidjrossè plage, Cotonou | 📞 +229 97 00 00 00</p>
        <a href="https://goo.gl/maps/exemple" className="text-blue-600 underline">Voir sur Google Maps</a>
      </section>
    </main>
  );
}
