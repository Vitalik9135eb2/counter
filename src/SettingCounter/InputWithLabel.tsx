import React, {ChangeEvent, useCallback} from "react";


type InputWithLabelPropsType ={
    label: string
    value: number
    callback: (e:ChangeEvent<HTMLInputElement>) => void
    type:string

}


export const  InputWithLabel = React.memo( (props:InputWithLabelPropsType ) => {
    console.log("Input component is loaded")

    const onChangeHandler =  (e: ChangeEvent<HTMLInputElement>) =>{
        props.callback(e)
    }

    return(

        <div>
            <span>{props.label}</span>
            <input value={props.value} onChange={onChangeHandler}
                   type={props.type}/>
        </div>
    )

})