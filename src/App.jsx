import ReduxWithHook from './ReduxWithHook';
import ReduxWithClass from "./ReduxWithClass";
import './App.css'


function App() {
  /* Wanna learn from a good video tutorial?
  yreudx official docs recommends some high quality videos here: https://redux.js.org/tutorials/videos
  My personal favorite: https://youtu.be/NqzdVN2tyvQ

  But it is hard to find a video tutorial about ract-redux with the use of class components :(
  
  Luckly, I do have a simple example about it = D
  */

  /* But if you are all about reading trough docs, redux allready provides high quality documentation:
  https://redux.js.org/tutorials/essentials/part-1-overview-concepts
  and
  https://react-redux.js.org/introduction/getting-started
  */
  return (
    <>
      <ReduxWithClass/>
      <ReduxWithHook/>
    </>
  )
}

export default App
