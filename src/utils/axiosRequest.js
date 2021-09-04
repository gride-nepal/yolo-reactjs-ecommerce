import axios from 'axios';
import Endpoint from './endpoint';
import config from '../../config';

const instance = axios.create({
    baseURL: Endpoint.BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'applicationName': config.APPLICATION_NAME,
        'applicationKey': config.APPLICATION_KEY,
        'bt-app-api-key':config.GRIDE_APPLICATION_API_KEY,
  'bt-app-public-key':config.GRIDE_APPLICATION_PUBLIC_KEY,
    }
  });

  export default instance;