import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'staffMember',
  title: 'Leadership & Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title / Role',
      type: 'string',
      placeholder: 'e.g. Lead Pastor, Elder, Deacon',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Lead Pastor', value: 'lead-pastor' },
          { title: 'Pastors', value: 'pastors' },
          { title: 'Elders', value: 'elders' },
          { title: 'Deacons', value: 'deacons' },
          { title: 'Ministry Leaders', value: 'ministry-leaders' },
          { title: 'Staff', value: 'staff' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio (1-2 sentences)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message (for pastor page)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    }),
    defineField({
      name: 'isLeadPastor',
      title: 'Is Lead Pastor?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
})
