import { createSlice } from '@reduxjs/toolkit';

// interface Section {
//   red: boolean;
//   blue: boolean;
//   green: boolean;
// }

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    sectionType: 'red',
  },
  reducers: {
    openUnsorted: (state) => {
      state.sectionType = 'red';
    },
    openSocial: (state) => {
      state.sectionType = 'blue';
    },
    openPromo: (state) => {
      state.sectionType = 'green';
    },
  },
});

export const { openUnsorted, openSocial, openPromo } = sectionSlice.actions;

export const selectSectionType = (state: {
  section: { sectionType: string };
}) => state.section.sectionType;

export default sectionSlice.reducer;
