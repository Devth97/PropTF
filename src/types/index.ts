export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  size: number;
  type: 'house' | 'apartment' | 'condo';
  amenities: string[];
  images: {
    thumbnail: string;
    tours: Tour[];
  };
}

export interface Tour {
  id: string;
  room: string;
  imageUrl: string;
  hotspots: Hotspot[];
}

export interface Hotspot {
  pitch: number;
  yaw: number;
  type: 'scene' | 'info';
  text: string;
  sceneId?: string;
}