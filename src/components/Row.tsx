import { Component, For } from "solid-js";
import { FormElement } from "../types/jsonForm";
import Col from "./Col";


const Row: Component<FormElement> = (props) => {
    return <div class="grid grid-cols-12">
        <For each={props.elements}>
            {element=><Col {...element}/>}
        </For>
    </div>;
};

export default Row;
