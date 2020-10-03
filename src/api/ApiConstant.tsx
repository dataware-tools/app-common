export const API_CATALOG = {
  authTest: {
    id: 'auth_test',
    name: 'Test authentication',
    description: 'Check if authentication passes',
    endpoint: '/auth_test'
  }
}

export const APP_CATALOG = {
  webviz: {
    id: 'webviz',
    name: 'WebViz',
    description: 'Modern rosbag player',
    urlPrefix: 'http://webviz.hdwlab.co.jp/'
  },
  docs: {
    id: 'data_docs',
    name: 'Documents',
    description: 'Read documents',
    urlPrefix: '/docs'
  },
  dataBrowser: {
    id: 'data_browser',
    name: 'Data browser',
    description: 'Explore data',
    urlPrefix: '/data_browser',
  }
}
