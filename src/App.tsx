import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import JsonForm from "./components/JsonForm";



const SCHEMA={
    elements: [
        {type: 'form'},
        {type: 'input'},
        {type: 'input'},
        {type: 'input'},
        {type: 'input'},
    ]
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <JsonForm type="form">
            <button className="o-submit" type="submit">submit</button>
        </JsonForm>
      </header>
    </div>
  );
};

export default App;
