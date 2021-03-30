import React, { Component } from "react";
//import {getProfile, saveProfile} from "./helpers/ApiService"
//import {getProfile, saveProfile} from "./helpers/ElkApiService"


//import Dashboard from './components/Dashboard'
//import Dashboard2 from './components/Dashboard2'
import DashboardElk from './components/DashboardElk'
//import Refresher from './components/Refresher'
import RefresherElk from './components/RefresherElk'



/*

(async () => {
    const saveres = await saveProfile('address1@sso', 'FIO', {
        NAME: 'ВИКТОРИЯ',
        SURNAME: 'ЕСИПОВНА',
        PATRONYMIC: "ФЕДОРОВНА"
    },true)
    console.log('saveres',saveres);
    const curProf = await getProfile('address1@sso')
    console.log('curProf',curProf);
})()

*/



class App extends Component {
    /*constructor(props) {
        super(props)
    }*/
    

    


    render() {
        return (
            
            <div className="container-fluid">
                 <RefresherElk/><br/><br/>
                 <DashboardElk/>
            </div>
            
        );
    }
}

export default App;
