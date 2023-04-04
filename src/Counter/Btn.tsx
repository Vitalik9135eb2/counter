import React from 'react';

type BtnPropsType ={
    callBack: () => void
    name: string
    class?: string
    disabled?: boolean
}

export const Btn = React.memo((props:BtnPropsType) => {

    console.log("Btn is loaded")

    const onclickBtnHandler = () =>{
        props.callBack()
    }

    return (
        <button disabled={props.disabled} className={props.class} onClick={onclickBtnHandler}>
            {props.name}
        </button>
    );
})

