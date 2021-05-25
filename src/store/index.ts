import {store as ant, AntState, AntStore} from './ant'
import {createStore, createLogger} from "vuex";

export interface RootState {
    ant: AntState
}

export type Store = AntStore<Pick<RootState, 'ant'>>


// const debug = process.env.NODE_ENV !== 'production'
const debug = false
const plugins = debug ? [createLogger({})]: []


export const store = createStore({
    plugins,
    modules: {
        ant,
    }
})

export function useStore(): Store {
    return store as Store;
}