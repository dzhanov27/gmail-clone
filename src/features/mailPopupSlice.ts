import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mailPopup',
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
  mailPopup: { sendMailIsOpen: boolean };
}) => state.mailPopup.sendMailIsOpen;

export default mailSlice.reducer;
