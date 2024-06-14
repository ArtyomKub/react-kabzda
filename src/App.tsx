import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

type PageTitlePropsType = {
    title: string
}

export function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <Accordion titleValue={'MENU'} collapsed={true}/>
            <Accordion titleValue={'USERS'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff working={true}/>
            <OnOff working ={false}/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}



