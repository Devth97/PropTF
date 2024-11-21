import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Ruler, Phone } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PropertyViewer } from '../components/PropertyViewer';
import { usePropertyStore } from '../store/propertyStore';

export const PropertyPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties } = usePropertyStore();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Properties
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertyViewer tours={property.images.tours} />

          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {property.location.address}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-indigo-600">
                  ${property.price.toLocaleString()}
                </div>
                <button className="mt-4 flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Agent
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Home className="w-5 h-5 mr-3" />
                    <span>Type: </span>
                    <span className="ml-2 capitalize">{property.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-5 h-5 mr-3" />
                    <span>Size: </span>
                    <span className="ml-2">{property.size} sq ft</span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mt-8 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                      mapContainerStyle={{ width: '100%', height: '100%' }}
                      center={property.location.coordinates}
                      zoom={15}
                    >
                      <Marker position={property.location.coordinates} />
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};