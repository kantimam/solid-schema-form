import type { Component } from "solid-js";
import Col from "./components/Col";
import Input from "./components/Input";
import Row from "./components/Row";

interface componentsObject {
    [key: string]: Component
}

const componentsMap: componentsObject ={
    'form': (props: any)=><form>{props.children}</form>,
    'GridRow': Row,
    'GridCol': Col,
    'Text': Input,
    'default': Input

}


export default componentsMap;