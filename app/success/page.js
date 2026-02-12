"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ValentinePage() {
  const router = useRouter();
  const [answer, setAnswer] = useState(null);
  const noButtonRef = useRef(null);

  const moveNoButton = () => {
    if (!noButtonRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const buttonRect = noButtonRef.current.getBoundingClientRect();

    // Leave at least 10px margin from screen edges
    const maxX = viewportWidth - buttonRect.width - 10;
    const maxY = viewportHeight - buttonRect.height - 10;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move button freely in the viewport
    noButtonRef.current.style.position = "fixed";
    noButtonRef.current.style.left = `${randomX}px`;
    noButtonRef.current.style.top = `${randomY}px`;
  };

  const handleAnswer = (answer) => {
    if (answer === "yes") {
      router.push('/date');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur shadow-xl rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">

        {/* Decorative hearts and flowers */}
        <div className="absolute -top-6 -left-6 text-4xl opacity-30 animate-bounce">💖</div>
        <div className="absolute -top-4 -right-4 text-3xl opacity-30 animate-pulse">🌸</div>
        <div className="absolute -bottom-6 -right-6 text-4xl opacity-30 animate-bounce">💐</div>
        <div className="absolute -bottom-4 -left-4 text-3xl opacity-30 animate-pulse">❤️</div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-rose-600 tracking-wide font-serif">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6 relative h-32">
          <button
            onClick={() => 
              handleAnswer("yes")
            }
            className="flex-1 bg-rose-500 hover:bg-rose-600 text-white text-3xl sm:text-4xl font-bold py-4 rounded-3xl shadow-lg transition-transform transform hover:scale-105"
          >
            Yes 💘
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onClick={() => setAnswer("no")}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-3xl sm:text-4xl font-bold py-4 rounded-3xl shadow-lg transition-transform transform"
          >
            No 🙈
          </button>
        </div>

        {answer === "no" && (
          <p className="mt-8 text-2xl sm:text-3xl text-gray-600 font-semibold font-serif">
            I’ll still bring chocolates anyway 🍫
          </p>
        )}
      </div>
    </div>
  );
}
