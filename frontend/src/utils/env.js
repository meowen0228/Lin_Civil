import pkJson from '../../package.json';

// let NODE_ENV = process.env.NODE_ENV || 'development';

let url = '';

if (window.location.protocol == 'http:') {
  url = pkJson.config.url;
} else {
  // url = `${window.location.protocol}//${import.meta.env.VITE_API_V1}`;
  url = `${window.location.protocol}//lin-civil.tk`;
}
// eslint-disable-next-line import/prefer-default-export
export const defaultConfig = {
  url,
  api_url: `${url}/api/v1`,
};
