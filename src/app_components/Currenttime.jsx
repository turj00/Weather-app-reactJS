import React, { Component } from 'react'

export class Currenttime extends Component {


    state={

        date: new Date(),


    }
    callMe(){

        setInterval(() => {


           this.setState({date: new Date()})

        }, 1000)


    }
    render() {
        return (
            <div>
                <h2>Current local time: </h2>
                <h2 className="currentTime">{this.state.date.toLocaleTimeString()}</h2>
                {this.callMe()}
            </div>
        )
    }
}

export default Currenttime
