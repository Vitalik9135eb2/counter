import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import { SettingCounter} from "./SettingCounter/SettingCounter";





export const AppWithRedux = React.memo( () => {

    console.log("App is loaded")

    return (
    <div className="App">
        <Counter/>
        <SettingCounter/>
    </div>
  );
})

