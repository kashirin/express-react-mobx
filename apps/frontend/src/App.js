import React, { Component } from "react";
import {getProfile, saveProfile} from "./helpers/ApiService"

import RootStore from './stores/RootStore'

import Dashboard from './components/Dashboard'

/*

(async () => {
    await saveProfile({
        NAME: 'Сергей',
        SURNAME: 'Иванов'
    })
    const curProf = await getProfile()
    console.log('curProf',curProf);
})()

*/

class App extends Component {
    constructor(props) {
        super(props)
    }
    

    


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Приложение: MobX</h2>
                </div>
                <Dashboard/>
            </div>
            
        );
    }
}

export default App;
