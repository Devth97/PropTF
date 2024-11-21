import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, MapPin, Ruler } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/property/${property.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
    >
      <div className="relative h-48">
        <img
          src={property.images.thumbnail}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="font-semibold text-indigo-600">
            ${property.price.toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{property.location.address}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span className="capitalize">{property.type}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Ruler className="w-4 h-4 mr-2" />
            <span>{property.size} sq ft</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};