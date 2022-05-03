import styles from "./Loading.module.css";

function Loading(){
    return (
        <div className={styles.loading__container}>
            <div className={styles.loading}></div>
            <div className={styles.loading__text}>loading</div>
        </div>
    );
}

export default Loading;
