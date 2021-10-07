import type { Component } from "solid-js";


const Row: Component = (props) => {
    return <div class="o-row" {...props}>{props.children}</div>;
};

export default Row;
