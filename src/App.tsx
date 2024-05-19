import React from 'react';
import './App.css';

export function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export function AppTitle() {
    return (
        <>This is APP component</>
    )
}

export function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

export function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export function AccordionTitle() {
    return (
        <div>
            <h3>MENU</h3>
        </div>
    )
}


export function Star() {
    return (
        <div>Star</div>
    )
}