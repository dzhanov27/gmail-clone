import { combineReducers } from '@reduxjs/toolkit';

import mailsReducer from '../features/mailsSlice';
import mailReducer from '../features/mailSlice';
import sectionReducer from '../features/sectionSlice';

// reducers
const rootReducer = combineReducers({
  mails: mailsReducer,
  mail: mailReducer,
  section: sectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
