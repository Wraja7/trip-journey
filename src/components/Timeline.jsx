export default function Journey() {
  const journey = [
    {
      day: "Day 1",
      title: "Arrival in Hostel at lake pichole",
      description:
        "We reached Udaipur and spent the evening enjoying a peaceful stay at our hostel around Lake Pichola.",
      icon: "⛵",
    },
    {
      day: "Day 2 (Morning)",
      title: "City Palace ",
      description:
        "Explored the grandeur of City Palace, and it's museum , had lunch in their .",
      icon: "🏰",
    },
    {
      day: "Day 2 (Evening)",
      title: "Monsoon Palace",
      description:
        "Drove to monsoon palace on our scooty, enjoyed the ride and the view .",
      icon: "⛰️",
    },
    {
      day: "Day 3",
      title: "Fateh sagar lake & shopping at hathipole",
      description:
        "Our final day filled with beautiful view of fateh sagar lake, and shopping at hathipole before bidding bye to the city.",
      icon: "🚣‍♂️",
    },
  ];

  return (
    <section id="journey" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Heading */}
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Journey Timeline 🚀
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          3 days of travel, fun, and memories — captured in our adventure log.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical neon line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_20px_rgba(236,72,153,0.7)] rounded-full"></div>

        <div className="space-y-16 relative z-10">
          {journey.map((event, index) => (
            <div
              key={index}
              className={`flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-5/12"></div>
              <div
                className="relative w-5/12 bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl 
                p-6 border border-gray-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] 
                transition-transform duration-500"
              >
                {/* Icon */}
                <div
                  className="absolute -left-8 top-6 bg-gradient-to-r from-pink-500 to-purple-500 
                  text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full 
                  shadow-[0_0_15px_rgba(236,72,153,0.7)]"
                >
                  {event.icon}
                </div>
                {/* Dot on line */}
                <div className="absolute -left-[2.2rem] top-14 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>

                {/* Content */}
                <span className="text-sm text-pink-400 font-semibold tracking-wide">
                  {event.day}
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">
                  {event.title}
                </h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
