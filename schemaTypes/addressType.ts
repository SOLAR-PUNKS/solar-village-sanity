import {defineField, defineType} from 'sanity';

export const addressType = defineType({
  title: 'Address',
  name: 'address',
  type: 'object',
  fields: [
    {
      name: 'addressLine1',
      type: 'string',
      title: 'Address Line 1',
      validation: (rule) => rule.required(),
    },{
      name: 'addressLine2',
      type: 'string',
      title: 'Address Line 2'
    },{
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (rule) => rule.required(),
    },{
      name: 'state',
      type: 'string',
      title: 'State',
      validation: (rule) => rule.required(),
    },{
      name: 'zip',
      type: 'string',
      title: 'Zip',
      validation: (rule) => rule.required(),
    }
  ]
});