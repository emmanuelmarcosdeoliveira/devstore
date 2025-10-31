import { NextResponse } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const parsedSlug = z.string().parse(slug)
  const product = data.products.find((p) => p.slug === parsedSlug)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
  return NextResponse.json(product)
}
