import {defineField, defineType} from 'sanity'

export const indexPageType = defineType({
  name: 'indexPage',
  title: 'Index Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'Index Page',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineField({
          name: 'project',
          title: 'Project',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
