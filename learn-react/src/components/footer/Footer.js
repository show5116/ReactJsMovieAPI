import styles from "./Footer.module.css";


function Footer(){

    return (
        <div className={styles.footer__container}>
            <a className={styles.footer__link} href="https://github.com/show5116/ReactJsMovieAPI">Source Code</a><br />
            <a className={styles.footer__link} href="https://nomadcoders.co/react-for-beginners/lobby">Nomad Coders</a>
            <div>
                Learnd from Nomad Coders. <br />
                © 2022. You Yeong Jin.
            </div>
        </div>
    );
}

export default Footer;
