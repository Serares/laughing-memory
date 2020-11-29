export const ENVIRONMENT = process.env.NODE_ENV;
// environment will be overriten by launch.json in vscode debug
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const MAPBOX_TOKEN = process.env["REACT_APP_MAPBOX_TOKEN"];
export const SERVER_API_URL = prod ? process.env["REACT_APP_BACKEND_DOMAIN_DEV"] : process.env["REACT_APP_BACKEND_DOMAIN_PROD"];
