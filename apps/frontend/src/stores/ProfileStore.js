import { makeObservable, reaction, observable, computed, action } from "mobx"

import { getProfile, saveProfile } from "../helpers/ApiService"

export class ProfileStore {
    _rootStore

    profile = null // без инициализации не работало

    isLoading = false
    isSaving = false
    loaded = false

    
    async loadProfile() {
        this.isLoading = true
        this.profile = await getProfile()
        this.isLoading = false
        this.loaded = true
    }

    async saveProfile(profile) {
        this.isSaving = true
        await saveProfile(profile)
        // read from server because of possible custom backen logic
        await this.loadProfile()
        this.isSaving = false
    }

    get fioComplete() {
        return this.profile && this.profile.NAME && this.profile.SURNAME && this.profile.PATRONYMIC
    }

    get needFirstLoad() {
        return (!this.loaded && !this.isLoading)
    }

    get myname() {
        return this.profile ? this.profile.NAME : null
    }
    

    constructor (rootStore) {
        console.log('created ProfileStore');
        makeObservable(this, {
            profile: observable.struct,
            isLoading: observable,
            isSaving: observable,
            loaded: observable,
            fioComplete: computed,
            myname: computed,
            needFirstLoad: computed,
            loadProfile: action,
            saveProfile: action
        })
        this._rootStore = rootStore

        reaction(
            () => this.isLoading,
            (isLoading, prevIsLoading) => {
               
                console.log("reaction on profile store changed isloading",prevIsLoading,isLoading)
            }
        )

        reaction(
            () => this.profile,
            (profile, prevProfile) => {
               
                console.log("reaction on profile store changed profile",prevProfile,profile)
            }
        )

        reaction(
            () => this.myname,
            (name, prevName) => {
               
                console.log("reaction on profile store changed name",prevName,name)
            }
        )
        
    }
}