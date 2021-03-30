import { createSlice } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { MailSliceState, MailState } from '../type';
import { mailsService } from '../services/mails.service';

const mailInitialState: MailState = {
  data: {
    _id: '',
    senderEmail: '',
    senderName: '',
    recipientEmail: '',
    recipientName: '',
    starred: false,
    category: '',
    sender: '',
    subject: '',
    description: '',
    date: '',
    __v: 0,
  },
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState: mailInitialState,
  reducers: {
    loadMail: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    clearMail: (state) => {
      state.data = {
        _id: '',
        senderEmail: '',
        senderName: '',
        recipientEmail: '',
        recipientName: '',
        starred: false,
        category: '',
        sender: '',
        subject: '',
        description: '',
        date: '',
        __v: 0,
      };
    },
  },
});

export const { loadMail, clearMail } = mailSlice.actions;

export const loadMailAsync = (id: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  mailsService
    .loadOne(id)
    .then((data) => {
      dispatch(loadMail(data));
    })
    .catch(() => {
      throw new Error('Something went wrong');
    });
};

export const selectMail = (state: MailSliceState) => state.mail.data;

export default mailSlice.reducer;
