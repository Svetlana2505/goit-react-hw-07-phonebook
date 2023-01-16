import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReduser,
    filter: filterReduser,
  },
});
