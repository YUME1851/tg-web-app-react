import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready(); //Сообщает о том, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [])

    const onClose = () => {
        tg.close()
    }

  return (
    <div className="App">
      oh fuck

        <button onClick={onClose}>Мяу!</button>
    </div>
  );
}

export default App;
