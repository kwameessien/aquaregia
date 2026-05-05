import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Internal Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerLogo',
      title: 'Header Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Rituals',
    }),
    defineField({
      name: 'purchaseLabel',
      title: 'Purchase Button Label',
      type: 'string',
      initialValue: 'Purchase here',
    }),
    defineField({
      name: 'purchaseLink',
      title: 'Purchase Button Link',
      type: 'string',
      initialValue: '/stockists',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specs',
      title: 'Specs',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'isbnCopyright',
      title: 'ISBN and Copyright',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'cartLabel',
      title: 'Cart Label',
      type: 'string',
      initialValue: 'Cart',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contributorsHeading',
      title: 'Contributors Heading',
      type: 'string',
      initialValue: 'Contributors',
    }),
    defineField({
      name: 'contributors',
      title: 'Contributors',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'shippingNote',
      title: 'Shipping Note',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'shippingEmail',
      title: 'Shipping Email',
      type: 'string',
      initialValue: 'hello@aquaregia.com',
    }),
    defineField({
      name: 'footerBackLinkLabel',
      title: 'Footer Back Link Label',
      type: 'string',
      initialValue: 'Go back',
    }),
    defineField({
      name: 'footerBackLinkHref',
      title: 'Footer Back Link URL',
      type: 'string',
      initialValue: '/',
    }),
  ],
})
