import { AxiosRequestConfig } from 'axios';
import { request } from '../../helpers/ApiHelper';

export default {
  get() {
    const config: AxiosRequestConfig = {
      url: '/tasks', method: 'GET',
    };
    return request(config);
  },
};
