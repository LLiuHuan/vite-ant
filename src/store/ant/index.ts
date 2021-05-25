import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
} from 'vuex'

import {state} from './state'
import {mutations, Mutations} from './mutations'
import {actions, Actions} from './actions'
import {getters, Getters} from './getters'

import type {AntState} from './state'
import {RootState} from "..";

export {AntState}

export type AntStore<S = AntState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
    & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
};

export const store: Module<AntState, RootState> = {
    state,
    mutations,
    actions,
    getters
}