import {defineField, defineType} from 'sanity'

export const infoPageType = defineType({
  name: 'infoPage',
  title: 'Info Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'Info Page',
    }),
    defineField({
      name: 'infoIntro',
      title: 'Info Intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'infoContact',
      title: 'Info Contact',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) =>
                rule.required().uri({
                  allowRelative: false,
                  scheme: ['http', 'https', 'mailto'],
                }),
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open In New Tab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
})
