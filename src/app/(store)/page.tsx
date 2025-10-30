import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60
    }
  })
  const products = await response.json()
  return products
}

export default async function Home() {
  const [hightLightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <section>
      <div className="gap-6 grid grid-cols-9 grid-rows-6 max-h-[860px]">
        <Link
          href={`/product/${hightLightedProduct.slug}`}
          className="bg-zinc-900 col-span-6 flex group items-end justify-center overflow-hidden relative rounded-lg row-span-6"
        >
          <Image
            className="duration-500 group-hover:scale-105 transition-transform"
            src={hightLightedProduct.image}
            width={920}
            height={920}
            quality={100}
            alt="
          Moletom IA Side"
          />
          <div className="absolute bg-black/60 border-2 border-zinc-500 bottom-28 flex gap-2 h-12 items-center max-w[280px p-1 pl-5 right-28 rounded-full w-[280px]">
            <span className="flex-1 text-sm truncate">
              {hightLightedProduct.title}
            </span>
            <span className="bg-violet-500 flex font-semibold h-full items-center justify-center px-4 rounded-full">
              {hightLightedProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
          </div>
        </Link>

        {otherProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="bg-zinc-900 col-span-3 flex group items-end justify-center overflow-hidden relative rounded-lg row-span-3"
            >
              <Image
                className="duration-500 group-hover:scale-105 transition-transform"
                src={product.image}
                width={920}
                height={920}
                quality={100}
                alt={product.title}
              />
              <div className="absolute bg-black/60 border-2 border-zinc-500 bottom-10 flex gap-2 h-12 items-center max-w[280px p-1 pl-5 right-10 rounded-full w-[280px]">
                <span className="flex-1 text-sm truncate">{product.title}</span>
                <span className="bg-violet-500 flex font-semibold h-full items-center justify-center px-4 rounded-full">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
