export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden"
      
    >

      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-600 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-600 opacity-20 rounded-full blur-3xl"></div>

      {/* Title/Logo */}
      <div className="absolute top-8 left-8 font-bold text-xl tracking-wide text-pink-400 drop-shadow-lg">
        Trip Journey
      </div>

      {/* Badge */}
      <span className="px-4 py-1 rounded-full bg-pink-600/80 text-white text-sm mb-6 shadow-md backdrop-blur-sm">
        Udaipur • September 2025
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
        Our Magical Getaway <span className="animate-pulse">💖</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl max-w-2xl mb-12 px-4 text-gray-300 leading-relaxed">
        From morning at city palace to sunset at monsoon palace — every
        moment became a memory we’ll hold forever.
      </p>

      {/* Trip Stats */}
      <div className="flex gap-10 text-pink-300 font-medium text-lg mb-16">
        <div className="flex flex-col items-center hover:scale-105 transition">
          <span className="text-3xl mb-1">📍</span>
          3 Days
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition">
          <span className="text-3xl mb-1">🏞️</span>
          7 Places
        </div>
        <div className="flex flex-col items-center hover:scale-105 transition">
          <span className="text-3xl mb-1">❤️</span>
          100+ Memories
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 animate-bounce text-2xl text-gray-400">↓</div>
    </section>
  );
}
