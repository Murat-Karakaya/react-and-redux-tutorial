import { useSelector, useDispatch } from 'react-redux';
import {counterActions, messageActions} from "./redux-stuff/redux"

export default function ShowCounter() {
    // Yay! I can easily reach a redux state thanks to useSelector.
    const reduxCount = useSelector((state) => {
        //console.log("Current value of state: ", state)
        return state.counter.count
    })
    const reduxMessage = useSelector((state) => state.messenger.message)


    const dispatch = useDispatch();
    //const increment = (changeBy) => dispatch({type: "Global State/increment", payload:changeBy}); // This code should also work
    //console.log("increment action but not dispatch: ", counterActions.increment(4))
    const increment = (changeBy) => dispatch(counterActions.increment(changeBy))
    const decrement = (changeBy) => dispatch(counterActions.decrement(changeBy))
  
    const changeMessageValue = (value) => dispatch(messageActions.changeMessageValue(value));
    return(
        <>
        <h4>message and count shown with hook: {reduxMessage}, {reduxCount}</h4>
        <div className="card">
            <button onClick={() => increment(5)}>hook increment</button>
            <button onClick={() => decrement(5)}>hook decrement</button>
        </div>

        <input placeholder="hook input" onChange={(e) => changeMessageValue(e.target.value)}/>
        </>
    )
}