import * as React from "react";
import ReactDOM from "react-dom";
import { h } from 'preact';

export const message = 'Hello, World!';

const PKG_VERSION = 'PKG_VERSION';
export const version = PKG_VERSION;
export function ping() {
    return 'pong';
  }
  
  export const EmojiList = (props: { emojis: (boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined)[] }) =>
    props.emojis.map((emoji: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined) => <div key={emoji}>{emoji}</div>);
  export const Emoji = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; faces: any; fruits: any; animals: any; }) => (
    <div>
      <h2>{props.title}</h2>
      <EmojiList emojis={props.faces} />
      <EmojiList emojis={props.fruits} />
      <EmojiList emojis={props.animals} />
    </div>
  );
  export const App = (props: any) => (
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
  
