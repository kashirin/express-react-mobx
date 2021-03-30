import { makeObservable, reaction, observable, computed, action } from "mobx"

import { getProfile, saveProfile } from "../helpers/ElkApiService"

export class ElkProfileStore {
    _rootStore
    _sso

    PROFILE_FIO = null
    PROFILE_PERSON = null
    isLoading = false
    isSaving = false
    loaded = false

    
    async loadProfile() {
        
        this.isLoading = true
        const profile = await getProfile(this._sso)
        this.PROFILE_FIO = profile.FIO
        this.PROFILE_PERSON = profile.PERSON
        this.isLoading = false
        
        this.loaded = true
    }

    async saveProfile(code, data, force) {
        this.isSaving = true
        await saveProfile(this._sso, code, data, force)
        // read from server because of possible custom backen logic
        await this.loadProfile()
        this.isSaving = false
    }

    get needFirstLoad() {
        return (!this.loaded && !this.isLoading)
    }

    

    constructor (rootStore, sso) {
        console.log('created ElkProfileStore');
        makeObservable(this, {
            
            isLoading: observable,
            isSaving: observable,
            loaded: observable,
            PROFILE_FIO: observable.struct,
            PROFILE_PERSON: observable.struct,
            needFirstLoad: computed,
            loadProfile: action,
            saveProfile: action,
            getCopyOfProfile: false
        })
        this._rootStore = rootStore
        this._sso = sso

        reaction(
            () => this.loaded,
            (loaded, prevLoaded) => {
               
                //console.log("reaction on profile store changed isloading",prevIsLoading,isLoading)
            }
        )
        
    }
}