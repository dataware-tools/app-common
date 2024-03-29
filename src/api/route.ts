import API_CATALOG from "./catalog";

const API_HOME: string =
  process.env.DATAWARE_TOOLS_BACKEND_API_PREFIX ||
  process.env.NEXT_PUBLIC_BACKEND_API_PREFIX ||
  "/api/latest";

const constructApiBaseUrl = (url: string) => `${API_HOME}${url}`;

const databaseStorePrefix: string = API_CATALOG.databaseStore.endpoint;
const recordStorePrefix: string = API_CATALOG.recordStore.endpoint;
const jobStorePrefix: string = API_CATALOG.jobStore.endpoint;
const contentStorePrefix: string = API_CATALOG.contentStore.endpoint;
const fileProviderPrefix: string = API_CATALOG.fileProvider.endpoint;
const permissionManagerPrefix: string = API_CATALOG.permissionManager.endpoint;
const metaStorePrefix: string = API_CATALOG.metaStore.endpoint;

const API_ROUTE = {
  RECORD: {
    BASE: constructApiBaseUrl(recordStorePrefix),
  },
  JOB: {
    BASE: constructApiBaseUrl(jobStorePrefix),
  },
  CONTENT: {
    BASE: constructApiBaseUrl(contentStorePrefix),
  },
  FILE: {
    BASE: constructApiBaseUrl(fileProviderPrefix),
  },
  DATABASE: {
    BASE: constructApiBaseUrl(databaseStorePrefix),
  },
  PERMISSION: {
    BASE: constructApiBaseUrl(permissionManagerPrefix),
  },
  META: {
    BASE: constructApiBaseUrl(metaStorePrefix),
  },
};

export { API_ROUTE };
