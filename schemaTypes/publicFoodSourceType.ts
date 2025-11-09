import {defineField, defineType} from 'sanity'

export const publicFoodSourceType = defineType({
  name: 'foodBank',
  title: 'Food Bank',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'location',
      title: 'Location'
    },{
      name: 'hoursOfOperation',
      title: 'Hours of Operation',
    }
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      group: 'general',
      options: {
        list: [
          'Food Bank',
          'Mini Pantry',
          'Other',
        ]
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coordinates',
      type: 'geopoint',
      group: 'location',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'address',
      group: 'location',
    }),
    defineField({
      name: 'businessHours',
      type: 'array',
      of: [{
        type: 'hoursOfOperation'
      }],
      group: 'hoursOfOperation',
    })
    // defineField({
    //   name: 'body',
    //   type: 'array',
    //   of: [{type: 'block'}],
    // }),
  ],
})