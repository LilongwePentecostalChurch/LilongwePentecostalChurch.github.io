import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: 'nvtku4ax',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function imageUrl(source: SanityImageSource, width = 800): string {
  try {
    return builder.image(source).width(width).url()
  } catch {
    return ''
  }
}

export async function getSermons(limit = 10) {
  return sanityClient.fetch(
    `*[_type == "sermon"] | order(date desc) [0...$limit] {
      _id, title, date, pastor, scripture, description,
      youtubeUrl, audioUrl,
      "thumbnailUrl": thumbnail.asset->url,
      "series": series->title
    }`,
    { limit }
  )
}

export async function getSermonSeries() {
  return sanityClient.fetch(
    `*[_type == "sermonSeries"] | order(startDate desc) {
      _id, title, description, startDate, endDate, season,
      "coverImageUrl": coverImage.asset->url
    }`
  )
}

export async function getUpcomingEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "upcoming"] | order(date asc) {
      _id, title, date, endDate, location, description, registrationUrl, isFeatured,
      "imageUrl": image.asset->url
    }`
  )
}

export async function getAnnualEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "annual"] | order(date asc) {
      _id, title, date, location, description,
      "imageUrl": image.asset->url
    }`
  )
}

export async function getGallery(month?: string) {
  const filter = month
    ? `*[_type == "galleryMonth" && month == $month]`
    : `*[_type == "galleryMonth"] | order(month asc)`
  return sanityClient.fetch(filter, month ? { month } : {})
}

export async function getStaff() {
  return sanityClient.fetch(
    `*[_type == "staffMember"] | order(order asc) {
      _id, name, title, department, shortBio, bio, welcomeMessage, email, isLeadPastor,
      "photoUrl": photo.asset->url
    }`
  )
}

export async function getLeadPastor() {
  return sanityClient.fetch(
    `*[_type == "staffMember" && isLeadPastor == true][0] {
      _id, name, title, bio, welcomeMessage, email,
      "photoUrl": photo.asset->url
    }`
  )
}

export async function getGivingInfo() {
  return sanityClient.fetch(
    `*[_type == "givingInfo"][0] {
      pageTitle, pageSubtitle, introText, givingMethods, testimonies, onlineGiveUrl
    }`
  )
}
