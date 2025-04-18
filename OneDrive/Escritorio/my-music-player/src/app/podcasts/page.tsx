import Navbar from "@/components/Navbar";
import React from "react";

const podcastsData = [
  {
    id: 1,
    title: "Podcast Ejemplo",
    cover: "/assets/images/podcastCover1.png",
    host: "Juan Perez",
    description: "Un podcast sobre tecnologias y tendencias",
  },
];
export default function page() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6">Podcasts</h1>
      <Navbar />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Podcasts Destacados</h2>
        <div className="flex-overflow-x-auto gap-4 pb-2">
          {podcastsData.map((p) => (
            <div
              key={p.id}
              className="min-w-[200px] bg-white rounded-lg shadow p-4"
            >
              <img
                src={p.cover}
                alt={p.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">Host:{p.host}</p>
              <p className="text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
