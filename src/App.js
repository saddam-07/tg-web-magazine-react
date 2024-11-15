import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  function onClose() {
      tg.close()
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
