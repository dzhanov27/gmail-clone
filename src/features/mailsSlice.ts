import { createSlice } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { MailsSliceState, MailsState } from '../type';
import { mailsService } from '../services/mails.service';

const mailsInitialState: MailsState = {
  data: [],
  mailsNumber: 0,
};

export const mailsSlice = createSlice({
  name: 'mails',
  initialState: mailsInitialState,
  reducers: {
    loadMails: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },

    setMailsNumber: (state, action) => {
      const number = action.payload.filter((mail: any) => {
        return mail.category.includes('regular');
      }).length;
      return {
        ...state,
        mailsNumber: number,
      };
    },
  },
});

export const { loadMails, setMailsNumber } = mailsSlice.actions;

export const loadMailsAsync = (category: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  mailsService
    .load(category)
    .then((data) => {
      dispatch(loadMails(data));
    })
    .catch(() => {
      throw new Error('Something went wrong on loading mails');
    });
};

export const updateMailAsync = (id: string, starred: boolean) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  mailsService
    .updateOne(id, starred)
    .then((category) => {
      dispatch(loadMailsAsync(category));
    })
    .catch(() => {
      throw new Error('Something went wrong on updating mail');
    });
};

export const loadStarredMailsAsync = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  mailsService
    .loadStarred()
    .then((data) => {
      dispatch(loadMails(data));
    })
    .catch(() => {
      throw new Error('Something went wrong on loading starred mails');
    });
};

export const selectMails = (state: MailsSliceState) => state.mails.data;
export const selectMailsNumber = (state: MailsSliceState) =>
  state.mails.mailsNumber;

export default mailsSlice.reducer;
