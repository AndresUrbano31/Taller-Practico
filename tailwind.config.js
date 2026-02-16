export default function RedHeavenCard() {
  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      
      <article className="w-full max-w-sm bg-gray-50 rounded-2xl border border-red-400 shadow-lg overflow-hidden">
        
        {/* Imagen */}
        <figure className="h-52 w-full">
          <img
            src="/path-to-your-mountain-image.jpg"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Contenido */}
        <section className="p-6 flex flex-col gap-4">
          
          <h2 className="text-2xl font-bold text-gray-900">
            Red Heaven
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>

          {/* Badges */}
          <footer className="flex gap-3 mt-2">
            <span className="bg-red-400 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              #tailwind
            </span>
            <span className="bg-red-400 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              #frontendeverything
            </span>
          </footer>

        </section>

      </article>

    </main>
  );
}
