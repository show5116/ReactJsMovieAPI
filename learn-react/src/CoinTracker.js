import ToDo from "./ToDo";
import {useEffect, useState} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);

    return (
        <div>
            <h1>The Coins</h1>
        </div>
    );
}

export default CoinTracker;
