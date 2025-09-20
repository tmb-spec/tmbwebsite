"use client";

export default function HonorarySection() {
  const honoraryMembers = [
    {
      name: "Armin",
      role: "Spartiat / Bekämpfer der Stahlträger",
      description: "Ohne Ihn wären wir wohl verdurstet evtl auch verhungert",
      img: "/honorary1.jpg",
    },
    // hier können weitere Ehrenmitglieder ergänzt werden
  ];

  return (
    <section id="honorary" className="max-w-6xl mx-auto py-16 px-4">
      <h3 className="text-3xl font-bold mb-8 text-green-700 text-center">Ehrenmitglieder</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {honoraryMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-64"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-green-700"
            />
            <h4 className="font-bold text-2xl mb-1">{member.name}</h4>
            <p className="text-gray-500 text-sm mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
