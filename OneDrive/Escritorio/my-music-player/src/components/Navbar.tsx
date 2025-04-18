"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const mockSongs = ["En Algun Lugar", "Secrets", "Yellow"];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setSearch(v);
    setSuggestions(
      v
        ? mockSongs.filter((t) => t.toLowerCase().includes(v.toLowerCase()))
        : []
    );
  };

  const go = (title: string) => {
    setSearch(title);
    setSuggestions([]);
    router.push(`/song/${encodeURIComponent(title)}`);
  };
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg rounded-xl p-4">
      <section className="container mx-auto flex flex-wrap items-center gap-4 px-4">
        <Link href="/" className="font-bold text-2xl">
          Home
        </Link>
        {["music", "podcasts"].map((p) => (
          <Link
            key={p}
            href={`/${p}`}
            className={`capitalize hover:underline ${
              pathname === `/${p}` ? "underline font-semibold" : ""
            }`}
          >
            {p}
          </Link>
        ))}
        <div className="relative ml-auto w-full sm:w-64">
          <input
            type="text"
            value={search}
            onChange={onChange}
            onKeyDown={(e) =>
              e.key === "Enter" && suggestions[0] && go(suggestions[0])
            }
            placeholder="Buscar..."
            className="w-full px-3 py-2 rounded-lg text-gray-800 focus:outline-none "
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white text-gray-800 mt-1 rounded-md shadow-lg overflow-hidden">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => go(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </nav>
  );
}
