import {defineField, defineType} from 'sanity';

export const timeRangeType = defineType({
  title: 'Time Range',
  name: 'timeRange',
  type: 'object',
  fields: [
    defineField({
      name: 'open',
      title: 'Open',
      type: 'string',
    }),
    defineField({
      name: 'close',
      title: 'Close',
      type: 'string',
    })
  ],
  preview: {
    select: {
      open: 'open',
      close: 'close'
    },
    prepare(selection) {
      const {open, close} = selection
      return {
        title: `${open} - ${close}`,
      }
    }
  }
})

export const hoursOfOperationType = defineType({
  title: 'Hours of Operation',
  name: 'hoursOfOperation',
  type: 'object',
  fields: [
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          {title: 'Monday', value: 'Monday'},
          {title: 'Tuesday', value: 'Tuesday'},
          {title: 'Wednesday', value: 'Wednesday'},
          {title: 'Thursday', value: 'Thursday'},
          {title: 'Friday', value: 'Friday'},
          {title: 'Saturday', value: 'Saturday'},
          {title: 'Sunday', value: 'Sunday'},
        ]
      }
    }),
    defineField({
      name: 'is24Hours',
      title: 'Open 24 Hours',
      type: 'boolean'
    }),
    defineField({
      name: 'openTimes',
      title: 'Open Times',
      type: 'array',
      of: [{type: 'timeRange'}]
    })
  ],
  preview: {
    select: {
      day: 'dayOfWeek',
      is24Hrs: 'is24Hours',
      times: 'openTimes'
    },
    prepare(selection) {
      const {day, is24Hrs, times} = selection;
      if (is24Hrs) {
        return {
          title: `${day} Open 24 Hours`
        }
      }
      return {
        title: `${day} ${times[0].open}-${times[0].close}`,
      }
    }
  }
  
});
