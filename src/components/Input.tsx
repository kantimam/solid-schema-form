import type { Component } from "solid-js";
import { FormElement } from "../types/jsonForm";


const Input: Component<FormElement> = (props) => {
    return (
        <label class="block py-2 m-4 outline-black bg-green-500 rounded">
            {props.label}
            <input type="text" {...props} class="ml-4 rounded"/>
        </label>
    )
};

export default Input;
