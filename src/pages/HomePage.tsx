import React from 'react';
import { Building } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { usePropertyStore } from '../store/propertyStore';

export const HomePage: React.FC = () => {
  const { properties } = usePropertyStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building className="w-8 h-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Virtual Property Tours
              </h1>
            </div>
            <nav className="flex space-x-4">
              <button className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900">
                Sign In
              </button>
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchFilters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};