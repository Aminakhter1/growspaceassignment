
import React, { useState } from 'react';
import axios from 'axios';

function ToDoForm() {
    
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = { description };

        axios.post('http://localhost:8080/todos', newTodo)
            .then(response => {
                console.log('ToDo created:', response.data);
            
                setDescription('');
            })
            .catch(error => {
                console.error('Error creating todo:', error);
            });
    };

    return (
        <div className='row' style={{justifyContent:"center"}}><hr/>
            <div className="col-md-5">
            <h2 style={{backgroundColor:"pink",padding:"20px",borderRadius:"10px 10px 0px 0px"}}>Create New ToDo</h2>
            <form onSubmit={handleSubmit}>
               
               
            <div class="input-group mb-3">
           <input type="text" className="form-control" placeholder="write here..." value={description} onChange={(e) => setDescription(e.target.value)} aria-describedby="button-addon2"/>
           <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
           </div>
            
            </form>
        </div>
        </div>
    );
}

export default ToDoForm;
