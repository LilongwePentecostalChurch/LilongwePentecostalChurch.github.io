export default {
  name: 'bibleStudyNote',
  title: 'Bible Study Notes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'scripture',
      title: 'Scripture Reference',
      type: 'string',
      description: 'e.g. Ephesians 6:10-18',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Old Testament', value: 'old-testament' },
          { title: 'New Testament', value: 'new-testament' },
          { title: 'Topical', value: 'topical' },
          { title: 'Care Group Notes', value: 'care-group-notes' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short summary shown on the card',
    },
    {
      name: 'pdf',
      title: 'PDF File',
      type: 'file',
      options: { accept: '.pdf' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When this study was taught',
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this note at the top of the list',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'scripture' },
  },
}
