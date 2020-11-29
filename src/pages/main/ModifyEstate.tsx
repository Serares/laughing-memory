import React, { useContext, useEffect, useState } from 'react';

// @ts-ignore
const ModifyEstate = (props) => {
    let [propertyData, setPropertyData] = useState({});

    //submit form
    // @ts-ignore
    function sendingData(e) {
        e.preventDefault();
        console.log("Clicked send data button");
        // TODO THINK OF A BETTER WAY OF SHOWING IT'S CHANGING THE PROPERTY
        props.sendDataToBackend(e.target, true);
    }

    return (<div>
        {/* Modify estate */}
    </div>);
}


export default ModifyEstate;