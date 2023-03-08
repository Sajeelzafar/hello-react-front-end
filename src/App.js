import axios from 'axios';
import Greetings from './components/greetings';
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

const API_URL = "http://localhost:3000/api/messages";

async function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

export const randomMessage = createAsyncThunk(
  'Random Message',
  getAPIData
);

const messageSlice = createSlice({
  name: 'messageReducer',
  initialState: {message: null},
  extraReducers: (builder) => {
    builder.addCase(randomMessage.fulfilled, (state, action) => {
      state.message = action.payload.greeting;
    })
  }
})

const store = configureStore({
  reducer: messageSlice.reducer,
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
