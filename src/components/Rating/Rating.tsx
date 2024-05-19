import React from 'react';

type RatingType = {
    selected: boolean
}

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: RatingType) {
    if (!props.selected) {
        return (
            <span><b>Star</b> </span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }
}