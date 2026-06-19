import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { LanguageCode, UserData } from '@/utils/types';

export const logout = createAction('LOGOUT');

interface InitialState {
  user: UserData | null;
  language: LanguageCode;
}

const initialState: InitialState = {
  user: null,
  language: 'en',
};

const rootSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.language = action.payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(logout, state => ({
      ...initialState,
      language: state.language,
    })),
});

export const { setLanguage } = rootSlice.actions;

export default rootSlice.reducer;
