import type { Component } from "solid-js";


const Form: Component = (props) => {
    return <form class="o-form" {...props}>{props.children}</form>;
};

export default Form;
