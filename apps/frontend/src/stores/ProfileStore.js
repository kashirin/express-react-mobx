import { makeAutoObservable, makeObservable, autorun, runInAction, observable, computed, action } from "mobx"

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
        this.profile = profile
        this.isSaving = false
    }

    get fioComplete() {
        return this.profile && this.profile.NAME && this.profile.SURNAME && this.profile.PATRONYMIC
    }
    

    constructor (rootStore) {
        console.log('created ProfileStore');
        makeObservable(this, {
            profile: observable.deep,
            isLoading: observable,
            isSaving: observable,
            loaded: observable,
            fioComplete: computed,
            loadProfile: action,
            saveProfile: action
        })
        this._rootStore = rootStore
        
    }
}