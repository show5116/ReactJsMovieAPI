import {useEffect, useState} from "react";
import Return from "../../components/return/Return";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [title, setTitle] = useState("The Coins");
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setTitle(`The Coins (${coins.length})`);
    },[coins]);

    return (
        <div>
            <Return title={title} />
            {loading ? <strong>Loading...</strong> : null}
            <select>
                {coins.map((coin) =>
                    <option>
                        {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                    </option>)
                }
            </select>
        </div>
    );
}

export default CoinTracker;
