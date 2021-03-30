import axios from 'axios';
import { Mail } from '../type';

const URL = 'http://localhost:5000';

export const mailsService = {
  load: (category: string): Promise<Mail[]> => {
    return axios
      .get(`${URL}/api/mails/category/${category}`)
      .then((response) => {
        return response.data;
      });
  },

  loadOne: (id: string): Promise<Mail> => {
    return axios.get(`${URL}/api/mails/${id}`).then((response) => {
      return response.data;
    });
  },

  updateOne: (id: string, starred: boolean): Promise<string> => {
    return axios
      .put(`${URL}/api/mails/${id}`, { starred: `${!starred}` })
      .then((response) => {
        return response.data.category;
      });
  },

  loadStarred: (): Promise<Mail[]> => {
    return axios.get(`${URL}/api/mails/starred/starred`).then((response) => {
      return response.data;
    });
  },
};
