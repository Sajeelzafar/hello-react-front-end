import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/messages';

async function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

const randomMessage = createAsyncThunk(
  'Random Message',
  getAPIData,
);

export default randomMessage;
