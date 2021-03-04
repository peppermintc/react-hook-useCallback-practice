import React, { useState, useCallback } from 'react';
import './App.css';
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback((incrementer) => {
      return [number+incrementer, number+incrementer+1, number+incrementer+2]
  }, [number])
  
  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
