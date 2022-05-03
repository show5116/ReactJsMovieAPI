import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.home__container}>
            <h1 className={styles.title}>Clone And Apply!</h1>
            <div className={styles.content}>
                ReactJS로 영화 웹 만들기<br/>
                state, props, useState, useEffect<br/>
                등의 리엑트 기능 학습<br/>
                기능 추가와 디자인 적용.
            </div>
            <a className={styles.btn} href="https://nomadcoders.co/react-for-beginners/lobby">강의로 가기 →</a> <br/>
            <a className={styles.btn} href="https://github.com/show5116/ReactJsMovieAPI">소스코드로 가기 →</a>
        </div>
    );
}

export default Home;
