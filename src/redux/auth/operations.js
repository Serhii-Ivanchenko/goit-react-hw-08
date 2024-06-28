import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', () => {});

export const logIn = createAsyncThunk('auth/login', () => {});

export const logOut = createAsyncThunk('auth/logout', () => {});
