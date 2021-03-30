import {ProfileStore} from "./ProfileStore"
import {MessagesStore} from "./MessagesStore"
import {ElkProfileStore} from "./ElkProfileStore"

class _RootStore {
    constructor() {
        console.log('created root store');
        this.ProfileStore = new ProfileStore(this)
        this.MessagesStore = new MessagesStore(this)
        this.ElkProfileStore = new ElkProfileStore(this, 'address1@sso')
    }   
}

export const RootStore = new _RootStore() 


