import styles from "./Home.module.css"

function Home() {
    return (
        <div>
            <h1 className={styles.title}>Clone And Apply!</h1>
            <div className={styles.content}></div>
            <a className={styles.btn} href="https://nomadcoders.co/react-for-beginners/lobby">강의로 가기 →</a>
        </div>
    );
}

export default Home;
