import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact as addContactThunk,
  deleteContact as deleteContactThunk,
} from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // fetchContacts
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // addContact
      .addCase(addContactThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // deleteContact
      .addCase(deleteContactThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(c => c.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // clear contacts on logout
      .addCase('auth/logout/fulfilled', state => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectContactLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, state => state.filters.name],
  (contacts, nameFilter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

export default contactsSlice.reducer;
