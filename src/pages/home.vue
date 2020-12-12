<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      v-model="collapsed"
      collapsible
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['2']">
        <a-menu-item key="2" @click="onMenuClick"> 期刊 </a-menu-item>
        <a-menu-item key="3" @click="onMenuClick"> 图书 </a-menu-item>
        <a-menu-item key="7" @click="onMenuClick"> 报纸 </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Liqiantu ©2020 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    onMenuClick(item) {
      if (item.item.isSelected) return;
      console.log("key", item);
      let url = `/index?kind=${item.key}`;
      this.$router.push(url);
    },
  },
};
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>