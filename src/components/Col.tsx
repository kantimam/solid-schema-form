import type { Component } from "solid-js";
import { FormElement } from "../types/jsonForm";
import JsonComponent from "./JsonComponent";


const Col: Component<FormElement> = (props) => {
    const {viewPorts}=props.properties.gridColumnClassAutoConfiguration;
    const sizeLg=viewPorts?.lg?.numbersOfColumnsToUse || 12;
    const sizeMd=viewPorts?.md?.numbersOfColumnsToUse || 12;
    const sizeSm=viewPorts?.sm?.numbersOfColumnsToUse || 12;
    const sizeXs=viewPorts?.xs?.numbersOfColumnsToUse || 12;

    return (
        <div 
            class={`col-span-12 xs:col-span-${sizeXs} sm:col-span-${sizeSm} md:col-span-${sizeMd} lg:col-span-${sizeLg}`}
        >
            <JsonComponent {...props}/>
        </div>
    );
};

export default Col;

