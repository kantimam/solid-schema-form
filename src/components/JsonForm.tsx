import type { Component } from "solid-js";
import { FormJsonSchema } from "../types/jsonForm";
import JsonComponentList from "./JsonComponentList";




const JsonForm: Component<{formSchema: FormJsonSchema}> = (props) => {
    
    return (
        <form
            class="solid-form container"
        >
            <JsonComponentList elements={props.formSchema.elements}/>
        </form>
    )
};

export default JsonForm;
