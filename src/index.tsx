import { render } from "solid-js/web";
import App from "./App";
import componentsMap from "./componentsMap";
import { FormJsonSchema } from "./types/jsonForm";
import formJson from './formSchema.js';

const FORM_JSON: FormJsonSchema=formJson;
console.log(FORM_JSON)

render(
        () => <App componentsMap={componentsMap} formJsonSchema={FORM_JSON}/>, 
        document.getElementById("root")
    );
