import { createSlice } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { MailsState, State } from '../type';
import { mailsService } from '../services/mails.service';

const mailsInitialState: MailsState = {
  data: [],
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
  },
});

export const { loadMails } = mailsSlice.actions;

export const loadMailsAsync = () => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  mailsService
    .load()
    .then((data) => {
      dispatch(loadMails(data));
    })
    .catch(() => {
      throw new Error('Something went wrong');
    });
};

export const selectMails = (state: State) => state.mails.data;

export default mailsSlice.reducer;
