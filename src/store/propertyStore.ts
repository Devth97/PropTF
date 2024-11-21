import { create } from 'zustand';
import type { Property } from '../types';

interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  filters: {
    location: string;
    priceRange: [number, number];
    propertyType: string;
    size: [number, number];
  };
  setProperties: (properties: Property[]) => void;
  setSelectedProperty: (property: Property | null) => void;
  setFilters: (filters: Partial<PropertyState['filters']>) => void;
}

// Sample data
const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    price: 750000,
    location: {
      address: '123 Downtown Ave, City',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    size: 1200,
    type: 'apartment',
    amenities: ['Parking', 'Pool', 'Gym'],
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400',
      tours: [
        {
          id: 'living-room',
          room: 'Living Room',
          imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200',
          hotspots: [
            {
              pitch: 0,
              yaw: 90,
              type: 'scene',
              text: 'Go to Kitchen',
              sceneId: 'kitchen'
            }
          ]
        },
        {
          id: 'kitchen',
          room: 'Kitchen',
          imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200',
          hotspots: [
            {
              pitch: 0,
              yaw: -90,
              type: 'scene',
              text: 'Back to Living Room',
              sceneId: 'living-room'
            }
          ]
        }
      ]
    }
  }
];

export const usePropertyStore = create<PropertyState>((set) => ({
  properties: sampleProperties,
  selectedProperty: null,
  filters: {
    location: '',
    priceRange: [0, 1000000],
    propertyType: '',
    size: [0, 5000]
  },
  setProperties: (properties) => set({ properties }),
  setSelectedProperty: (property) => set({ selectedProperty: property }),
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters }
  }))
}));