import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incriment() {
        // this.setState({
        //     count: this.state.count+1
        // }, ()=> {
        //     console.log("Callback value", this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrimentFive() {
        this.incriment()
        this.incriment()
        this.incriment()
        this.incriment()
        this.incriment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrimentFive()}>Incriment</button>
            </div>
        )
    }
}

export default Counter
