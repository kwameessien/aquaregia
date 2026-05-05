import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'orderLabel',
      title: 'Order Label',
      type: 'string',
      initialValue: 'ORDER HERE',
    }),
  ],
})
