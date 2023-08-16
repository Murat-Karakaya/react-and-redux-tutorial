import React from "react";
import { connect } from "react-redux";
import {counterActions, messageActions} from "./redux-stuff/redux"


//this function, -with the use of connect- has the ability to get the redux states and pass them down as props of this class.
//It is basicly kinda like useSelector for class components
const reduxToProps = state => ({
    reduxCount: state.counter.count,
    reduxMessage: state.messenger.message
})

//this function, -with the use of connect- has the ability to dispatch the redux actions.
const dispatchToRedux = dispatch => ({
    increment(changeBy){dispatch(counterActions.increment(changeBy))},
    decrement(changeBy){dispatch(counterActions.decrement(changeBy))},
    changeMessageValue(value){dispatch(messageActions.changeMessageValue(value))}
})

class ShowReduxWithClass extends React.Component {
    constructor () {
        super()
    }

    render() {
        const {reduxCount, reduxMessage, increment, decrement, changeMessageValue} = this.props
        return(
            <>
            <h4>message and count shown with class: {reduxMessage}, {reduxCount}</h4>


            <div className="card">
                <button onClick={() => increment(5)}>class increment</button>
                <button onClick={() => decrement(5)}>class decrement</button>
            </div>
    
            <input placeholder="class input" onChange={(e) => changeMessageValue(e.target.value)}/>
            </>
        )
    }
}


export default connect(reduxToProps, dispatchToRedux)(ShowReduxWithClass)