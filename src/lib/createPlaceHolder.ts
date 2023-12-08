import type { ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

export const createPlaceHolder = async (img: ImageMetadata) =>
	await getImage({ src: img, width: 12 })
