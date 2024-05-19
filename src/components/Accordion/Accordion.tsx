import React from 'react';

type AccordionTitleType = {
    titleValue: string
}

export function Accordion(props: AccordionTitleType) {
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}


function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.titleValue}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
