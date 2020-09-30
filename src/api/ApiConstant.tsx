const API_HOSTNAME: string =
  process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:30071/api/v1'
const WS_HOST: string = process.env.REACT_APP_WS_HOST || 'ws://localhost:30300'
const WEBVIZ_HOST: string =
  process.env.REACT_APP_WEBVIZ_URL || 'https://webviz.hdwlab.co.jp/'
const DOCS_SITE_URL: string =
  process.env.REACT_APP_DOCS_SITE_URL || 'http://localhost:30072'

export const WEBVIZ_URL =
  WEBVIZ_HOST +
  '?rosbridge-websocket-url=:ws_host::ws_port'.replace(':ws_host', WS_HOST)
export const DOCUMENT_URL = DOCS_SITE_URL

export const constructUrl = (url: string) => `${API_HOSTNAME}${url}`

export const ROUTE = {
  HOME: '/',
  DATABASE_LIST: '/databases',
  RECORD_LIST: '/databases/:database_id/records',
  CONFIGMAP_LIST: '/databases/:database_id/config_maps',
  STATISTICAL_SEARCH: '/databases/:database_id/statistical_search'
}

export const API = {
  DATABASE: {
    LIST: constructUrl('/databases/'),
    DETAIL: constructUrl('/databases/:database_id'),
    PATCH: constructUrl('/databases/:database_id/'),
    CONFIG_MAP: {
      NEW: constructUrl('/databases/:database_id/config_maps/'),
      LIST: constructUrl('/databases/:database_id/config_maps/'),
      PATCH: constructUrl(
        '/databases/:database_id/config_maps/:config_map_id/'
      ),
      DELETE: constructUrl(
        '/databases/:database_id/config_maps/:config_map_id/'
      )
    },
    CONTAINER_IMAGE: {
      NEW: constructUrl('/container_images/'),
      LIST: constructUrl('/container_images/'),
      PATCH: constructUrl('/container_images/:config_map_id/'),
      DELETE: constructUrl('/container_images/:config_map_id/')
    },
    RECORD: {
      LIST: constructUrl('/databases/:database_id/records/'),
      DETAIL: constructUrl('/databases/:database_id/records/get_record_info'),
      TAGS: constructUrl('/databases/:database_id/records/get_tags')
    },
    JOB: {
      NEW: constructUrl('/databases/:database_id/jobs/'),
      LIST: constructUrl('/databases/:database_id/jobs/'),
      DETAIL: constructUrl('/databases/:database_id/jobs/:job_id')
    },
    STATISTICS: {
      SEARCH: constructUrl('/databases/:database_id/statistics/search'),
      LIST_CONTENTS: constructUrl(
        '/databases/:database_id/statistics/list_contents'
      )
    },
    RAW: {
      GET_CONTENT: constructUrl('/databases/:database_id/raw/get_content')
    }
  }
}

export const API_DEFAULTS = {
  DATABASE: {
    JOB: {
      IMAGE_NAME: 'hdwlab/rosbridge-rosbag-player:autoware-master',
      CONFIG_MAP_NAME: 'ros-provider-config-map'
    }
  }
}

export const API_EXAMPLE = {
  DATABASE: {
    LIST: {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          database_id: 'METI2018-2019',
          name: 'METI-Pegasus (2018-2019)',
          description: 'A database collected in METI-Pegasus project',
          active_container_image_name:
            'hdwlab/rosbridge-rosbag-player:autoware-master',
          active_config_map_name: '20200402-131828-863155'
        }
      ]
    }
  }
}
