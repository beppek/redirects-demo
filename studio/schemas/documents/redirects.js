import { FaRoute } from 'react-icons/lib/fa'

export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: FaRoute,
  fields: [
    {
      name: 'fromPath',
      title: 'From',
      description: 'https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching',
      type: 'string',
    },
    {
      name: 'toPath',
      title: 'To',
      type: 'string',
    },
    {
      name: 'statusCode',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Permanent', value: '301' },
          { title: 'Temporary', value: '302' },
        ],
      },
    },
  ],
  preview: {
    select: {
      from: 'fromPath',
      to: 'toPath',
      statusCode: 'statusCode',
    },
    prepare(selection) {
      const { from, statusCode } = selection
      return {
        title: `${from}`,
        subtitle: `${statusCode || 'Unknown'}`,
      }
    },
  },
}
