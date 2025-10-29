import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url()
})

const parseEnv = envSchema.safeParse(process.env)

if (!parseEnv.success) {
  console.error('Invalid environments variables', parseEnv.error)
  throw new Error('Invalid environments variables')
}
export const env = parseEnv.data
