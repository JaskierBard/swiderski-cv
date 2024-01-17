import React, { useState } from 'react';
import "./Slider.css";

const Slider: React.FC = () => {
    const [value, setValue] = useState<number>(50); // Typ stanu jako number

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.target.value, 10));
        console.log(event.target.value);
    };

    return (
        <div className='container'>
           <img
          className="sun"
          src={process.env.PUBLIC_URL + "/icons/sun.png"}
          alt="sun"
        />
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                className="slider"
                id="myRange"
                onChange={handleChange}
            />
            {/* <div>Wartość: {value}</div> */}
            <img
          className="moon"
          src={process.env.PUBLIC_URL + "/icons/moon.png"}
          alt="moon"
        />
        </div>
    );
};

export default Slider;
