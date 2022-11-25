import React from 'react';
import {CounterDisplay} from "../Counter/CounterDisplay";
import {Btn} from "../Counter/Btn";

type SettingCounterPropsType={

}

export const SettingCounter = (props:SettingCounterPropsType) => {

    const btnIncHandler = () => {

    }

    return (
        <div className={"counter"}>

            <div className={"btnWrap"}>
                <Btn callBack={btnIncHandler} name={"Set"} class={"btnIncClassName"}/>
            </div>



        </div>
    );
};

