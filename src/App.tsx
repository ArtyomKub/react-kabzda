import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

export function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
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



