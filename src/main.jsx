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

/*您還可以如下所示將道具一個接一個地傳遞給子組件，但這很可惜。 */
/*通過使用Spread Attributes，只需編寫“ {... props}”，就可以將Props傳遞給子組件。 */

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
export const animals = ["🐳", "🐉", "🦖"];

