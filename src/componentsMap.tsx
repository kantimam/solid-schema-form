import type { Component } from "solid-js";

interface componentsObject {
    [key: string]: Component
}

const componentsMap: componentsObject ={
    'form': (props: any)=><form>{props.children}</form>,
    'input': ()=><input/>
}


export default componentsMap;