import { configureStore, createSlice } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greetings from './components/greetings';
import randomMessage from './actions/randomMessage';

const messageSlice = createSlice({
  name: 'messageReducer',
  initialState: { message: null },
  extraReducers: (builder) => {
    builder.addCase(randomMessage.fulfilled, (state, action) => {
      const newState = { ...state, message: action.payload.greeting };
      return newState;
    });
  },
});

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
  );
}

export default App;
