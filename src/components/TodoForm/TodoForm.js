import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import './TodoForm.css'


function TodoForm({ onSave }) {

    const [text, setText] = useState([])


    const getTask = (e) => {
        setText(e.target.value)

    }


    const handleKeypress = e => {

        if (e.key === 'Enter') {
            onSave(text);
            setText('')
        }
    };


    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="todo">
                <div className="input-todo">
                    <TextField

                        variant="outlined"
                        label="Insira uma tarefa..."
                        fullWidth
                        onChange={getTask}
                        onKeyPress={handleKeypress}
                        size="normal"
                        value={text}
                    />

                </div>
                <div className="todo-btn">
                    <Button
                        endIcon={<AddCircleOutlinedIcon />}
                        size="large"
                        onClick={() => {

                            onSave(text);
                            setText('')
                        }}
                        variant="contained"
                    >Save</Button>
                </div>

            </div>
        </form >
    )
};


export default TodoForm;