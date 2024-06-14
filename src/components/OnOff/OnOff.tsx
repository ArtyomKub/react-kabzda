import React from 'react';
import './OnOff.css'

type OnOffType = {
    working: boolean
}

export const OnOff = (props: OnOffType) => {

    if(props.working) {
        return (
            <div>
                <button className='work'>On</button>
                <button>Off</button>
                <button className='circle_work'></button>
            </div>
        )
    }
    return (
        <div>
            <button>On</button>
            <button className="error">Off</button>
            <button className="circle_error"></button>
        </div>
    )

    // if (props.working === true) {
    //         <button color="green">On</button>
    //     } else {
    //         <button color="red">Off</button>
    //     }

};

//true - green button and circle
// false - red button and circle
