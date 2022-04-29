import ToDo from "./ToDo";
import {useEffect, useState} from "react";
import CoinTracker from "./CoinTracker";

function App() {
    return (
        <div>
            <CoinTracker />
            <ToDo />
        </div>
    );
}

export default App;
