export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-black text-gray-300 py-10 mt-1">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Title */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Trip Journey
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#hero" className="hover:text-pink-400 transition">Home</a>
          <a href="#gallery" className="hover:text-pink-400 transition">Gallery</a>
          <a href="#journey" className="hover:text-pink-400 transition">Journey</a>
          <a href="#moments" className="hover:text-pink-400 transition">Moments</a>
        </nav>

        {/* Socials */}
        <div className="flex gap-5 text-lg">
          <a href="#" className="hover:text-pink-400 transition">🌐</a>
          <a href="#" className="hover:text-pink-400 transition">📸</a>
          <a href="#" className="hover:text-pink-400 transition">🐦</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        Built with ❤️ during our trip memories • © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
