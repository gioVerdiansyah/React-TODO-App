import React from "react";

const TodoList = (props) => {

    const handleRemoveList = (id) => {
        const newDataList = props.dataList.filter((items) => items.id !== id);
        props.handleRemove(newDataList);
    }

    return(
        <ul>
            {
                props.dataList.length > 0 ? (
                    props.dataList.map((items) => 
                        <li key={items.id}>
                            {items.name}
                            <button onClick={() => handleRemoveList(items.id)}>x</button>
                        </li>
                    )
                ) : (
                    <li>
                        Tidak ada Items...
                    </li>
                )
            }
        </ul>
    )
}

export default TodoList;