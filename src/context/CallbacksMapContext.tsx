import { createContext, useContext } from "solid-js";

const CallbacksMapContext = createContext();

export function CallbacksProvider(props) {

  return (
    <CallbacksMapContext.Provider value={props.context}>
      {props.children}
    </CallbacksMapContext.Provider>
  );
}

export function useCallbacksMap() { return useContext(CallbacksMapContext); }