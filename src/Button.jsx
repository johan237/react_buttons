import React, {useState} from "react"

export default function Button(props){

    const {variant='',endIcon='',startIcon='',size='md',value,color="defaultColor",disabled=false, disableShadow=false} = props
        console.log(props)
        const style = {
            boxShadow:"none"
        }

        if(endIcon == 'lgs'){
            return (
                <button id={variant} style={disableShadow ? style : {}} className={ `btn btn-${size} btn-${color}`  } disabled ={disabled} >
                <span className="material-symbols-outlined">add_shopping_cart</span> 
                    {value|| "Default"}
            </button>
            )
        }else if(startIcon == 'lgs'){
            return (
                <button id={variant} style={disableShadow ? style : {}} className={ `btn btn-${size} btn-${color}`  } disabled ={disabled} >
                    {value|| "Default"}
                <span className="material-symbols-outlined">add_shopping_cart</span> 
            </button>
            )
        }else{
            return (
                <button id={variant} style={disableShadow ? style : {}} className={ `btn btn-${size} btn-${color}`  } disabled ={disabled} >
                {value|| "Default"}
        </button>
            )
        }


}

