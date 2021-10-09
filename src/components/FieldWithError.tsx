import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { FormElement } from "../types/jsonForm";


const FieldWithError: Component<FormElement> = (props) => {
    const [errors, setErrors]=createSignal([]);
    
    return (
        <label class="block py-2 m-4 outline-black bg-green-500 rounded">
            {props.label}
            
            <div className="error-list">

            </div>
        </label>
    )
};

export default FieldWithError;
