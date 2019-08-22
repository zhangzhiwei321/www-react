import React from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";


// create State object
let appState = observable({ timer: 0 });

// define action
setInterval(
    action(() => {
        appState.timer += 1;
        console.log(appState.timer)
    })
    , 1000);

appState.resetTimer = action(() => {
    appState.timer = 0;
});
export { appState }
