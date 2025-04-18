import Navbar from "@/components/Navbar";
import SongCard from "@/components/SongCard";
import React from "react";

const topGlobalData = [
  {
    id: 1,
    title: "Cancion Global 1",
    img: "/assets/images/coverGlobal1.png",
    artist: "Artista Global 1",
  },
];

export default function MusicPage() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6">Music</h1>
      <Navbar />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Top Global</h2>
        <div className="flex-overflow-x-auto gap-4 pb-2">
          {topGlobalData.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
}
