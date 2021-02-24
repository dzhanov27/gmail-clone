import { createSlice } from '@reduxjs/toolkit';

interface Section {
  red: boolean;
  blue: boolean;
  green: boolean;
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    sectionType: {
      red: true,
      blue: false,
      green: false,
    },
  },
  reducers: {
    openUnsorted: (state) => {
      state.sectionType = {
        red: true,
        blue: false,
        green: false,
      };
    },
    openSocial: (state) => {
      state.sectionType = {
        red: false,
        blue: true,
        green: false,
      };
    },
    openPromo: (state) => {
      state.sectionType = {
        red: false,
        blue: false,
        green: true,
      };
    },
  },
});

export const { openUnsorted, openSocial, openPromo } = sectionSlice.actions;

export const selectSectionType = (state: {
  section: { sectionType: Section };
}) => state.section.sectionType;

export default sectionSlice.reducer;
