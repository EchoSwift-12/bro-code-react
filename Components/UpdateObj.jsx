import React, { useState } from "react"
const UpdateObj = () =>{

    const [car, setCar] = useState({year:2024,
                                    make: "Ford",
                                    model: "Mustang"
    });

    const handleYearChange = (event) => {
     setCar(c => ({...c, year: event.target.value }));
    }
    const handleMakeChange = (e) =>{
        setCar(c =>({...c, make: e.target.value}));
    }
    const handleModelChange = (e) =>{
        setCar(c =>({...c, model: e.target.value}));
    }
return(
    <div>
<p>
    Your Favourite Car is: {car.year} {car.make} {car.model}
</p>
<input type="number" value = {car.year}  onChange={handleYearChange}/> <br />
<input type="text" value = {car.make} onChange={handleMakeChange} /> <br />
<input type="text" value = {car.model} onChange={handleModelChange}/> <br />
    </div>
)
}
export default UpdateObj