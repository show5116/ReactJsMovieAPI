import {useEffect, useState} from "react";

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo.replace(/ /g,"") ===""){
            return;
        }
        setToDoList((prev) => [toDo,...prev]);
        setToDo("");
    }
    return (
        <div>
            <h1>My To Dos {toDoList.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>
            <hr />
            {
                // .map 함수는 array안에 function을 넣을 수 있게 해준다. 그리고 모든 item에 함수가 실행된다.
                // Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별해준다.
                toDoList.map((item,index) => <li key={index}>{item}</li>)
            }
        </div>
    );
}

export default ToDo;
