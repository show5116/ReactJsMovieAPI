import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className={styles.header__container}>
            <div className={styles.header__menu}>
                <Link to="/"><img className={styles.home__btn} src={require("../../assets/react.png")} alt="react"/></Link>
                <Link to="/movie"><span>MovieApp</span></Link>
                <Link to="/todo">ToDoList</Link>
                <Link to="/coin">CoinTracker</Link>
                <Link to="/cleanUp">CleanUpExam</Link>
                <Link to="/useEffect">UseEffectExam</Link>
            </div>
        </div>
    );
}

export default Header;
