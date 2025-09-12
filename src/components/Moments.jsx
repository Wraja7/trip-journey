export default function Moments() {
  const moments = [
     {
      icon: "🚆",
      title: "The missed train",
      desc: "We missed our train to udaipur, because of the nonstopping rain, we were in so much stress after it but we stood by eachother and found a way to reach udaipur.",
    },
     {
      icon: "🤣",
      title: "The waiting lounge & train experience",
      desc: "We laughed a lot in the lounge and didn't sleep all night, we enjoyed travelling in shatabdi had an amazing experience in that train.",
    },
    {
      icon: "🌃",
      title: "That late night walk",
      desc: "We roamed in the streets and enjoyed the view of lake pichola at night.",
    },
    {
      icon: "🏨",
      title: "The stay at our hostel",
      desc: "The amazing experience we had in the hostel, from our room to living room and terrace, it was all just lovely.",
    },
    {
      icon: "🍲",
      title: "restaurants",
      desc: "nukkad was just our saving point, had lunch and dinner there, street food experience wasn't that good though, aloo paranthas were our go to food.",
    },
    {
      icon: "⛰️",
      title: "the trek to karni mata ",
      desc: "we went to visit at early morning, we didn't even sleep last night still trekked to karni mata to enjoy the amazing view in morning.",
    },
  ];

  return (
    <section id="moments" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Special Moments 💖
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Not just places we visited, but the little things that made it ours.
        </p>
      </div>

      {/* Grid of highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {moments.map((moment, i) => (
          <div
            key={i}
            className="relative bg-gray-800/40 border border-gray-700 rounded-2xl shadow-lg p-8 text-center hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition duration-500"
          >
            <div className="text-5xl mb-4">{moment.icon}</div>
            <h3 className="text-2xl font-bold text-pink-400 mb-2">{moment.title}</h3>
            <p className="text-gray-300">{moment.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


