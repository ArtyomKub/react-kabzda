import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

export function App() {
    return (
        <div className="App">
            <PageTitle title = {'This is APP component'}/>
            <PageTitle title = {'Fucking sheet'}/>
            <Accordion titleValue = {'MENU'}/>
            <Accordion titleValue = {'USERS'}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}



