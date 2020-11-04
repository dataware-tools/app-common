#!/usr/bin/env bash
#
# Download catalog
#

set -e

function getCatalog() {
  set -e
  URL=$1
  if [[ ${URL} =~ http.* ]]; then
    [[ -z "${GITHUB_TOKEN}" ]] && echo "env GITHUB_TOKEN must be set" >&2 && exit 1
    curl -H "Authorization: token ${GITHUB_TOKEN}" "${URL}"
  elif [[ ${URL} =~ git@.* ]]; then
    workdir=$(mktemp -d)
    git clone --depth 1 "${URL%.git*}" "${workdir}/catalog" > /dev/null
    cat "${workdir}/catalog/${URL##*.git}"
  else
    cat "${URL}"
  fi
}

# Default parameters
#DEFAULT_API_CATALOG=https://raw.githubusercontent.com/dataware-tools/catalog/master/api.json
#DEFAULT_APP_CATALOG=https://raw.githubusercontent.com/dataware-tools/catalog/master/app.json
DEFAULT_API_CATALOG=git@github.com:dataware-tools/catalog.git/api.json
DEFAULT_APP_CATALOG=git@github.com:dataware-tools/catalog.git/app.json

# Set the default parameters if not specified
[[ -z "${API_CATALOG}" ]] && echo "Setting API_CATALOG to ${DEFAULT_API_CATALOG}" && API_CATALOG=${DEFAULT_API_CATALOG}
[[ -z "${APP_CATALOG}" ]] && echo "Setting APP_CATALOG to ${DEFAULT_APP_CATALOG}" && APP_CATALOG=${DEFAULT_APP_CATALOG}

# Get the catalogs
[[ ! -d src/catalog ]] && mkdir -p src/catalog
getCatalog ${APP_CATALOG} > src/catalog/app.json
getCatalog ${API_CATALOG} > src/catalog/api.json

[[ ! -d dist/catalog ]] && mkdir -p dist/catalog
getCatalog ${APP_CATALOG} > dist/catalog/app.json
getCatalog ${API_CATALOG} > dist/catalog/api.json
