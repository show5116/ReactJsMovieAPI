import Button from "./Button";
import styles from "./UseEffect.module.css";
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    // useEffect는 render가 될때마다 실행하는 것을 방지한다.
    // deps안의 값이 바뀔때마다 실행되고, deps가 빈 배열이면 처음 render시 한번만 실행된다.
    useEffect(() => {
        // 이 함수는 처음 render 시에만 실행된다.
        console.log("한번만 실행");
    }, []);
    useEffect(() => {
        // 이 함수는 keyword 값이 변할 시마다 실행된다.
        console.log("값이 들어올때마다 실행")
    },[keyword]);
    useEffect(() => {
        // 이 함수는 keyword 값이 변하거나, counter 값이 변할때마다 실행한다.
        console.log("클릭하거나, 값이 들어올때마다 실행")
    },[keyword,counter])


    return (
        <div>
            <h1 className={styles.title}>Welcome back!</h1>
            <label htmlFor=""></label>
            <input type="text" placeholder="Search.." onChange={onChange}/>
            <div>
                <button onClick={onClick}>click me</button>
                <Button text={"Continue"} />
            </div>
        </div>
    );
}

export default App;
