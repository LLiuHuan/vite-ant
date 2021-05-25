import {AntState} from "./state";
import {AntGetterTypes} from "./getter-types";
import {GetterTree} from "vuex";
import {RootState} from "..";

export type Getters<S = AntState> = {
    [AntGetterTypes.IMAGE](state: S): string
}

export const getters: GetterTree<AntState, RootState> & Getters = {
    [AntGetterTypes.IMAGE](state: AntState) {
        if (state.img === "") {
            return ""
        }
        return state.locale
    }
}