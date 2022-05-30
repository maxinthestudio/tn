import { AxiosRequestConfig } from 'axios';
import { request } from '../../helpers/ApiHelper';

export default {
  post(data: any) {
    const config: AxiosRequestConfig = {
      url: '/tasks',
      method: 'POST',
      data,
    };
    return request(config);
  },
};
