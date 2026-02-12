"use client";

import React from "react";

export default function ValentineSuccessPage() {
  // Random placeholder images
  const images = [
    "/fayeken4.jpg",
    "/fayeken3.jpg",
    "/fayeken5.jpg",
    "/fayeken1.jpg",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-rose-200 to-red-300 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <span className="absolute top-10 left-20 text-6xl animate-bounce text-pink-400">💖</span>
        <span className="absolute top-1/3 right-16 text-5xl animate-pulse text-rose-400">🌸</span>
        <span className="absolute bottom-20 left-1/3 text-6xl animate-bounce text-red-400">💐</span>
        <span className="absolute bottom-10 right-1/4 text-5xl animate-pulse text-pink-500">❤️</span>
      </div>

      {/* Main message */}
      <h1 className="z-10 text-4xl sm:text-6xl font-bold text-rose-700 font-serif mb-8 text-center">
        Yay! Can’t wait to spend Valentine’s with you ❤️
      </h1>

      {/* Images */}
      <div className="z-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            className="w-64 h-48 object-cover rounded-3xl shadow-lg border-4 border-pink-200 hover:scale-105 transition-transform"
          />
        ))}
      </div>
      <h3 className="z-10 text-4xl sm:text-6xl font-bold text-rose-700 font-serif mb-8 text-center mt-10">
        I love you, Faye! ❤️
      </h3>
      <div className="z-10">
        <iframe
          src="https://open.spotify.com/embed/track/2SEx5I4i16LVoyIYFgjjw8" // Example track
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
