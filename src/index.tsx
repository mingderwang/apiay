import * as React from 'react'
import ReactDOM from "react-dom";
import { h, render } from "preact";
import { Counter, fruits, animals, faces, ping, version } from "../dist/main";
console.log(version)
console.log(ping())
render(<Counter initial={10}/>, document.getElementById("root")!);
