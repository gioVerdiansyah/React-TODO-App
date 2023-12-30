import React from "react";

const AddTodo = (props) => {

    const [error, setError] = React.useState();

    const handleAddTodo = (event) => {
        event.preventDefault();
        const value = event.target.elements['input-todo'].value;
        if(handleValidation(value)){
            event.target.reset();
            props.handleAddTodo(value);
        }
    }
    
    const handleValidation = (value) => {
        if(value.length <= 0){
            setError("Input tidak boleh kosong");
            return false;
        }

        setError();
        return true;
    }

    return(
        <form onSubmit={handleAddTodo}>
            <div>
                <input type="text" name="input-todo" placeholder="Masukkan todo baruu"/>
                <button type="submit">+</button>
            </div>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
        </form>
    )
}

export default AddTodo;