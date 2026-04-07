import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryMonth',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          'JANUARY 2026', 'FEBRUARY 2026', 'MARCH 2026',
          'APRIL 2026', 'MAY 2026', 'JUNE 2026',
          'JULY 2026', 'AUGUST 2026', 'SEPTEMBER 2026',
          'OCTOBER 2026', 'NOVEMBER 2026', 'DECEMBER 2026',
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'event',
              title: 'Event Name',
              type: 'string',
              placeholder: 'e.g. Sunday Service, Youth Ministry',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              subtitle: 'event',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'month',
      media: 'photos.0.image',
    },
    prepare({ title, media }) {
      return {
        title: title ?? 'Untitled Month',
        media,
      }
    },
  },
})
