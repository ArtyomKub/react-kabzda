import React from 'react';
import './App.css';

export function App() {
    return (
        <div className="App">
            This is APP component
            <Rating/>
        </div>
    );
}

export default App;


export function Rating() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    )
}