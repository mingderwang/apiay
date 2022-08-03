import * as React from "react";
import { h } from 'preact';

const PKG_VERSION = 'PKG_VERSION';
export const version = PKG_VERSION;
export function ping() {
  return 'pong';
}

export const EmojiList = props =>
  props.emojis.map(emoji => <div key={emoji}>{emoji}</div>);
export const Emoji = props => (
  <div>
    <h2>{props.title}</h2>
    <EmojiList emojis={props.faces} />
    <EmojiList emojis={props.fruits} />
    <EmojiList emojis={props.animals} />
  </div>
);
export const App = props => (
  <div>
    <Emoji {...props} />
  </div>
);

/* 
   You can defined your own App as follows;
*/

// const App = props => (
//   <div>
//     <ul>
//       <Emoji
//         title={"Emoji"}
//         fruits={props.fruits}
//         faces={props.faces}
//         animals={props.animals}
//       />
//     </ul>
//   </div>
// );
export const faces = ["😀", "😅", "🤔", "👻", "👺"];
export const fruits = ["🍇", "🍈", "🍊"];
export const animals = ["🐳", "🐉", "🐟"];

