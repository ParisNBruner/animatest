import React from "react";
import ReactDOM, {render} from "react-dom";
import App from "./App"
import "./styleguide.css"
import "./globals.css"

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
document.getElementById("root")
);

/*
ReactDOM.render(<App />, document.getElementById("app"));
*/
