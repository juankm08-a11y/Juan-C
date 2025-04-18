"use client";

import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";

interface Song {
  title: string;
  src: string;
  img: string;
}

export default function Player({
  songList = [
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
    {
      title: "En Algun Lugar",
      src: "/assets/music/EnalgunLugar.mp3",
      img: "/assets/images/enalgunlugar.png",
    },
  ] as Song[],
}) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({ cur: 0, dur: 0 });
  const audio = useRef<HTMLAudioElement>(null);

  const fmt = (t: number) =>
    `${Math.floor(t / 60)}:${Math.floor(t % 60)
      .toString()
      .padStart(2, "0")}`;

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const update = () => setTime({ cur: a.currentTime, dur: a.duration || 0 });
    a.addEventListener("timeupdate", update);
    return () => a.removeEventListener("timeupdate", update);
  }, []);

  const prev = () => {
    setIdx((i) => (i ? i - 1 : songList.length - 1));
    setPlaying(true);
  };

  const next = () => {
    setIdx((i) => (i + 1) % songList.length);
    setPlaying(true);
  };
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-6 rounded-3xl shadow-2xl space-y-6">
      <h1 className="text-2xl font-bold text-white text-center tracking-wide">
        {songList[idx].title}
      </h1>
      <img
        src={songList[idx].img}
        alt={songList[idx].title}
        className="w-full h-64 object-cover rounded-2xl shadow-lg"
      />
      <div className="flex items-center justify-center space-x-10">
        <BackwardIcon
          className="w-10 h-10 text-white opacity-75 hover:opacity-100 transition "
          onClick={prev}
        />
        {playing ? (
          <PauseCircleIcon
            className="w-16 h-16 text-white hover:text-gray-200 transition"
            onClick={() => setPlaying(false)}
          />
        ) : (
          <PlayCircleIcon
            className="w-16 h-16 text-white text-gray-200 transition"
            onClick={() => setPlaying(true)}
          />
        )}
        <ForwardIcon
          className="w-8 h-8 cursor-pointer text-gray-600 hover:text-blue-500"
          onClick={() => setPlaying(true)}
        />
      </div>
      <progress
        className="w-full h-2 rounded"
        value={(time.cur / (time.dur || 1)) * 100}
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>{fmt(time.cur)}</span>
        <span>{fmt(time.dur)}</span>
        <audio
          ref={audio}
          src={songList[idx].src}
          onEnded={() => setIdx((i) => (i + 1) % songList.length)}
        />
      </div>
    </div>
  );
}
