import { createContext, useContext } from "solid-js";
import {createStore} from 'solid-js/store';
import { FormModel } from "../types/formMode";

const FormModelContext = createContext();

export function FormModelProvider(props) {
    const [formModel, setFormModel]=createStore<FormModel>({});
    const store=[
        formModel,
        {
            setInputValue(inputName: string, inputValue: string){
                setFormModel(inputName, (input)=>({...input, value: inputValue}))
            },
            setInputErrors(inputName: string, errorList: string[]){
                setFormModel(inputName, (input)=>({...input, errorList: errorList}))
            },
            pushInputError(inputName: string, errorString: string){
                setFormModel(inputName, (input)=>({...input, errorList: [...input.errorList, errorString]}))
            }              
        }   
    ]

    return (
        <FormModelContext.Provider value={store}>
            {props.children}
        </FormModelContext.Provider>
    );
}

export function useFormModel() { return useContext(FormModelContext); }

