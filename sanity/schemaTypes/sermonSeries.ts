import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sermonSeries',
  title: 'Sermon Series',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Series Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Series Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Series Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'startDate',
      title: 'Series Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Series End Date',
      type: 'date',
    }),
    defineField({
      name: 'season',
      title: 'Season / Year',
      type: 'string',
      placeholder: 'e.g. 2026',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'season',
      media: 'coverImage',
    },
  },
})
