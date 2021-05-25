import {ActionContext, ActionTree} from "vuex";


import { RootState } from '..'
import { Mutations } from './mutations'
import { AntState } from './state'
import { AntActionTypes } from './action-types'
import { AntMutationTypes } from './mutation-types'

/**
 * 1. 引用总的State
 * 2. 引用同步事件（Mutations）
 * 3. 引用vuex数据
 * 4. 引用异步事件（Actions）的type名
 * 5. 引用同步事件（Mutations）的type名
 *
 * 6. 创建commit的类型
 * 7. 异步事件的类型
 * 8. 创建异步事件
 */

type AntActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: string,
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AntState, RootState>, 'commit'>

export interface Actions {
    [AntActionTypes.LANGUAGE](
        { commit }: AntActionContext,
        payload: string
): void
}

export const actions: ActionTree<AntState, RootState> & Actions = {
    [AntActionTypes.LANGUAGE]({ commit }, payload: string) {
        commit(AntMutationTypes.LANGUAGE, payload)
    }
}