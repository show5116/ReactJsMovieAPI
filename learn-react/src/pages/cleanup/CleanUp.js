import {useEffect, useState} from "react";

function Hello(){
    // showing 할 떄 마다 useEffect 내부 함수가 실행되고,
    // Component 가 삭제될 때 return 문이 실행된다.

    useEffect(()=>{
        console.log("hello created");
        return () => console.log("hello destroyed");
    },[]);

    return <h1>Hello</h1>;
}

function CleanUp() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <h1>Clean Up</h1>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default CleanUp;
