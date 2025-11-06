import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { ImageResponse } from 'next/og'
import { env } from '../../../../env'

export const alt = 'DevStore'
export const size = {
  width: 1200,
  height: 630
}

type Props = {
  params: Promise<{ slug: string }>
}

export const contentType = 'image/png'

async function getProducts(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60
    }
  })

  if (!response.ok) {
    throw new Error(`Produto não encontrado: ${slug}`)
  }

  const product = await response.json()
  return product
}

export default async function OgImage({ params }: Props) {
  const product = await getProducts((await params).slug)
  const productImageUrl = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img src={productImageUrl} alt="" style={{ width: '100%' }} />
        About Acme
      </div>
    )
  )
}
