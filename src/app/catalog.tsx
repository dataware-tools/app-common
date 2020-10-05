export const APP_CATALOG = {
  webviz: {
    id: 'webviz',
    icon: 'https://webviz.io/favicon.ico',
    name: 'WebViz',
    description: 'Modern rosbag player',
    urlPrefix: 'http://webviz.hdwlab.co.jp/',
    visibility: 'public',
    location: 'external'
  },
  docs: {
    id: 'data_docs',
    icon: 'book',
    name: 'Documents',
    description: 'Read documents',
    urlPrefix: 'http://192.168.1.122:32332',
    visibility: 'private',
    location: 'internal'
  },
  dataBrowser: {
    id: 'data_browser',
    icon: 'database',
    name: 'Data browser',
    description: 'Explore data',
    urlPrefix: '/data-browser',
    visibility: 'private',
    location: 'internal'
  }
}
