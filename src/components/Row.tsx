import type { Component } from "solid-js";
import { FormElement } from "../types/jsonForm";
import JsonComponentList from "./JsonComponentList";


const Row: Component<FormElement> = (props) => {
    console.log(props)
    return <div class="m2" {...props}>
        row
       <JsonComponentList elements={props.elements}/>
    </div>;
};

export default Row;
