import type { Component } from "solid-js";
import { FormElement } from "../types/jsonForm";
import { Dynamic } from "solid-js/web";
import { useComponentsMap } from "../context/ComponentsMapContext";


const Col: Component<FormElement> = (props) => {
    const components=useComponentsMap();

    return <div class="o-col">
        col
        <Dynamic component={components[props.type]} {...props}/>
    </div>;
};

export default Col;

