import AddToCardButton from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import type { Metadata } from 'next'
import Image from 'next/image'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: { revalidate: 60 * 60 }
  })
  const product = await response.json()
  return product
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products = (await response.json()) as Product[]
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  return {
    title: product.title,
    description: product.description
  }
}
const productPage = async ({ params }: Props) => {
  const { slug } = await params
  const product = await getProduct(slug)

  console.log(`Products`, product)
  return (
    <section className="gap-6 grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        {product?.image ? (
          <Image
            className="w-full"
            width={1000}
            height={1000}
            alt="Camiseta"
            src={product.image}
            quality={100}
          />
        ) : (
          <span>Imagem indisponível</span>
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-3 justify-center px-12">
        <h1 className="font-bold leading-tight text-3xl">{product.title}</h1>
        <p className="leading-relaxed mt-2 text-zinc-400">
          {product.description}
        </p>
        <div className="flex gap-3 items-center mt-8">
          <span className="bg-violet-500 font-semibold inline-block px-5 py-2.5 rounded-full">
            {product.price
              ? product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                })
              : 'Preço indisponível'}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12 vezes sem juros de{' '}
            {product.price
              ? (product.price / 12).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
              : 'Preço indisponível'}
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

        <AddToCardButton productId={product.id} />
      </div>
    </section>
  )
}

export default productPage
