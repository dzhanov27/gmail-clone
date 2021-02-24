import { combineReducers } from '@reduxjs/toolkit';

// import mailsReducer from '../features/mails/mailsSlice';

// reducers
const rootReducer = combineReducers({
  // mails: mailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
