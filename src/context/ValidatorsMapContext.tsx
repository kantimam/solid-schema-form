import { createContext, useContext } from "solid-js";

const ComponentsMapContext = createContext();

export function ValidatorsProvider(props) {

  return (
    <ComponentsMapContext.Provider value={props.validators}>
      {props.children}
    </ComponentsMapContext.Provider>
  );
}

export function useValidatorsMap() { return useContext(ComponentsMapContext); }