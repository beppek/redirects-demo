export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2a03e52ef8f2820458659a',
                  title: 'Sanity Studio',
                  name: 'redirects-demo-studio',
                  apiId: '38739463-b20c-4f65-bca7-11e4a11c0a29'
                },
                {
                  buildHookId: '5f2a03e54552d3d34f8aaed7',
                  title: 'Blog Website',
                  name: 'redirects-demo',
                  apiId: '7a504c50-212e-475b-bd5d-24d0da4ed0de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beppek/redirects-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://redirects-demo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
