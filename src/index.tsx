import * as React from 'react'
import ReactDOM from "react-dom";
import { h, render } from "preact";
import { Counter, fruits, animals, faces, ping, version } from "apiay";
console.log(version)
console.log(ping())
render(<Counter initial={0}/>, document.getElementById("root")!);
