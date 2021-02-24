import { createSlice } from '@reduxjs/toolkit';

// interface mail

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMailIsOpen: false,
  },
  reducers: {
    openSendMail: (state) => {
      state.sendMailIsOpen = true;
    },
    closeSendMail: (state) => {
      state.sendMailIsOpen = false;
    },
  },
});

export const { openSendMail, closeSendMail } = mailSlice.actions;

export const selectSendMailIsOpen = (state: {
  mail: { sendMailIsOpen: boolean };
}) => state.mail.sendMailIsOpen;

export default mailSlice.reducer;
