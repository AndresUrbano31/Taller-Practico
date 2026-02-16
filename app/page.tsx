import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-3 py-8">
      <article className="w-full max-w-[550px] overflow-hidden rounded-[22px] border-[3px] border-[#ff646f] bg-[#dde2e8] shadow-[0_10px_28px_rgba(30,41,59,0.18)]">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Red mountain landscape"
          width={1100}
          height={560}
          className="h-[260px] w-full object-cover"
          priority
        />

        <section className="space-y-8 px-8 pb-8 pt-7">
          <header className="space-y-4">
            <h1 className="text-[46px] font-extrabold leading-none text-[#0a0a0a] sm:text-[48px]">
              Red Heaven
            </h1>
            <p className="max-w-[460px] text-[18px] leading-[1.45] text-[#5f7284]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </header>

          <footer className="space-y-4">
            <span className="block text-center text-[20px] leading-none text-[#ff5a68]">
              •
            </span>
            <section className="flex flex-wrap gap-4">
              <span className="rounded-full bg-[#ff5a68] px-5 py-2.5 text-[16px] font-semibold leading-none text-white">
                #tailwind
              </span>
              <span className="rounded-full bg-[#ff5a68] px-5 py-2.5 text-[16px] font-semibold leading-none text-white">
                #frontendeverything
              </span>
            </section>
          </footer>
        </section>
      </article>
    </main>
  );
}

