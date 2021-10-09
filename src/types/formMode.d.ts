export interface InputModel {
    value: string;
    errorList: string[]
}


export interface FormModel {
    [inputName: string]: InputModel
}