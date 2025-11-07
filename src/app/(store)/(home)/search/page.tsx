import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface SearchProps {
  searchParams: Promise<{
    q: string
  }>
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    cache: 'no-cache'
  })
  const products = await response.json()
  return products
}

const Search = async ({ searchParams }: SearchProps) => {
  const params = await searchParams
  if (!params) {
    redirect('/')
  }

  const products = await searchProducts(params.q)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para : <span className="text-semibold">{params.q}</span>
      </p>

      <div className="gap-3 grid grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="bg-zinc-900 flex group items-end justify-center overflow-hidden relative rounded-lg"
          >
            <Image
              className="duration-500 group-hover:scale-105 transition-transform"
              src={product.image}
              width={480}
              height={480}
              quality={100}
              alt=""
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
        ))}
      </div>
    </div>
  )
}

export default Search
