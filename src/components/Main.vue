<template>
  <a-layout class="main">
    <a-layout-sider
        class="aside"
    >Sider</a-layout-sider>
    <a-layout>
      <a-layout-header
          class="layout-header"
      >Header</a-layout-header>
      <a-layout-content
          class="main-content"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer
          class="layout-footer"
      >Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
  setup () {

    return {}
  }
})
</script>
