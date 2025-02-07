import React, { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorPicker = (e) => {
        setColor(e.target.value);
    }
    return (
        <div className="color-picker-constainer" >
            <h1>Color Picker: {color}</h1>
            <div className="color-display" style = {{background: color}}>
                <p className="color-box">Selected Color: {color}</p>
            </div>
            <div>
                <label className="select-color"> Select a color</label>
                <input type="color" value={color} onChange={handleColorPicker} />
            </div>
        </div>
    )

}

export default ColorPicker;