import React, { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light: 'none'
        }
    }
    

    


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Приложение: MobX</h2>
                </div>
                <span>light: {this.state.light}</span>
            </div>
            
        );
    }
}

export default App;
