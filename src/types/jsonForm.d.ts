export interface FormElementValidators {
    identifier: string;
    code?: number | string;
    errorMessage?: string;
}

export interface FormElementProps {
    name: string;
    gridColumnClassAutoConfiguration?: any;
    fluidAdditionalAttributes: string;
    validators: FormElementValidators;
}

export interface FormElement {
    type: string;
    identifier: string;
    label?: string;
    defaultValue?: string;
    properties: FormElementProps | [];
    elements?: FormElement[];
}

export interface FormApi {
    status?: any;
    errors?: any;
    callbacks?: any;
    actionAfterSuccess?: any;
    page: any;
}

export interface FormJsonSchema {
    id: string;
    api: FormApi;
    action: string;
    i18n?: any;
    elements: FormElement[]
}
