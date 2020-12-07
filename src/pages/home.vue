<template>
  <a-layout id="components-layout-demo-top">
    <a-layout-header>
      <div class="logo"> 阅读 </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="2" @click="onMenuClick">
          期刊
        </a-menu-item>
        <a-menu-item key="3" @click="onMenuClick">
          图书
        </a-menu-item>
        <a-menu-item key="7" @click="onMenuClick">
          报纸
        </a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content>
       <router-view></router-view>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      liqiantu ©2020 Created by Ant UED
    </a-layout-footer>

  </a-layout>

</template>

<script>
export default {
  methods: {
    onMenuClick(item) {
      if (item.item.isSelected) return;
      console.log('key', item);
      let url = `/index?kind=${item.key}`;
      this.$router.push(url);
    }
  }
}
</script>

<style>
#components-layout-demo-top .logo {
  line-height: 31px;
  text-align: center;
  color: white;
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>