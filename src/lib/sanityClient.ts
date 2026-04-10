import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: 'nvtku4ax',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Helper to build image URLs from Sanity image references
const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ── Typed fetch helpers ──────────────────────────────────────────

export async function getSermons(limit = 10) {
  return sanityClient.fetch(
    `*[_type == "sermon"] | order(date desc) [0...$limit] {
      _id, title, date, pastor, scripture, description,
      youtubeUrl, audioUrl, thumbnail,
      "series": series->title
    }`,
    { limit }
  )
}

export async function getSermonSeries() {
  return sanityClient.fetch(
    `*[_type == "sermonSeries"] | order(startDate desc) {
      _id, title, description, coverImage, startDate, endDate, season
    }`
  )
}

export async function getUpcomingEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "upcoming"] | order(date asc) {
      _id, title, date, endDate, location, description, image, registrationUrl, isFeatured
    }`
  )
}

export async function getAnnualEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "annual"] | order(date asc) {
      _id, title, date, location, description, image
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
      _id, name, title, department, photo, shortBio, bio, welcomeMessage, email, isLeadPastor
    }`
  )
}

export async function getLeadPastor() {
  return sanityClient.fetch(
    `*[_type == "staffMember" && isLeadPastor == true][0] {
      _id, name, title, photo, bio, welcomeMessage, email
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
