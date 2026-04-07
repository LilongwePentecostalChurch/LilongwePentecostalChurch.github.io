import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sermon',
  title: 'Sermons',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date Preached',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pastor',
      title: 'Preacher / Pastor',
      type: 'string',
      initialValue: 'Bishop David Chigamba',
    }),
    defineField({
      name: 'series',
      title: 'Sermon Series',
      type: 'reference',
      to: [{ type: 'sermonSeries' }],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio File URL',
      type: 'url',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      placeholder: 'e.g. John 3:16',
    }),
    defineField({
      name: 'description',
      title: 'Sermon Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Sunday Service', value: 'sunday-service' },
          { title: 'Bible Study', value: 'bible-study' },
          { title: 'Prayer & Fasting', value: 'prayer-fasting' },
          { title: 'Youth', value: 'youth' },
          { title: 'Special Event', value: 'special-event' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pastor',
      media: 'thumbnail',
    },
  },
})
