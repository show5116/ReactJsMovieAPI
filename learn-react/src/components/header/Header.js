import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {Mobile, PC} from "../mediaquery/MediaQuery";
import Nav from "../nav/Nav";
import {useState} from "react";
import classNames from "classnames";

function Header(){
    const [hamburger , setHamburger] = useState(false);

    const onClick = () => {
        setHamburger((prev) => !prev);
    }

    return (
        <div>
            <PC>
                <div className={styles.header__container}>
                    <div className={styles.header__menu}>
                        <Link to="/"><img className={styles.home__btn} src={require("../../assets/react.png")} alt="react"/></Link>
                        <Nav />
                    </div>
                </div>
            </PC>
            <Mobile>
                <div className={styles.header__container}>
                    <div className={styles.header__mobile}>
                        <img onClick={onClick} className={styles.hamburger} src={hamburger ? require("../../assets/x.png") : require("../../assets/Hamburger_icon.png")} alt="hamburger"/>
                        <Link to="/"><img onClick={hamburger ? onClick : null} className={styles.home__btn} src={require("../../assets/react.png")} alt="react"/></Link>
                    </div>
                    <div className={hamburger ? classNames(styles.hamburger__menu,styles.active) : styles.hamburger__menu}>
                        <Nav slide={onClick}/>
                    </div>
                </div>
            </Mobile>
        </div>
    );
}

export default Header;
