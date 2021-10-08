import type { Component } from "solid-js";
import JsonForm from "./components/JsonForm";
import { CallbacksProvider } from "./context/CallbacksMapContext";
import { ComponentsProvider } from "./context/ComponentsMapContext";
import { ValidatorsProvider } from "./context/ValidatorsMapContext";
import { FormJsonSchema } from "./types/jsonForm";

interface JsonFormAppProps {
    componentsMap: any;
    callbacksMap?: any;
    validatorsMap?: any;
    formJsonSchema: FormJsonSchema
}

const App: Component<JsonFormAppProps> = (props) => {
    return (
        <ComponentsProvider context={props.componentsMap}>
            <ValidatorsProvider context={props.validatorsMap}>
                <CallbacksProvider context={props.callbacksMap}>
                    <JsonForm formSchema={props.formJsonSchema}/>
                </CallbacksProvider>
            </ValidatorsProvider>
        </ComponentsProvider>
    )    
};

export default App;
