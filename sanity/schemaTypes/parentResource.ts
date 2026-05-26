export default {
  name: 'parentResource',
  title: 'Parent Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Guides', value: 'guides' },
          { title: 'Devotionals', value: 'devotionals' },
          { title: 'Articles', value: 'articles' },
          { title: 'Downloads', value: 'downloads' },
          { title: 'Recommended Reading', value: 'reading' },
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
      title: 'PDF / File',
      type: 'file',
      description: 'Upload a PDF or document parents can download',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this resource at the top of the list',
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
    select: { title: 'title', subtitle: 'category' },
  },
}
