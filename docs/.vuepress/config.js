import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

export default defineUserConfig({
  lang: 'en-US',

  title: 'SAP Bit',
  description: 'The Ultimate SAP Resource',

  // Add the Umami Analytics plugin
  plugins: [
    umamiAnalyticsPlugin({
      // Your Umami script URL
      link: 'https://umami.taylorbrazelton.com/script.js',
      // Your website ID
      id: '09622328-439d-4b9f-8032-b049d28eb1eb',
    }),
  ],

  theme: defaultTheme({
    logo: 'logo-light.svg',
    logoDark: 'logo-dark.svg',
    repo: 'https://github.com/ryanb58/sapbit',
    editLink: true,
    editLinkPattern:':repo/edit/:branch/:path',
    docsBranch: 'main',
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started.html' },
      { 
        text: 'SAP Objects', 
        children: [
          { text: 'Overview', link: '/sap-objects/' },
          { text: 'Transaction Codes', link: '/sap-objects/transaction-codes.html' },
          { text: 'Tables', link: '/sap-objects/tables.html' },
          { text: 'Function Modules', link: '/sap-objects/function-modules.html' },
          { text: 'Data Elements', link: '/sap-objects/data-elements.html' },
          { text: 'Domains', link: '/sap-objects/domains.html' },
          { text: 'IMG Activities', link: '/sap-objects/img-activities.html' },
        ]
      },
      { 
        text: 'RFCs', 
        children: [
          { text: 'Overview', link: '/rfcs/' },
          { text: 'Standard RFCs', link: '/rfcs/standard.html' },
          { text: 'Custom RFCs', link: '/rfcs/custom.html' },
        ]
      },
      { 
        text: 'OData', 
        children: [
          { text: 'Overview', link: '/odata/' },
          { text: 'OData URLs', link: '/odata/urls.html' },
          { text: 'OData Services', link: '/odata/services.html' },
        ]
      },
    ],
    
    sidebar: {
      '/sap-objects/': [
        {
          text: 'SAP Objects',
          children: [
            '/sap-objects/README.md',
            '/sap-objects/transaction-codes.md',
            '/sap-objects/tables.md',
            '/sap-objects/function-modules.md',
            '/sap-objects/data-elements.md',
            '/sap-objects/domains.md',
            '/sap-objects/img-activities.md',
          ],
        },
      ],
      '/rfcs/': [
        {
          text: 'RFCs',
          children: [
            '/rfcs/README.md',
            '/rfcs/standard.md',
            '/rfcs/custom.md',
          ],
        },
      ],
      '/odata/': [
        {
          text: 'OData',
          children: [
            '/odata/README.md',
            '/odata/urls.md',
            '/odata/services.md',
          ],
        },
      ],
    },
    
    // Enable search
    search: true,
    searchMaxSuggestions: 10,
  }),

  bundler: viteBundler(),
})
