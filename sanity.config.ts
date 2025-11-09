import {defineConfig} from 'sanity'
import {richDate} from '@sanity/rich-date-input'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Solar Village',

  projectId: 'qjlubu41',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), richDate()],

  schema: {
    types: schemaTypes,
  },
})
