import React, { useState } from "react";

const UpdateArray = () => {

    const [foods, setFoods] = useState(["apple", "orange", "banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }
    
    return (
        <div>
            <h2> List of food</h2>
            <ol>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food} </li>)}
            </ol>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood} >Add Food </button>
        </div>
    )
}
export default UpdateArray
