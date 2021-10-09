import type { Component } from "solid-js";
import { FormElement } from "../types/jsonForm";


/* 
onMount(()=>{
    inputRef.addEventListener('input', onInput);
    inputRef.addEventListener('invalid', onInvalid);
})
onCleanup(()=>{
    inputRef.removeEventListener('input', onInput);
    inputRef.removeEventListener('invalid', onInvalid);
})
const onInvalid=(event: InputEvent)=>{
    console.log(event);
    console.log("input invalid")
}
const onInput=(event: InputEvent)=>{
    console.log((event.target as HTMLInputElement).value);
    console.log("change event fired")
}
 */
const Input: Component<FormElement> = (props) => {
    let inputRef;

    return (
        <label class="block py-2 m-4 outline-black bg-green-500 rounded s-field">
            <span class="s-field-label">{props.label}</span>
            <input 
                type="text" 
                class="ml-4 rounded s-field-input"
                ref={inputRef}
                required
                {...props}
            />
            <span className="s-field-info">
                info
            </span>
        </label>
    )
};

export default Input;
