import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos=() => {
        axios.get('http://localhost:8080/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }
     // Handle checkbox change to update ToDo status
     const handleStatusChange = (id, currentStatus) => {
        const newStatus = currentStatus === 'PENDING' ? 'COMPLETED' : 'PENDING';
        axios.patch(`http://localhost:8080/todos/${id}/status`, { status: newStatus })
            .then(() => fetchTodos())  // Refresh the list after updating
            .catch(error => console.error('Error updating ToDo status:', error));
    }; 
    useEffect(()=>{
        fetchTodos();

    })

    return (
        <div className="row" style={{justifyContent:"center"}}>
            <div className="col-md-5">
            <h3 style={{backgroundColor:"black",color:"white"}}> ToDo List</h3>
            <div style={{border:"1px solid green"}}>
                {todos.map(todo => (
                    <div key={todo.id} style={{padding:"12px",backgroundColor:"purple",border:"2px solid white",color: todo.status === 'COMPLETED' ? 'black' : 'white'}}>
                        {todo.description}
                        <span style={{float:"right",color:"pink"}}>
                        <input
                            type="checkbox"
                            checked={todo.status === 'COMPLETED'}
                            onChange={() => handleStatusChange(todo.id, todo.status)}
                        />{todo.status}</span>
                    </div>
                ))}
                
            </div>
            
            </div>
        </div>
    );
}

export default ToDoList;
