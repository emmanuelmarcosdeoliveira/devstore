import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div className="gap-6 grid grid-cols-9 grid-rows-6 max-h-[860px]">
        <Link
          href={'/'}
          className="bg-zinc-900 col-span-6 flex group items-end justify-center overflow-hidden relative rounded-lg row-span-6"
        >
          <Image
            className="duration-500 group-hover:scale-105 transition-transform"
            src="/moletom-never-stop-learning.png"
            width={920}
            height={920}
            quality={100}
            alt="
          Moletom IA Side"
          />
          <div className="absolute bg-black/60 border-2 border-zinc-500 bottom-28 flex gap-2 h-12 items-center max-w[280px p-1 pl-5 right-28 rounded-full w-[280px]">
            <span className="flex-1 text-sm truncate">Moletom IA Side</span>
            <span className="bg-violet-500 flex font-semibold h-full items-center justify-center px-4 rounded-full">
              R$119,00
            </span>
          </div>
        </Link>
        <Link
          href={'/'}
          className="bg-zinc-900 col-span-3 flex group items-end justify-center overflow-hidden relative rounded-lg row-span-3"
        >
          <Image
            className="duration-500 group-hover:scale-105 transition-transform"
            src="/moletom-java.png"
            width={920}
            height={920}
            quality={100}
            alt="
          Moletom IA Side"
          />
          <div className="absolute bg-black/60 border-2 border-zinc-500 bottom-10 flex gap-2 h-12 items-center max-w[280px p-1 pl-5 right-10 rounded-full w-[280px]">
            <span className="flex-1 text-sm truncate">Moletom Java</span>
            <span className="bg-violet-500 flex font-semibold h-full items-center justify-center px-4 rounded-full">
              R$ 85,00
            </span>
          </div>
        </Link>
        <Link
          href={'/'}
          className="bg-zinc-900 col-span-3 flex group items-end justify-center overflow-hidden relative rounded-lg row-span-3"
        >
          <Image
            className="duration-500 group-hover:scale-105 transition-transform"
            src="/camiseta-dowhile-2022.png"
            width={920}
            height={920}
            quality={100}
            alt="
          Moletom IA Side"
          />
          <div className="absolute bg-black/60 border-2 border-zinc-500 bottom-10 flex gap-2 h-12 items-center max-w[280px p-1 pl-5 right-10 rounded-full w-[280px]">
            <span className="flex-1 text-sm truncate">
              Camiseta Dowhile 2022
            </span>
            <span className="bg-violet-500 flex font-semibold h-full items-center justify-center px-4 rounded-full">
              R$69,00
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
