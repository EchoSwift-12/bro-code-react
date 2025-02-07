
import React, { useState } from "react";

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    const handleInputChanges = (e) => {
        setNewTasks(e.target.value);
    }

    const addTask = () => {
        if (newTasks.trim() != "") {
            setTasks(t => [...t, newTasks]);
            setNewTasks("");
        }

    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }
    const moveUpTask = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
                [updatedTask[index - 1], updatedTask[index]];
                setTasks(updatedTask);
        }

    }
    const moveDownTask = (index) => {
        if (index <  tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
                [updatedTask[index + 1], updatedTask[index]];
                setTasks(updatedTask);
        }
    }
    return (<div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input type="text"
                placeholder="Enter the task..."
                onChange={handleInputChanges}
                value={newTasks} />

            <button className="add-button"
                onClick={addTask} >
                Add</button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>

                    <span className="text">{task}</span>

                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete</button>

                    <button className="move-button"
                        onClick={() => moveUpTask(index)}>
                        ⬆️</button>

                    <button className="move-button"
                        onClick={() => moveDownTask(index)}>
                        ⬇️</button>


                </li>
            )}
        </ol>

    </div>)

}
export default ToDoList 