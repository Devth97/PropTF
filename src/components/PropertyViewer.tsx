import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import type { Tour } from '../types';

interface PropertyViewerProps {
  tours: Tour[];
}

export const PropertyViewer: React.FC<PropertyViewerProps> = ({ tours }) => {
  const [currentScene, setCurrentScene] = useState(tours[0]);

  const handleHotspotClick = (sceneId: string) => {
    const newScene = tours.find((tour) => tour.id === sceneId);
    if (newScene) {
      setCurrentScene(newScene);
    }
  };

  return (
    <div className="relative h-[70vh] w-full">
      <Pannellum
        width="100%"
        height="100%"
        image={currentScene.imageUrl}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log('panorama loaded');
        }}
        hotSpots={currentScene.hotspots.map((hotspot) => ({
          ...hotspot,
          handleClick: () => {
            if (hotspot.type === 'scene' && hotspot.sceneId) {
              handleHotspotClick(hotspot.sceneId);
            }
          }
        }))}
      />
      
      <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="flex gap-2 overflow-x-auto">
          {tours.map((tour) => (
            <button
              key={tour.id}
              onClick={() => setCurrentScene(tour)}
              className={`px-4 py-2 rounded-lg text-white whitespace-nowrap ${
                currentScene.id === tour.id
                  ? 'bg-indigo-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {tour.room}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};