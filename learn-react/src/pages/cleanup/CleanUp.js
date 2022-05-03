import {useEffect, useState} from "react";
import Button from "../../components/button/Button";

function Hello(){
    // showing 할 떄 마다 useEffect 내부 함수가 실행되고,
    // Component 가 삭제될 때 return 문이 실행된다.

    useEffect(()=>{
        console.log("hello created");
        return () => console.log("hello destroyed");
    },[]);

    return <h2>Hello</h2>;
}

function CleanUp() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <h1>Clean Up!</h1>
            <Button func={onClick} text={showing ? "Hide" : "Show"} />
            {showing ? <Hello /> : null}
        </div>
    );
}

export default CleanUp;
