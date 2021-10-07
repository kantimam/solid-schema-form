import type { Component } from "solid-js";


const Col: Component = (props) => {
    return <div class="o-col" {...props}>{props.children}</div>;
};

export default Col;

