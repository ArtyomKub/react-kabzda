import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <div>Hello</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let a = {
    name: 'Arsem',
    age: 10,
    address: {
        city: 'Minsk',
        country: 'Poland'
    }
}

let users = [
    {
        name: 'Arsem',
        age: 10,
        address: {
            city: 'Poznan',
            country: 'Poland'
        }
    },
    {
        name: 'Viktor',
        age: 13,
        address: {
            city: 'Minsk',
            country: 'Poland'
        }
    },
    {
        name: 'Dimych',
        age: 23,
        address: {
            city: 'Minsk',
            country: 'Poland'
        }
    }

]


console.log(users[0].address.city)