import type { Component, PropsWithChildren } from "solid-js";
import componentsMap from "../componentsMap";

const JsonComponent: Component<{type: string}> = (props: PropsWithChildren<any>) => {
    const element: Component=componentsMap[props.type];
    return element(props);
};

export default JsonComponent;
