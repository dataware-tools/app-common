export const AUTH_CONFIG = {
  domain:
    process.env.REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN ||
    process.env.NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN ||
    process.env.STORYBOOK_DATAWARE_TOOLS_AUTH_CONFIG_DOMAIN ||
    "dataware-tools.us.auth0.com",
  clientId:
    process.env.REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID ||
    process.env.NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID ||
    process.env.STORYBOOK_DATAWARE_TOOLS_AUTH_CONFIG_CLIENT_ID ||
    "ETb1RhJEbtXlFgWtaHzl5kPCkaYqhTVl",
  apiUrl:
    process.env.REACT_APP_DATAWARE_TOOLS_AUTH_CONFIG_API_URL ||
    process.env.NEXT_PUBLIC_DATAWARE_TOOLS_AUTH_CONFIG_API_URL ||
    process.env.STORYBOOK_DATAWARE_TOOLS_AUTH_CONFIG_API_URL ||
    "https://demo.dataware-tools.com/",
};
