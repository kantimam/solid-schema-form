import type { Component } from "solid-js";
import { FormJsonSchema } from "../types/jsonForm";
import JsonComponentList from "./JsonComponentList";


function createValidatorsMap(elements){

}

const JsonForm: Component<{formSchema: FormJsonSchema}> = (props) => {
    
    
    props.formSchema.elements.map(element=>{
        console.log("creating validator");        
    })
    
    const handleSubmit=(event: SubmitEvent)=>{
        event.preventDefault();
        const form=event.target as  HTMLFormElement;
        // check form validity
        if(!form.checkValidity()){
            // if the form is invalid
            console.log("form is invalid");

        }
    }

    return (
        <form
            class="solid-form container"
            onSubmit={handleSubmit}
        >
            <JsonComponentList elements={props.formSchema.elements}/>
            
            <button 
                class="rounded m-2 py-2 px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 s-btn s-btn-submit" 
                type="submit"
            >
                submit
            </button>
        </form>
    )
};

export default JsonForm;
