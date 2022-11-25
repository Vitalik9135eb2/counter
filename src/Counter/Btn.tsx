import React from 'react';

type BtnPropsType ={
    callBack: () => void
    name: string
    class: string
}

export const Btn = (props:BtnPropsType) => {

    const onclickBtnHandler = () =>{
        props.callBack()
    }

    return (
        <button className={props.class} onClick={onclickBtnHandler}>
            {props.name}
        </button>
    );
};

