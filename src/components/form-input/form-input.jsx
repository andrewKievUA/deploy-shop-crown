import React from "react"
import "./form-input.styles.scss"

const FormInput = ({handleChange, label, ...otheProps}) => {
    return (
        <div className="group">
            {/*<input className="form-input" inChange={handleChange} {...otherProps}/>*/}
            {/*{label ?*/}
            {/*    (<label className={`${otherProps.value.length ? "shrink" : ""}form-input-label`}>*/}

            {/*        {label}*/}
            {/*    </label>)*/}
            {/*    : null}*/}

        </div>
    )

}


export default FormInput