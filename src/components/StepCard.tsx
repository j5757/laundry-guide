import React from 'react';
import { Card } from './ui/Card';

interface StepCardProps {
  title: string;
  instructions: string;
  imageUrl?: string;
  videoUrl?: string;
}

export function StepCard({ title, instructions, imageUrl, videoUrl }: StepCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      {videoUrl && (
        <div className="relative pb-[56.25%] h-0">
          <iframe
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{instructions}</p>
      </div>
    </Card>
  );
}