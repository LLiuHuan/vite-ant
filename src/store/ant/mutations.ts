import {MutationTree} from 'vuex'

// @ts-ignore
import {AntState} from './state'
import {AntMutationTypes} from './mutation-types'

/**
 * 1. 引用vuex
 * 2. 引用vuex的数据 state
 * 3. 引用自己创建的类型库
 *
 * 4. 声明一个自定义type
 *      内容为 [type](state, 参数1): void
 *      type为调用名称、state为配置的vuex数据、参数为自己配置的参数 可有可无 看需求、void 是不返回
 */


export type Mutations<S = AntState> = {
    [AntMutationTypes.LANGUAGE](state: S, payload: string): void
}

export const mutations: MutationTree<AntState> & Mutations = {
    [AntMutationTypes.LANGUAGE](state: AntState, payload: string) {
        state.locale = payload;
    }
}