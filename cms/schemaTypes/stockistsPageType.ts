import {defineField, defineType} from 'sanity'

export const stockistsPageType = defineType({
  name: 'stockistsPage',
  title: 'Stockists Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'Stockists Page',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      initialValue: 'Stockists',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stockists',
      title: 'Stockists',
      type: 'array',
      of: [
        defineField({
          name: 'stockist',
          title: 'Stockist',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL (optional)',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
