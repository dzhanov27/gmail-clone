import axios from 'axios';
import { Mail } from '../type';

const URL = 'http://localhost:5000';

export const mailsService = {
  load: (): Promise<Mail[]> => {
    return axios.get(`${URL}/api/mails`).then((response) => {
      return response.data;
    });
  },

  loadOne: (id: string): Promise<Mail> => {
    return axios.get(`${URL}/api/mails/${id}`).then((response) => {
      return response.data;
    });
  },
};
