import {Link} from "react-router-dom";
import styles from "./Home.module.css"

function Home() {
    return (
        <div>
            <h1>Learn React Create</h1>
            <div className={styles.link_container}>
                <Link className={styles.btn} to="/movie">Movie App</Link>
                <Link className={styles.btn} to="/todo">ToDo List</Link>
                <Link className={styles.btn} to="/coin">Coin Tracker</Link>
                <Link className={styles.btn} to="/cleanUp">Clean Up exam</Link>
                <Link className={styles.btn} to="/useEffect">UseEffect exam</Link>
            </div>
        </div>
    );
}

export default Home;
