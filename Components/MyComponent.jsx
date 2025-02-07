import React, { useState } from 'react';
const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    const updateName = () => {
        setName("doe");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    const student = () =>{
        setIsStudent(!isStudent);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName} >Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}> Set Age</button>

            <p>Is Student: {isStudent ? "Yes" : "No"}</p>
            <button onClick={student}> Student: </button>
        </div>)
}
export default MyComponent