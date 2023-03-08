import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { randomMessage } from '../App';

function Greetings() {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomMessage())
  }, []);

  return(
    <div>
      <h1>Your greeting message is:</h1>
      <p>{message}</p>
    </div>
  )
}

export default Greetings