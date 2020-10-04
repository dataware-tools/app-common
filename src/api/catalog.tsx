export const API_CATALOG = {
  authTest: {
    id: 'auth_test',
    name: 'Test authentication',
    description: 'Check if authentication passes',
    endpoint: '/auth_test'
  },
  databaseStore: {
    id: 'database_store',
    name: 'Database store',
    description: 'An API for storing meta-information of databases',
    endpoint: '/database_store'
  },
  recordStore: {
    id: 'record_store',
    name: 'Record store',
    description: 'An API for fetching record metadata',
    endpoint: '/record_store'
  }
}
