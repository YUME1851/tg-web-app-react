import './App.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        tg.ready(); //Сообщает о том, что приложение полностью проинициализировалось и его можно отрисовывать
    }, [])



  return (
    <div className="App">


    </div>
  );
}

export default App;
