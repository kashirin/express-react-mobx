import { makeAutoObservable, makeObservable, autorun, runInAction, observable, computed, action } from "mobx"

import { getMessages, addMessage } from "../helpers/ApiService"

export class MessagesStore {
    _rootStore

    messages = null

    isLoading = false
    isSaving = false
    loaded = false

    
    async loadMessages() {
        this.isLoading = true
        this.messages = await getMessages()
        //console.log('mmm',Array.isArray(this.messages),this.messages.length)
        this.isLoading = false
        this.loaded = true
    }

    async addMessage(msg) {
        this.isSaving = true
        await addMessage(msg)
        await this.loadMessages()
        this.isSaving = false
    }

    get count() {
        return ( this.messages && Array.isArray(this.messages)) ? this.messages.length : 0

    }

    get needFirstLoad() {
        return (!this.loaded && !this.isLoading)
    }
    

    constructor (rootStore) {
        console.log('created MessagesStore');
        makeObservable(this, {
            messages: observable.deep,
            isLoading: observable,
            isSaving: observable,
            loaded: observable,
            needFirstLoad: computed,
            loadMessages: action,
            addMessage: action
        })
        this._rootStore = rootStore
        
    }
}