import axios from 'axios';
import { Mail } from '../type';

const URL = 'http://localhost:5000';

export const mailsService = {
  load: (): Promise<Mail[]> => {
    return axios.get(`${URL}/mails`).then((response) => {
      return response.data;
    });
  },
};
