import {ProfileStore} from "./ProfileStore"

class _RootStore {
    constructor() {
        console.log('created root store');
        this.ProfileStore = new ProfileStore(this)
        
    }
}

/*
let instanceOfRootStore;

export const getRootStore = () => {
    if(instanceOfRootStore){
        return instanceOfRootStore;
    }else{
        instanceOfRootStore = new RootStore();
    }
}
*/

export const RootStore = new _RootStore() 


