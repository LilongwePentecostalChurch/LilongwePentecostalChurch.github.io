import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ministry',
  title: 'Ministries',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Ministry ID (URL slug)',
      type: 'slug',
      options: { source: 'name' },
      description: 'Used in the URL e.g. "youth-ministry". Auto-generated from name.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Ministry Name',
      type: 'string',
      placeholder: 'e.g. Youth Ministry',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      placeholder: 'e.g. Vibrant community for young people aged 13 to 35',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero / Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // About section
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      initialValue: 'Who We Are',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text (one paragraph per item)',
      type: 'array',
      of: [{ type: 'text' }],
    }),

    // Values
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Value Name', type: 'string' },
            { name: 'description', title: 'Short Description', type: 'string' },
          ],
          preview: { select: { title: 'name', subtitle: 'description' } },
        },
      ],
    }),

    // Leader
    defineField({
      name: 'leaderName',
      title: 'Ministry Leader Name',
      type: 'string',
    }),
    defineField({
      name: 'leaderTitle',
      title: 'Leader Title / Role',
      type: 'string',
      placeholder: 'e.g. Youth Pastor',
    }),
    defineField({
      name: 'leaderBio',
      title: 'Leader Short Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'leaderPhoto',
      title: 'Leader Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Meeting details
    defineField({
      name: 'meetingDay',
      title: 'Meeting Day',
      type: 'string',
      placeholder: 'e.g. Every Sunday',
    }),
    defineField({
      name: 'meetingTime',
      title: 'Meeting Time',
      type: 'string',
      placeholder: 'e.g. 9:00 AM - 11:00 AM',
    }),
    defineField({
      name: 'location',
      title: 'Meeting Location',
      type: 'string',
      placeholder: 'e.g. LPC Youth Hall',
    }),

    // Contact
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    }),

    // Gallery
    defineField({
      name: 'galleryImages',
      title: 'Gallery Photos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        },
      ],
    }),

    // Upcoming events
    defineField({
      name: 'upcomingEvents',
      title: 'Upcoming Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Event Title', type: 'string' },
            { name: 'date', title: 'Date', type: 'string' },
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title', subtitle: 'date' } },
        },
      ],
    }),

    // Display order
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline', media: 'heroImage' },
  },
})
