import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ⚠️ Replace YOUR_PROJECT_ID with your actual Sanity project ID
// Find it at: https://sanity.io/manage → your LPC Church project
export const sanityClient = createClient({
  projectId: 'nvtku4ax',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // fast cached reads for public data
})

// Helper to build image URLs from Sanity image references
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ── Typed fetch helpers ──────────────────────────────────────────

// Latest sermons
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

// All sermon series
export async function getSermonSeries() {
  return sanityClient.fetch(
    `*[_type == "sermonSeries"] | order(startDate desc) {
      _id, title, description, coverImage, startDate, endDate, season
    }`
  )
}

// Upcoming events
export async function getUpcomingEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "upcoming"] | order(date asc) {
      _id, title, date, endDate, location, description, image, registrationUrl, isFeatured
    }`
  )
}

// Annual events
export async function getAnnualEvents() {
  return sanityClient.fetch(
    `*[_type == "event" && category == "annual"] | order(date asc) {
      _id, title, date, location, description, image
    }`
  )
}

// Gallery by month (or all months)
export async function getGallery(month?: string) {
  const filter = month
    ? `*[_type == "galleryMonth" && month == $month]`
    : `*[_type == "galleryMonth"] | order(month asc)`
  return sanityClient.fetch(filter, month ? { month } : {})
}

// All staff / leadership
export async function getStaff() {
  return sanityClient.fetch(
    `*[_type == "staffMember"] | order(order asc) {
      _id, name, title, department, photo, shortBio, bio, welcomeMessage, email, isLeadPastor
    }`
  )
}

// Lead pastor only
export async function getLeadPastor() {
  return sanityClient.fetch(
    `*[_type == "staffMember" && isLeadPastor == true][0] {
      _id, name, title, photo, bio, welcomeMessage, email
    }`
  )
}

// Giving info
export async function getGivingInfo() {
  return sanityClient.fetch(
    `*[_type == "givingInfo"][0] {
      pageTitle, pageSubtitle, introText, givingMethods, testimonies, onlineGiveUrl
    }`
  )
}
