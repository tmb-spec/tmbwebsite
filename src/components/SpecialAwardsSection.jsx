"use client";

export default function SpecialAwardsSection() {
  const awards = [
    {
      name: "Name 1",
      title: "Auszeichnung / Titel",
      description: "Kurze Beschreibung der besonderen Leistung oder Ehrung.",
      img: "/special1.jpg",
    },
    {
      name: "Name 2",
      title: "Auszeichnung / Titel",
      description: "Kurze Beschreibung der besonderen Leistung oder Ehrung.",
      img: "/special2.jpg",
    },
    {
      name: "Name 3",
      title: "Auszeichnung / Titel",
      description: "Kurze Beschreibung der besonderen Leistung oder Ehrung.",
      img: "/special3.jpg",
    },
  ];

  return (
    <section id="special" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Besondere Einzelehrungen</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {awards.map((award, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-64"
          >
            <img
              src={award.img}
              alt={award.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
            />
            <h4 className="font-bold text-2xl mb-1">{award.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{award.title}</p>
            <p className="text-gray-700 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
