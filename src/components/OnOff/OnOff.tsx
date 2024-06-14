import React from 'react';

type OnOffType = {
    working: boolean
}

export const OnOff: React.FC<OnOffType> = () => {
    return (
        <div>
            if


            <button>On</button>
            <button>Off</button>
        </div>
    );
};

//true - green button and circle
// false - red button and circle
