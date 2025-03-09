import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    pushMessage: (state, action) => {
      const id = Date.now();
      const { text, status } = action.payload;
      state.messages.push({ id, text, status });
    },
    removeMessage: (state, action) => {
      const { id } = action.payload;
      const index = state.messages.findIndex(m => m.id === id);
      if (index !== -1) {
        state.messages.splice(index, 1);
      }
    }
  }
});

export const { pushMessage, removeMessage } = toastSlice.actions;
export default toastSlice.reducer;