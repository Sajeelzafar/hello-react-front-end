import './App.css';
import axios from 'axios';
import Messages from './components/messages';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/messages";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let greeting = true;
    getAPIData().then((msg) => {
      if (greeting) {
        setMessages(msg);
      }
    })
    return () => (greeting = false);
  }, []);

  return (
    <div className="App">
      <Messages messages={messages} />
    </div>
  );
}

export default App;
