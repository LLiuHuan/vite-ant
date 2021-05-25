<template>
  <a-result status="404" sub-title="Sorry, the page you visited does not exist." title="404">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
import { useStore } from '../../store'
import { AntGetterTypes } from '../../store/ant/getter-types'

export default {
  name: "404",
  setup(){
    const store = useStore()
    console.log("直接获取方式获取数据 【store.state.ant.locale】：" + store.state.ant.locale);

    const img = store.getters[AntGetterTypes.IMAGE];
    console.log("getter方式获取数据 【store.getters[AntGetterTypes.IMAGE]】：" + img);
  }
}
</script>

<style scoped>

</style>