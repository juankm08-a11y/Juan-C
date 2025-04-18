import Link from "next/link";
import React from "react";

export default function SongCard({
  song,
}: {
  song: { title: string; img: string };
}) {
  return (
    <Link
      href={`/song/${encodeURIComponent(song.title.toLowerCase())}`}
      className="min-w-[160px] bg-white rounded-lg shadow p-4 flex-shrink-0 hover:scale-105 transition"
    >
      <img
        src={song.img}
        alt={song.title}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="font-semibold">{song.title}</h3>
    </Link>
  );
}
