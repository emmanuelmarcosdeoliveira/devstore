import Image from 'next/image'

const productPage = () => {
  return (
    <section className="gap-6 grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="w-full"
          width={1000}
          height={1000}
          alt="Camiseta"
          src="/camiseta-dowhile-2022.png"
          quality={100}
        />
      </div>
      <div className="col-span-1 flex flex-col gap-3 justify-center px-12">
        <h1 className="font-bold leading-tight text-3xl">
          Camiseta Dowhile 2022
        </h1>
        <p className="leading-relaxed mt-2 text-zinc-400">
          Camiseta fabricada com 100% de algodão.
        </p>
        <div className="flex gap-3 items-center mt-8">
          <span className="bg-violet-500 font-semibold inline-block px-5 py-2.5 rounded-full">
            R$129
          </span>
          <span className="text-sm text-zinc-400">
            {' '}
            Em 12 x sem juros de R$10.75
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              className="bg-zinc-800 border border-zinc-700 flex font-semibold h-8 items-center justify-center rounded-full text-sm w-14"
              type="button"
            >
              P
            </button>
            <button
              className="bg-zinc-800 border border-zinc-700 flex font-semibold h-8 items-center justify-center rounded-full text-sm w-14"
              type="button"
            >
              M
            </button>
            <button
              className="bg-zinc-800 border border-zinc-700 flex font-semibold h-8 items-center justify-center rounded-full text-sm w-14"
              type="button"
            >
              G
            </button>
            <button
              className="bg-zinc-800 border border-zinc-700 flex font-semibold h-8 items-center justify-center rounded-full text-sm w-14"
              type="button"
            >
              GG
            </button>
            <button
              className="bg-zinc-800 border border-zinc-700 flex font-semibold h-8 items-center justify-center rounded-full text-sm w-14"
              type="button"
            >
              XG
            </button>
          </div>
        </div>
        <button className="bg-emerald-600 flex font-semibold h-12 items-center justify-center mt-8 rounded-full text-white">
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  )
}

export default productPage
