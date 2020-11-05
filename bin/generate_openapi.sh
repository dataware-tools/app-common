#!/usr/bin/env bash
#
# Generate OpenAPI Clients
#

set -e
set -x

DIR=${C_D}
[[ -z "${DIR}" ]] && DIR=$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)

function getFile() {
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

# Check
[[ ! -f src/catalog/api.json ]] && echo "Please download catalogs first." >&2 && exit 1

for line in $(cat src/catalog/api.json | jq -r 'keys[] as $k | "\($k):\(.[$k] | .schema)"')
do
  apiName=${line%%:*}
  apiSchema=${line#*:}
  [[ ${apiSchema} =~ null ]] && continue
  echo "Generating OpenAPI client for API: ${apiName} (Schema: ${apiSchema})"
  outdir=${DIR}/../dist/openapi/${apiName}
  [[ ! -d ${outdir} ]] && mkdir -p ${outdir}
  getFile ${apiSchema} > ${outdir}/schema.yaml
  docker run --rm \
    -v $outdir:/local openapitools/openapi-generator-cli generate \
    -i /local/schema.yaml \
    -g typescript-axios \
    -o /local/client
done
