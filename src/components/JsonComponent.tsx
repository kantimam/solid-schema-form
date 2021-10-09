import { Component} from "solid-js";
import { Dynamic } from "solid-js/web";
import { useComponentsMap } from "../context/ComponentsMapContext";
import { FormElement } from "../types/jsonForm";



const JsonComponent: Component<FormElement> = (element) => {
    const components=useComponentsMap();
    const componentOrDefault=components[element.type] ?? components["default"];
    return  <Dynamic component={componentOrDefault} {...element}/>
    
};

export default JsonComponent;
