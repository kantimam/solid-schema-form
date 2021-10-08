import { createContext, useContext } from "solid-js";

const ComponentsMapContext = createContext();

export function ComponentsProvider(props) {

  return (
    <ComponentsMapContext.Provider value={props.context}>
      {props.children}
    </ComponentsMapContext.Provider>
  );
}

export function useComponentsMap() { return useContext(ComponentsMapContext); }