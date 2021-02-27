import React, { Component } from "react";
import {getProfile, saveProfile} from "./helpers/ApiService"


//import Dashboard from './components/Dashboard'
import Dashboard2 from './components/Dashboard2'
import WidgetMyMessages from './components/WidgetMyMessages'
import Refresher from './components/Refresher'



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
                 <Refresher/>
                 <br/><br/>
                 <Dashboard2/>
                 <WidgetMyMessages/>
            </div>
            
        );
    }
}

export default App;
