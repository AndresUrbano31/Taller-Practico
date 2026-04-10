"use client"

type CardProps = {
  title?: string
  description?: string
  imageSrc?: string
  tags?: string[]
  className?: string
}

export default function Card({
  title = 'Red Heaven',
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  imageSrc = '/images/landscape.jpg',
  tags = ['#tailwind', '#frontendeverything'],
  className = ''
}: CardProps) {
  return (
    <article className={`relative w-full max-w-sm ${className} rounded-[20px] border-2 border-brand-light bg-[#e9eef0] ring-1 ring-[#ffecec] overflow-hidden shadow-card transition-transform hover:-translate-y-1 grid grid-rows-[14rem_1fr_auto] sm:grid-rows-[16rem_1fr_auto]`}>
      <div className="row-start-1 w-full h-full">
        <img
          src={imageSrc}
          onError={(e: any) => {
            const t = e.currentTarget as HTMLImageElement
            t.onerror = null
            t.src = 'https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg'
          }}
          alt={title}
          className="w-full h-full object-cover object-top rounded-t-[18px]"
          style={{ height: '100%' }}
        />
      </div>
      <div className="row-start-2 bg-[#dbe3e7] border-t-[3px] border-brand/20 px-6 py-6 flex flex-col gap-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#0b1220]">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-[#6b7280] leading-7 max-w-[44ch]">{description}</p>
        <div className="flex justify-center mt-4">
          <span className="w-2 h-2 rounded-full bg-brand" />
        </div>
      </div>
      <div className="row-start-3 bg-[#dbe3e7] px-6 pb-6 pt-4 flex items-center justify-start">
        <div className="flex gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="inline-flex items-center px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold shadow-[0_8px_24px_rgba(255,111,111,0.14)] ring-1 ring-white/10 hover:scale-105 transition-transform"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}