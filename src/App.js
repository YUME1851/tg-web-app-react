import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
    const {onToggleButton, tg} = useTelegram();


    useEffect(() => {
        tg.ready();
    }, []) //Сообщает о том, что приложение полностью проинициализировалось и его можно отрисовывать

    return (
        <div className="App">
            <button onClick={onToggleButton}>Жмяк-с!</button>
        </div>
    );
}

export default App;
