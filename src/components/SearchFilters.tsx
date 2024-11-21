import React from 'react';
import { Search, Home, DollarSign, Ruler } from 'lucide-react';
import { usePropertyStore } from '../store/propertyStore';

export const SearchFilters: React.FC = () => {
  const { filters, setFilters } = usePropertyStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Search className="w-4 h-4 mr-2" />
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filters.location}
            onChange={(e) => setFilters({ location: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <DollarSign className="w-4 h-4 mr-2" />
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.priceRange[0]}
              onChange={(e) => setFilters({ 
                priceRange: [parseInt(e.target.value), filters.priceRange[1]] 
              })}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({ 
                priceRange: [filters.priceRange[0], parseInt(e.target.value)] 
              })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Home className="w-4 h-4 mr-2" />
            Property Type
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filters.propertyType}
            onChange={(e) => setFilters({ propertyType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Ruler className="w-4 h-4 mr-2" />
            Size (sq ft)
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.size[0]}
              onChange={(e) => setFilters({ 
                size: [parseInt(e.target.value), filters.size[1]] 
              })}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={filters.size[1]}
              onChange={(e) => setFilters({ 
                size: [filters.size[0], parseInt(e.target.value)] 
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};