import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'givingInfo',
  title: 'Giving & Generosity',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'GENEROSITY AT LPC',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle (italic script)',
      type: 'string',
      initialValue: 'give and it shall be given',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'givingMethods',
      title: 'Giving Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'method', title: 'Method Name', type: 'string', placeholder: 'e.g. Mobile Money, Bank Transfer' },
            { name: 'details', title: 'Details / Instructions', type: 'text', rows: 3 },
            { name: 'accountName', title: 'Account Name', type: 'string' },
            { name: 'accountNumber', title: 'Account Number', type: 'string' },
            { name: 'bankName', title: 'Bank / Provider Name', type: 'string' },
          ],
          preview: {
            select: { title: 'method', subtitle: 'bankName' },
          },
        },
      ],
    }),
    defineField({
      name: 'testimonies',
      title: 'Giving Testimonies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Person Name', type: 'string' },
            { name: 'testimony', title: 'Testimony', type: 'text', rows: 4 },
            { name: 'photo', title: 'Photo (optional)', type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'name', subtitle: 'testimony' },
          },
        },
      ],
    }),
    defineField({
      name: 'onlineGiveUrl',
      title: 'Online Giving Link',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Giving & Generosity Settings' }
    },
  },
})
