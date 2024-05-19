import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
// let a = {
//     name: 'Arsem',
//     age: 10,
//     address: {
//         city: 'Minsk',
//         country: 'Poland'
//     }
// }
//
// let users = [
//     {
//         name: 'Arsem',
//         age: 10,
//         address: {
//             city: 'Poznan',
//             country: 'Poland'
//         }
//     },
//     {
//         name: 'Viktor',
//         age: 13,
//         address: {
//             city: 'Minsk',
//             country: 'Poland'
//         }
//     },
//     {
//         name: 'Dimych',
//         age: 23,
//         address: {
//             city: 'Minsk',
//             country: 'Poland'
//         }
//     }
// ]
//
// let b: Array<string | number>;
// b=[1,2,3,4,5,6,7,8,9,10];
// b=[]
// b=[1,2,3,4,5,6,7]
// b=[123,12,124,'ted',12,'dog',2134]
//
// console.log(b)