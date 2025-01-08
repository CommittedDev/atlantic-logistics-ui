import { SignInData } from "@/interface/auth/sign-in";
import { AppDispatch } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import * as authServices from "@/api/auth/sign-in";
import { setAccessToken } from "@/helpers/token-helper";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.loading = false;
    },
    loginFailure(state) {
      state.isLoggedIn = false;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const signIn = (data: SignInData) => async (dispatch: AppDispatch) => {
  dispatch(loginStart());
  try {
    const response = await authServices.signIn(data);

    if (response.status === 200) {
      dispatch(loginSuccess());
      setAccessToken(response.data.accessToken);
    } else {
      dispatch(loginFailure());
      setAccessToken("");
    }
  } catch (error) {
    console.error(error);
    dispatch(loginFailure());
    setAccessToken("");
  }
};

export const signOut = () => (dispatch: AppDispatch) => {
  dispatch(loginFailure());
  setAccessToken("");
};

export default authSlice.reducer;
