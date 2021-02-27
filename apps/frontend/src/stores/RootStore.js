import {ProfileStore} from "./ProfileStore"
import {MessagesStore} from "./MessagesStore"

class _RootStore {
    constructor() {
        console.log('created root store');
        this.ProfileStore = new ProfileStore(this)
        this.MessagesStore = new MessagesStore(this)
    }   
}

export const RootStore = new _RootStore() 


