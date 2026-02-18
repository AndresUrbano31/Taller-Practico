import Image from "next/image";
import { Star, Briefcase, Clock, Bookmark } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6 py-10">
      <section className="flex w-full max-w-[68.75rem] flex-col items-center gap-8 sm:flex-row sm:items-start">
        
        {/* Tarjeta 1 - Tema Oscuro */}
        <article className="relative w-full max-w-[22.5rem] overflow-hidden rounded-[1.375rem] border border-transparent p-5 bg-[#0b0d10] text-white shadow-[0_1.5625rem_3.125rem_rgba(2,6,23,0.45)] transition-transform hover:scale-105">
          
          {/* Cover */}
          <figure className="relative mb-4 h-[11.25rem] w-full overflow-hidden rounded-[0.875rem]">
            <Image
              src="/api/images/card1.png"
              alt="Liam O'Connor cover"
              fill
              className="object-cover"
              sizes="(max-width: 48rem) 100vw, 22.5rem"
              unoptimized
            />

            {/* Badge */}
            <span className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm backdrop-blur-sm bg-white/10 text-white/90 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-white/80" />
              <span className="font-medium">Things</span>
            </span>
          </figure>

          {/* Avatar / name / bookmark */}
          <header className="-mt-16 flex items-center justify-between px-1">
            <span className="flex items-center gap-4">
              <span className="-mt-6 block">
                <figure className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-[0_0.625rem_1.875rem_rgba(2,6,23,0.4)]">
                  <Image
                    src="/api/images/card1.png"
                    alt="Liam O'Connor"
                    fill
                    className="object-cover"
                    sizes="5rem"
                    unoptimized
                  />
                </figure>
              </span>

              <span className="block">
                <p className="text-[1.375rem] font-bold leading-none">Liam O&apos;Connor</p>
                <p className="text-[0.875rem] text-gray-400">Visual Artist</p>
              </span>
            </span>

            <button
              aria-label="bookmark"
              className="ml-4 rounded-full p-2 bg-white/8 text-white/90 ring-1 ring-white/10 shadow-sm"
            >
              <Bookmark className="h-5 w-5 text-white/90" />
            </button>
          </header>

          {/* Stats */}
          <ul className="mt-6 flex items-center justify-between gap-4 px-1">
            {/* Stat 1 - Rating */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Star className="h-4 w-4 text-yellow-400" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-white">Rating</span>
                <span className="block text-sm font-semibold">5.0</span>
              </span>
            </li>

            {/* Stat 2 - Hours */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Briefcase className="h-4 w-4 text-sky-500" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-white">Hours</span>
                <span className="block text-sm font-semibold">599</span>
              </span>
            </li>

            {/* Stat 3 - Month */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Clock className="h-4 w-4 text-violet-500" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-white">Month</span>
                <span className="block text-sm font-semibold">12</span>
              </span>
            </li>
          </ul>

          {/* CTA */}
          <button className="mt-6 w-full rounded-full bg-blue-500 py-3 text-sm font-semibold text-white shadow-[0_0.75rem_1.875rem_rgba(59,130,246,0.28)] hover:bg-blue-600">
            Get In Touch
          </button>
        </article>

        {/* Tarjeta 2 - Tema Claro */}
        <article className="relative w-full max-w-[22.5rem] overflow-hidden rounded-[1.375rem] border border-transparent p-5 bg-white text-[#0b1220] shadow-[0_1.5625rem_3.125rem_rgba(2,6,23,0.45)] transition-transform hover:scale-105">
          
          {/* Cover */}
          <figure className="relative mb-4 h-[11.25rem] w-full overflow-hidden rounded-[0.875rem]">
            <Image
              src="/api/images/card2.png"
              alt="Alex Turner cover"
              fill
              className="object-cover"
              sizes="(max-width: 48rem) 100vw, 22.5rem"
              unoptimized
            />

            {/* Badge */}
            <span className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm backdrop-blur-sm bg-white/70 text-[#0b1220] ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-white/80" />
              <span className="font-medium">Sketch</span>
            </span>
          </figure>

          {/* Avatar / name / bookmark */}
          <header className="-mt-16 flex items-center justify-between px-1">
            <span className="flex items-center gap-4">
              <span className="-mt-6 block">
                <figure className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-[0_0.625rem_1.875rem_rgba(2,6,23,0.4)]">
                  <Image
                    src="/api/images/card2.png"
                    alt="Alex Turner"
                    fill
                    className="object-cover"
                    sizes="5rem"
                    unoptimized
                  />
                </figure>
              </span>

              <span className="block">
                <p className="text-[1.375rem] font-bold leading-none">Alex Turner</p>
                <p className="text-[0.875rem] text-gray-400">Creative Director</p>
              </span>
            </span>

            <button
              aria-label="bookmark"
              className="ml-4 rounded-full p-2 bg-white/50 text-[#6b7280] ring-1 ring-white/10 shadow-sm"
            >
              <Bookmark className="h-5 w-5 text-[#6b7280]" />
            </button>
          </header>

          {/* Stats */}
          <ul className="mt-6 flex items-center justify-between gap-4 px-1">
            {/* Stat 1 - Rating */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Star className="h-4 w-4 text-yellow-400" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-[#0b1220]">Rating</span>
                <span className="block text-sm font-semibold">5.0</span>
              </span>
            </li>

            {/* Stat 2 - Hours */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Briefcase className="h-4 w-4 text-sky-500" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-[#0b1220]">Hours</span>
                <span className="block text-sm font-semibold">5150</span>
              </span>
            </li>

            {/* Stat 3 - Month */}
            <li className="flex w-1/3 flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Clock className="h-4 w-4 text-violet-500" />
              </span>
              <span className="block text-sm font-semibold">
                <span className="block text-[#0b1220]">Month</span>
                <span className="block text-sm font-semibold">24</span>
              </span>
            </li>
          </ul>

          {/* CTA */}
          <button className="mt-6 w-full rounded-full bg-blue-500 py-3 text-sm font-semibold text-white shadow-[0_0.75rem_1.875rem_rgba(59,130,246,0.28)] hover:bg-blue-600">
            Get In Touch
          </button>
        </article>

      </section>
    </main>
  );
}