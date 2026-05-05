import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set(['homePage', 'infoPage', 'indexPage', 'stockistsPage'])

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID. Copy sanity/.env.example to sanity/.env.local and set your project ID.',
  )
}

export default defineConfig({
  name: 'default',
  title: 'Aqua Regia',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage'),
              ),
            S.listItem()
              .title('Info Page')
              .id('infoPage')
              .child(
                S.document()
                  .schemaType('infoPage')
                  .documentId('infoPage'),
              ),
            S.listItem()
              .title('Index Page')
              .id('indexPage')
              .child(
                S.document()
                  .schemaType('indexPage')
                  .documentId('indexPage'),
              ),
            S.listItem()
              .title('Stockists Page')
              .id('stockistsPage')
              .child(
                S.document()
                  .schemaType('stockistsPage')
                  .documentId('stockistsPage'),
              ),
            ...S.documentTypeListItems().filter(
              (item) =>
                item.getId() !== 'homePage' &&
                item.getId() !== 'infoPage' &&
                item.getId() !== 'indexPage' &&
                item.getId() !== 'stockistsPage',
            ),
          ]),
    }),
    visionTool(),
  ],

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) =>
            !singletonTypes.has(templateItem.templateId),
        )
      }

      return prev
    },
    actions: (prev, {schemaType}) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(
          ({action}) => action !== 'duplicate' && action !== 'delete',
        )
      }

      return prev
    },
  },

  schema: {
    types: schemaTypes,
  },
})
