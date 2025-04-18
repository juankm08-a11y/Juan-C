import { notFound } from "next/navigation";
import Link from "next/link";

const mockSongs = [
  {
    title: "En Algun Lugar",
    src: "/assets/music/EnalgunLugar.mp3",
    img: "/assets/images/enalgunlugar.png",
  },
  {
    title: "Secrets",
    src: "/assets/music/Secrets.mp3",
    img: "/assets/images/secrets.png",
  },
  {
    title: "Yellow",
    src: "/assets/music/Yellow.mp3",
    img: "/assets/images/yellow.png",
  },
];

interface Params {
  params: { songTitle: string };
}

export function generateStaticParams() {
  return mockSongs.map((s) => ({
    songTitle: encodeURIComponent(s.title.toLowerCase()),
  }));
}

export default function SongDetailPage({ params }: Params) {
  const song = mockSongs.find(
    (s) => encodeURIComponent(s.title.toLowerCase()) === params.songTitle
  );
  if (!song) {
    notFound();
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <Link href="/" className="inline-block mb-4 text-blue-600">
        ← Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">{song.title}</h1>
      <img
        src={song.img}
        alt={song.title}
        className="w-full h-auto rounded mb-6"
      />
      <audio controls src={song.src} className="w-full rounded shadow" />
    </div>
  );
}
