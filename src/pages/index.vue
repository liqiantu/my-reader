<template>
  <div class="wrap">
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="list">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        v-bind:key="index"
        @click="onDetailClick(item)"
      >
        <a-card style="width: 300px">
          <h2>{{item.CategoryName}}</h2>
          <p>{{item.ResourceTotal}}种期刊</p>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: this.$route.query.kind,
      list: [],
    };
  },
  watch: {
    $route() {
      this.kind = this.$route.query.kind;
      this.fetchList();
    },
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    onDetailClick(item) {
      console.log(item);
      let url = `/category?categorycode=${item.CategoryCode}`
      this.$router.push(url);
    },
    fetchList() {
      let path = `/category/GetAllByKind?kind=${this.kind}`;
      this.axios.get(path).then((res) => {
        console.log(res);
        this.list = res.Data;
      });
    },
  },
};
</script>
<style>
.wrap {
  padding: 25px;
}
.intro {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>