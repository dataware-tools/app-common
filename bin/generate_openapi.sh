#!/usr/bin/env bash
#
# Generate OpenAPI Clients
#

set -e
set -x

DIR=${C_D}
[[ -z "${DIR}" ]] && DIR=$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)

CODEGEN=${DIR}/../node_modules/.bin/openapi

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

# Create index.tsx
apidir=${DIR}/../src/openapi
[[ ! -d ${apidir} ]] && mkdir -p ${apidir}
echo -n "" > ${apidir}/index.tsx

# Download schema and generate OpenAPI clients
for line in $(cat src/catalog/api.json | jq -r 'keys[] as $k | "\($k):\(.[$k] | .schema)"')
do
  apiName=${line%%:*}
  apiSchema=${line#*:}
  [[ ${apiSchema} =~ null ]] && continue
  echo "Generating OpenAPI client for API: ${apiName} (Schema: ${apiSchema})"
  outdir=${apidir}/${apiName}
  [[ ! -d ${outdir} ]] && mkdir -p ${outdir}
  getFile ${apiSchema} > ${outdir}/schema.yaml

  # Generate API-clients
  if [[ -f ${CODEGEN} ]]; then
    ${CODEGEN} --input ${outdir}/schema.yaml --output ${outdir}/client --useOptions
  else
    npx openapi-typescript-codegen --input ${outdir}/schema.yaml --output ${outdir}/client --useOptions
  fi
  echo "export * as ${apiName} from './${apiName}/client'" >> ${apidir}/index.tsx
done
