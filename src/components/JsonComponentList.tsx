import { Component, For} from "solid-js";
import { FormElement } from "../types/jsonForm";
import JsonComponent from "./JsonComponent";



const JsonComponentList: Component<{elements: FormElement[]}> = (props) => {
    return (
        <For each={props.elements}>
            {element=>JsonComponent(element)}
        </For>
    );
};

export default JsonComponentList;
