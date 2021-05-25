<template>
  <a-config-provider :getPopupContainer="getPopupContainer" :locale="locale === locale1 ? zhCN : enUS">
    <router-view/>
  </a-config-provider>
</template>

<script lang="ts">
import {defineComponent, ref, watch, provide,} from 'vue'

import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import 'moment/dist/locale/zh-cn';
import moment from "moment";

import {useStore} from './store'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const store = useStore();

    const getPopupContainer = (el, dialogContext) => {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    }

    const locale = ref(zhCN.locale);
    provide('locale', locale)
    watch(locale, val => {
      moment.locale(val);
    });

    const locale1 = ref(store.state.ant.locale);

    return {
      getPopupContainer,
      enUS,
      zhCN,
      locale,
      locale1,
      moment,
    }
  }
})
</script>