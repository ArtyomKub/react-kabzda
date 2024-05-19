import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

export function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating value = {2}/>
            <Rating value = {1}/>
            <Rating value = {7}/>
            <Accordion/>
        </div>
    );
}

export function AppTitle() {
    return (
        <>This is APP component</>
    )
}



