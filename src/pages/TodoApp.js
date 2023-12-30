import React from "react";
import styles from "./styles/TodoApp.module.css";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const TodoApp = () => {

    const [list, setList] = React.useState([]);

    const handleRemoveList = (data) => {
        setList(data);
    }

    const handleAddList = (nameList) => {
        setList((ps) => [
            ...ps,
            {
                id: list.length + 1,
                name: nameList
            }
        ])
    }

    React.useEffect(() => {
        if (localStorage.getItem('verdi_todo')) {
            setList(JSON.parse(localStorage.getItem('verdi_todo')));
        };
    }, []);

    React.useEffect(() => {
        if(list.length > 0){
            localStorage.setItem('verdi_todo', JSON.stringify(list));
        }
    }, [list]);

    return (
        <div className={styles['todo-container']}>
            <h1>TODO App</h1>
            <TodoList
                handleRemove={handleRemoveList}
                dataList={list}
            />
            <AddTodo handleAddTodo={handleAddList}/>
        </div>
    )
}

export default TodoApp;