import { /* createSelector, */ createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../../redux/rootReducer';

export type Mail = {
  id: string;
  sender: string;
  subject: string;
  description: string;
  date: string;
};

export type MailsState = {
  entities: Mail[];
};

const initialState: MailsState = {
  entities: [],
};

export const mailsSlice = createSlice({
  name: 'mails',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default mailsSlice.reducer;
