import React, { useState } from 'react'
import { Checkbox } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import './Tasks.css'



function Tasks({ tarefas, deleteTask, completeTask }) {





    return (






        < div className='div-task' >
            {
                tarefas.map((tarefa, index) => {
                    return (

                        <div key={index} className='tasks' style={{ backgroundColor: tarefa.isComplete ? '#70AE6E' : '' }}  >

                            <Checkbox
                                color="default"
                                onClick={() => completeTask(index)}
                            />
                            <p style={{ textDecoration: tarefa.isComplete ? 'line-through' : 'none' }}>{tarefa.task}</p>

                            <IconButton>
                                <DeleteOutlinedIcon onClick={() => deleteTask(index)} sx={{ color: red[900] }} />
                            </IconButton>

                        </div>
                    )
                })
            }



        </div >
    )
};

export default Tasks;